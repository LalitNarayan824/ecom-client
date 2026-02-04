"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const CelestialHero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      container.appendChild(renderer.domElement);
    } catch (err) {
      console.error('WebGL not supported', err);
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const clock = new THREE.Clock();

    const vertexShader = `
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      precision highp float;
      uniform vec2 iResolution;
      uniform float iTime;

      float hash(vec2 p) {
        p = fract(p * vec2(123.34, 456.21));
        p += dot(p, p + 45.32);
        return fract(p.x * p.y);
      }

      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        float a = hash(i);
        float b = hash(i + vec2(1.0, 0.0));
        float c = hash(i + vec2(0.0, 1.0));
        float d = hash(i + vec2(1.0, 1.0));
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
      }

      void main() {
        // Normalize UVs
        vec2 uv = (gl_FragCoord.xy * 2.0 - iResolution.xy) / min(iResolution.x, iResolution.y);
        
        // --- MOVE FLOWER TO UPPER RIGHT ---
        // Shifting coordinates: Subtracting from UV moves the object in the opposite direction
        uv += vec2(0.1, 0.0); 

        float t = iTime * 0.4;
        float dist = length(uv);
        float angle = atan(uv.y, uv.x);

        float organicNoise = noise(uv * 1.5 + t * 0.2);
        
        // Natural Big Petals
        float petalBase = sin(angle * 5.0 + t); 
        float petalVariation = sin(angle * 2.0 - t * 0.5) * 0.3;
        float flowerShape = (petalBase + petalVariation) * 0.5; 

        // Layers
        float outerBloom = smoothstep(0.9 + flowerShape, 0.1, dist);
        float innerBloom = smoothstep(0.4 + flowerShape * 0.5, 0.0, dist);

        vec3 spaceBlack = vec3(0.02, 0.005, 0.04);
        vec3 petalColor = vec3(0.4, 0.1, 0.8); 
        vec3 highlight  = vec3(0.3, 0.7, 1.0); 

        vec3 color = mix(spaceBlack, petalColor, outerBloom);
        color = mix(color, highlight, innerBloom * 0.7);
        
        // Center Glow
        float glow = 0.05 / dist;
        color += vec3(0.8, 0.6, 1.0) * glow * (0.8 + 0.2 * organicNoise);

        gl_FragColor = vec4(color, 1.0);
      }
    `;

    const uniforms = {
      iTime: { value: 0 },
      iResolution: { value: new THREE.Vector2() }
    };
    const material = new THREE.ShaderMaterial({ vertexShader, fragmentShader, uniforms });
    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const onResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h);
      uniforms.iResolution.value.set(w, h);
    };
    window.addEventListener('resize', onResize);
    onResize();

    renderer.setAnimationLoop(() => {
      uniforms.iTime.value = clock.getElapsedTime();
      renderer.render(scene, camera);
    });

    return () => {
      window.removeEventListener('resize', onResize);
      renderer.setAnimationLoop(null);
      if (renderer.domElement.parentNode) {
        container.removeChild(renderer.domElement);
      }
      material.dispose();
      geometry.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <section style={{ 
      position: 'relative', 
      width: '100%', 
      height: '100vh', 
      overflow: 'hidden',
      backgroundColor: '#05010a' 
    }}>
      {/* 1. Shader Background */}
      <div ref={containerRef} style={{ position: 'absolute', inset: 0, zIndex: 0 }} />

      {/* 2. Hero Image Text (Bottom Left) */}
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '5%',
        zIndex: 1,
        maxWidth: '40%', // Adjust based on your image size
      }}>
        <img 
          src={'/hero-text5.png'} 
          alt="Hero Text" 
          style={{ width: '100%', height: 'auto', display: 'block' }} 
        />
        
        {/* Optional: Add a button below your image */}
        {/* <button style={{
          marginTop: '2rem',
          padding: '12px 30px',
          background: 'transparent',
          color: 'white',
          border: '1px solid rgba(255,255,255,0.3)',
          borderRadius: '4px',
          cursor: 'pointer',
          backdropFilter: 'blur(10px)'
        }}>
          Explore More
        </button> */}
      </div>
    </section>
  );
};

export default CelestialHero;