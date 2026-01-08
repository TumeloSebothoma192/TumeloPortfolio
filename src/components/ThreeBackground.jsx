import React, { useRef, useEffect } from "react";

export default function ThreeBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;

    let camera, scene, renderer, controls;
    let pointLight, pointLight2;
    let mounted = true;

    const init = async () => {
      const THREE = await import("three");
      const { OrbitControls } = await import("three/examples/jsm/controls/OrbitControls.js");

      if (!mounted) return;

      // camera
      camera = new THREE.PerspectiveCamera(45, el.clientWidth / el.clientHeight, 1, 1000);
      camera.position.set(0, 10, 40);

      // scene
      scene = new THREE.Scene();
      scene.add(new THREE.AmbientLight(0x222233, 4));

      function generateTexture() {
        const canvas = document.createElement("canvas");
        canvas.width = 2;
        canvas.height = 2;
        const context = canvas.getContext("2d");
        context.fillStyle = "white";
        context.fillRect(0, 1, 2, 1);
        return canvas;
      }

      function createLight(color) {
        const intensity = 200;
        const light = new THREE.PointLight(color, intensity, 20);
        light.castShadow = true;
        light.shadow.bias = -0.005;
        light.shadow.mapSize.width = 128;
        light.shadow.mapSize.height = 128;
        light.shadow.radius = 10;

        const sphereGeo = new THREE.SphereGeometry(0.3, 12, 6);
        const sphereMat = new THREE.MeshBasicMaterial({ color });
        if (sphereMat.color && typeof sphereMat.color.multiplyScalar === "function") sphereMat.color.multiplyScalar(1.6);
        const sphere = new THREE.Mesh(sphereGeo, sphereMat);
        light.add(sphere);

        const texture = new THREE.CanvasTexture(generateTexture());
        texture.magFilter = THREE.NearestFilter;
        texture.wrapT = THREE.RepeatWrapping;
        texture.wrapS = THREE.RepeatWrapping;
        texture.repeat.set(1, 4.5);

        const innerGeo = new THREE.SphereGeometry(2, 32, 8);
        const innerMat = new THREE.MeshPhongMaterial({ side: THREE.DoubleSide, alphaMap: texture, alphaTest: 0.5 });
        const inner = new THREE.Mesh(innerGeo, innerMat);
        inner.castShadow = true;
        inner.receiveShadow = true;
        light.add(inner);

        return light;
      }

      pointLight = createLight(0x0088ff);
      scene.add(pointLight);
      pointLight2 = createLight(0xff8888);
      scene.add(pointLight2);

      const geometry = new THREE.BoxGeometry(30, 30, 30);
      const material = new THREE.MeshPhongMaterial({ color: 0xb8c0c2, shininess: 10, specular: 0x111111, side: THREE.BackSide });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.y = 10;
      mesh.receiveShadow = true;
      scene.add(mesh);

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
      renderer.setSize(el.clientWidth, el.clientHeight);
      renderer.shadowMap.enabled = true;
      renderer.domElement.style.position = "absolute";
      renderer.domElement.style.top = "0";
      renderer.domElement.style.left = "0";
      renderer.domElement.style.zIndex = "0";
      renderer.domElement.style.pointerEvents = "none";
      el.appendChild(renderer.domElement);

      controls = new OrbitControls(camera, renderer.domElement);
      controls.target.set(0, 10, 0);
      controls.update();

      function onWindowResize() {
        if (!el) return;
        camera.aspect = el.clientWidth / el.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(el.clientWidth, el.clientHeight);
      }
      window.addEventListener("resize", onWindowResize);

      function animate() {
        const time = performance.now() * 0.001;

        pointLight.position.x = Math.sin(time * 0.6) * 9;
        pointLight.position.y = Math.sin(time * 0.7) * 9 + 6;
        pointLight.position.z = Math.sin(time * 0.8) * 9;
        pointLight.rotation.x = time;
        pointLight.rotation.z = time;

        const t2 = time + 10000;
        pointLight2.position.x = Math.sin(t2 * 0.6) * 9;
        pointLight2.position.y = Math.sin(t2 * 0.7) * 9 + 6;
        pointLight2.position.z = Math.sin(t2 * 0.8) * 9;
        pointLight2.rotation.x = t2;
        pointLight2.rotation.z = t2;

        renderer.render(scene, camera);
      }

      renderer.setAnimationLoop(animate);

      // expose cleanup
      return () => {
        window.removeEventListener("resize", onWindowResize);
        if (renderer) {
          renderer.setAnimationLoop(null);
          renderer.dispose();
          if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
        }
        if (controls) controls.dispose();
      };
    };

    let cleanup = () => {};
    init().then((c) => {
      if (typeof c === "function") cleanup = c;
    });

    return () => {
      mounted = false;
      try {
        cleanup();
      } catch (e) {
        // ignore cleanup errors
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}
      aria-hidden="true"
    />
  );
}
