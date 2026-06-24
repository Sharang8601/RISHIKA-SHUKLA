"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeAnimation() {
  const shaderCanvasRef = useRef<HTMLCanvasElement>(null);
  const threeContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // ----------------------------------------------------
    // 1. WebGL Liquid Gradient Shader Animation
    // ----------------------------------------------------
    const canvas = shaderCanvasRef.current;
    if (!canvas) return;

    let gl = (canvas.getContext("webgl") || canvas.getContext("experimental-webgl")) as WebGLRenderingContext | null;
    if (!gl) return;

    const vs = `
      attribute vec2 a_position;
      varying vec2 v_texCoord;
      void main() {
        v_texCoord = a_position * 0.5 + 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fs = `
      precision highp float;
      varying vec2 v_texCoord;
      uniform float u_time;
      uniform vec2 u_resolution;
      
      void main() {
          vec2 uv = v_texCoord;
          
          // Soft flowing liquid gradient
          float noise = sin(uv.x * 10.0 + u_time * 0.5) * 0.5 + 0.5;
          float noise2 = cos(uv.y * 12.0 - u_time * 0.3) * 0.5 + 0.5;
          
          vec3 color1 = vec3(1.0, 0.97, 0.97); // surface-bright #fff8f7
          vec3 color2 = vec3(0.96, 0.26, 0.49); // primary #f5427e
          
          vec3 finalColor = mix(color1, color2, (noise * noise2) * 0.15);
          
          gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

    const compileShader = (type: number, src: string) => {
      const s = (gl as WebGLRenderingContext).createShader(type);
      if (!s) return null;
      (gl as WebGLRenderingContext).shaderSource(s, src);
      (gl as WebGLRenderingContext).compileShader(s);
      return s;
    };

    const vertexShader = compileShader(gl.VERTEX_SHADER, vs);
    const fragmentShader = compileShader(gl.FRAGMENT_SHADER, fs);
    if (!vertexShader || !fragmentShader) return;

    const prog = gl.createProgram();
    if (!prog) return;
    gl.attachShader(prog, vertexShader);
    gl.attachShader(prog, fragmentShader);
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );

    const pos = gl.getAttribLocation(prog, "a_position");
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, "u_time");
    const uRes = gl.getUniformLocation(prog, "u_resolution");
    const uMouse = gl.getUniformLocation(prog, "u_mouse");

    let mouse = { x: canvas.width / 2, y: canvas.height / 2 };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width && rect.height) {
        const nx = (event.clientX - rect.left) / rect.width;
        const ny = 1.0 - (event.clientY - rect.top) / rect.height;
        mouse.x = nx * canvas.width;
        mouse.y = ny * canvas.height;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animationFrameId1 = 0;
    const syncSize = () => {
      const w = canvas.clientWidth || 1280;
      const h = canvas.clientHeight || 720;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    };

    const renderShader = (t: number) => {
      if (!gl) return;
      syncSize();
      gl.viewport(0, 0, canvas.width, canvas.height);
      if (uTime) gl.uniform1f(uTime, t * 0.001);
      if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
      if (uMouse) gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationFrameId1 = requestAnimationFrame(renderShader);
    };

    renderShader(0);

    // ----------------------------------------------------
    // 2. Three.js Floating Particles Animation
    // ----------------------------------------------------
    const threeContainer = threeContainerRef.current;
    if (!threeContainer) {
      // Clean up shader before exit
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId1);
      return;
    }

    const width = threeContainer.clientWidth || window.innerWidth;
    const height = threeContainer.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio || 1);
    threeContainer.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xf5427e, 1, 10);
    pointLight.position.set(2, 2, 2);
    scene.add(pointLight);

    // Creating a "floating particles" background
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      color: 0xf5427e,
      transparent: true,
      opacity: 0.4,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    let animationFrameId2 = 0;
    function animateThree() {
      animationFrameId2 = requestAnimationFrame(animateThree);

      particlesMesh.rotation.y += 0.001;
      particlesMesh.rotation.x += 0.0005;

      renderer.render(scene, camera);
    }

    animateThree();

    const handleResize = () => {
      const w = threeContainer.clientWidth || window.innerWidth;
      const h = threeContainer.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId1);
      cancelAnimationFrame(animationFrameId2);

      // Clean up ThreeJS resources
      if (threeContainer && renderer.domElement) {
        if (threeContainer.contains(renderer.domElement)) {
          threeContainer.removeChild(renderer.domElement);
        }
      }
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
      {/* WebGL Custom Gradient Shader Canvas */}
      <canvas
        ref={shaderCanvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ display: "block" }}
      />
      {/* ThreeJS Floating Particles Container */}
      <div
        ref={threeContainerRef}
        className="absolute inset-0 w-full h-full"
        style={{ display: "block" }}
      />
    </div>
  );
}
