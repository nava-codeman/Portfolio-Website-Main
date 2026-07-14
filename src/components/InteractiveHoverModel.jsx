import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function InteractiveHoverModel({
  size = 'min(60vw, 620px)',
  radius = 1.6,
  detail = 4,             // icosahedron subdivision — 4 is a good quality/perf balance
  influenceRadius = 0.9,  // how far the "touch" effect reaches, in local units
  maxPush = 0.32,         // how far vertices can be pushed outward
  ease = 0.14,            // spring ease factor (higher = snappier)
  autoRotateSpeed = 0.15,
  colorA = '#ff6a2b',     // orange — matches the video's warm neon strips
  colorB = '#2bd9ff',     // cyan — matches the video's cool neon strips
}) {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let width = mount.clientWidth;
    let height = mount.clientHeight;

    // ---------- Scene / Camera / Renderer ----------
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 6);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x000000, 0); // fully transparent
    mount.appendChild(renderer.domElement);

    // ---------- Geometry ----------
    const geometry = new THREE.IcosahedronGeometry(radius, detail);
    const posAttr = geometry.attributes.position;
    const vertexCount = posAttr.count;
    const originalPositions = Float32Array.from(posAttr.array);
    const currentOffsets = new Float32Array(vertexCount); // scalar push per vertex, eased over time

    // Vertex color gradient (orange -> cyan) based on height, for the neon-panel look
    const colors = new Float32Array(vertexCount * 3);
    const cA = new THREE.Color(colorA);
    const cB = new THREE.Color(colorB);
    for (let i = 0; i < vertexCount; i++) {
      const y = posAttr.getY(i);
      const t = THREE.MathUtils.clamp((y + radius) / (radius * 2), 0, 1);
      const c = cA.clone().lerp(cB, t);
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.computeVertexNormals();

    // ---------- Materials ----------
    const material = new THREE.MeshStandardMaterial({
      vertexColors: true,
      flatShading: true,
      metalness: 0.65,
      roughness: 0.22,
      emissive: new THREE.Color(0x0a0a0a),
      emissiveIntensity: 0.5,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Wireframe overlay shares the SAME geometry instance, so it deforms
    // in lockstep with the solid mesh automatically — no extra work needed.
    const wireMaterial = new THREE.MeshBasicMaterial({
      color: 0x9fe8ff,
      wireframe: true,
      transparent: true,
      opacity: 0.22,
      depthWrite: false,
    });
    const wireMesh = new THREE.Mesh(geometry, wireMaterial);
    wireMesh.scale.setScalar(1.003); // avoid z-fighting with the solid surface
    mesh.add(wireMesh);

    // ---------- Lights (matching the video's warm/cool neon) ----------
    scene.add(new THREE.AmbientLight(0x30313a, 1.1));

    const orangeLight = new THREE.PointLight(0xff6a2b, 5, 12);
    orangeLight.position.set(-3, 2, 3);
    scene.add(orangeLight);

    const cyanLight = new THREE.PointLight(0x2bd9ff, 5, 12);
    cyanLight.position.set(3, -2, 3);
    scene.add(cyanLight);

    const rimLight = new THREE.DirectionalLight(0xffffff, 0.4);
    rimLight.position.set(0, 4, -4);
    scene.add(rimLight);

    // ---------- Pointer tracking + raycasting ----------
    const raycaster = new THREE.Raycaster();
    const pointerNDC = new THREE.Vector2(-10, -10); // start off-screen so nothing is "touched"
    let touchPointLocal = null;
    let pointerActive = false;

    function updatePointer(clientX, clientY) {
      const rect = mount.getBoundingClientRect();
      pointerNDC.x = ((clientX - rect.left) / rect.width) * 2 - 1;
      pointerNDC.y = -((clientY - rect.top) / rect.height) * 2 + 1;
      pointerActive = true;
    }
    function onPointerMove(e) {
      updatePointer(e.clientX, e.clientY);
    }
    function onPointerLeave() {
      pointerActive = false;
      touchPointLocal = null;
    }

    // Listen on window so the effect works even if other elements sit on top
    // (e.g. transparent glass panels layered above the canvas).
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    mount.addEventListener('pointerleave', onPointerLeave, { passive: true });

    // ---------- Animation loop ----------
    const clock = new THREE.Clock();
    let rafId;

    function animate() {
      const dt = Math.min(clock.getDelta(), 0.05);

      mesh.rotation.y += dt * autoRotateSpeed;
      mesh.rotation.x += dt * autoRotateSpeed * 0.2;

      // Find where the ray hits the (undeformed-ish) mesh this frame
      touchPointLocal = null;
      if (pointerActive) {
        raycaster.setFromCamera(pointerNDC, camera);
        const hits = raycaster.intersectObject(mesh, false);
        if (hits.length > 0) {
          const p = hits[0].point.clone();
          mesh.worldToLocal(p);
          touchPointLocal = p;
        }
      }

      // Per-vertex localized push, eased toward target each frame
      const pos = geometry.attributes.position;
      for (let i = 0; i < vertexCount; i++) {
        const ox = originalPositions[i * 3];
        const oy = originalPositions[i * 3 + 1];
        const oz = originalPositions[i * 3 + 2];

        let target = 0;
        if (touchPointLocal) {
          const dx = ox - touchPointLocal.x;
          const dy = oy - touchPointLocal.y;
          const dz = oz - touchPointLocal.z;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
          if (dist < influenceRadius) {
            const falloff = 1 - dist / influenceRadius;
            target = falloff * falloff * maxPush; // smooth quadratic falloff
          }
        }

        currentOffsets[i] += (target - currentOffsets[i]) * ease;

        if (currentOffsets[i] > 0.0001) {
          const len = Math.sqrt(ox * ox + oy * oy + oz * oz) || 1;
          const nx = ox / len, ny = oy / len, nz = oz / len;
          pos.setXYZ(
            i,
            ox + nx * currentOffsets[i],
            oy + ny * currentOffsets[i],
            oz + nz * currentOffsets[i]
          );
        } else if (pos.getX(i) !== ox || pos.getY(i) !== oy || pos.getZ(i) !== oz) {
          pos.setXYZ(i, ox, oy, oz);
        }
      }
      pos.needsUpdate = true;
      geometry.computeVertexNormals();

      // Orbit the accent lights slowly for a living, tunnel-like glow
      const t = clock.elapsedTime;
      orangeLight.position.set(Math.cos(t * 0.3) * 3.2, Math.sin(t * 0.25) * 2, 3);
      cyanLight.position.set(Math.cos(t * 0.3 + Math.PI) * 3.2, Math.sin(t * 0.25 + Math.PI) * 2, 3);

      renderer.render(scene, camera);
      rafId = requestAnimationFrame(animate);
    }
    rafId = requestAnimationFrame(animate);

    // ---------- Resize handling ----------
    function onResize() {
      width = mount.clientWidth;
      height = mount.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }
    window.addEventListener('resize', onResize);

    // ---------- Cleanup ----------
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('pointermove', onPointerMove);
      mount.removeEventListener('pointerleave', onPointerLeave);

      geometry.dispose();
      material.dispose();
      wireMaterial.dispose();
      renderer.dispose();

      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, [radius, detail, influenceRadius, maxPush, ease, autoRotateSpeed, colorA, colorB]);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      style={{
        position: 'fixed', // Keep it fixed so it scrolls with the screen or stays in place
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: size,
        height: size,
        zIndex: 5,
        pointerEvents: 'none', // clicks pass through to content below; hover still tracked via window listener
      }}
    />
  );
}
