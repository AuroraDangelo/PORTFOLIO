import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from '../../context/ThemeContext';

export const AuroraCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const themeRef = useRef(theme);

  useEffect(() => {
    themeRef.current = theme;
  }, [theme]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({
      antialias: false,
      powerPreference: 'high-performance',
      alpha: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);

    // Aurora Fragment Shader - Atmospheric, soft, cinematic, never washing out text
    const fragmentShader = `
      uniform float uTime;
      uniform vec2 uResolution;
      uniform vec2 uMouse;
      uniform float uTheme; // 0.0 for dark, 1.0 for light
      uniform float uScrollProgress;

      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
      }

      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        float a = hash(i);
        float b = hash(i + vec2(1.0, 0.0));
        float c = hash(i + vec2(0.0, 1.0));
        float d = hash(i + vec2(1.0, 1.0));
        return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
      }

      float fbm(vec2 p) {
        float v = 0.0;
        float a = 0.5;
        vec2 shift = vec2(100.0);
        mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
        for (int i = 0; i < 4; ++i) {
          v += a * noise(p);
          p = rot * p * 2.0 + shift;
          a *= 0.5;
        }
        return v;
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / uResolution.xy;
        vec2 p = uv * 2.0 - 1.0;
        p.x *= uResolution.x / uResolution.y;

        // Subtle gentle mouse inertia shift
        vec2 mouseOffset = (uMouse - 0.5) * 0.15;
        p += mouseOffset;

        float t = uTime * 0.12;

        // Organic flowing curtains (predominantly in upper atmosphere and sides)
        float wave1 = sin(p.x * 1.6 + t * 1.0 + fbm(p * 1.4 + t * 0.25) * 2.2) * 0.4;
        float wave2 = cos(p.x * 2.0 - t * 0.8 + fbm(p * 1.8 - t * 0.25) * 1.8) * 0.35;
        float wave3 = sin(p.x * 1.1 + t * 0.5 + fbm(p * 1.1 + t * 0.2) * 1.5) * 0.35;

        // Smooth vertical falloffs
        float auroraCurtain1 = smoothstep(0.85, 0.05, abs(p.y - wave1 - 0.45));
        float auroraCurtain2 = smoothstep(0.8, 0.05, abs(p.y - wave2 - 0.65));
        float auroraCurtain3 = smoothstep(0.9, 0.05, abs(p.y - wave3 + 0.35));

        // Atmospheric Aurora Color Palette (soft and natural)
        vec3 colEmerald = vec3(0.04, 0.55, 0.38);   // Soft deep emerald
        vec3 colTeal    = vec3(0.05, 0.50, 0.48);   // Soft teal
        vec3 colCyan    = vec3(0.02, 0.45, 0.60);   // Deep atmospheric cyan
        vec3 colViolet  = vec3(0.35, 0.20, 0.70);   // Deep night violet
        vec3 colBlue    = vec3(0.12, 0.30, 0.65);   // Midnight blue
        vec3 colMagenta = vec3(0.55, 0.15, 0.60);   // Deep magenta accent

        // Layer composition
        vec3 auroraColor = vec3(0.0);
        auroraColor += colEmerald * auroraCurtain1 * 0.55;
        auroraColor += mix(colCyan, colTeal, sin(p.x * 1.2 + t) * 0.5 + 0.5) * auroraCurtain2 * 0.45;
        auroraColor += mix(colViolet, colBlue, cos(p.x * 1.0 - t) * 0.5 + 0.5) * auroraCurtain3 * 0.35;
        
        // Gentle crest glints
        float crest = fbm(p * 2.0 + t * 0.3);
        auroraColor += colMagenta * (auroraCurtain1 * auroraCurtain2) * crest * 0.2;

        // Base dark night sky background
        vec3 darkBg = vec3(0.02, 0.025, 0.04); // #05070c
        vec3 lightBg = vec3(0.97, 0.98, 0.99); // #f8fafc

        // Starfield particles in dark mode
        float star = 0.0;
        if (uTheme < 0.5) {
          float starNoise = hash(floor(gl_FragCoord.xy * 0.22));
          if (starNoise > 0.99) {
            float twinkle = sin(uTime * 2.0 + starNoise * 120.0) * 0.5 + 0.5;
            star = twinkle * 0.25 * (1.0 - uv.y * 0.3);
          }
        }

        vec3 finalColor;
        if (uTheme > 0.5) {
          vec3 softAurora = auroraColor * 0.1;
          finalColor = mix(lightBg, softAurora + lightBg, 0.92);
        } else {
          // Perfectly balanced dark background with soft atmospheric glow
          finalColor = darkBg + (auroraColor * 0.48) + vec3(star);
        }

        // Soft natural outer vignette
        float vignette = smoothstep(2.0, 0.3, length(p));
        finalColor *= mix(0.92, 1.0, vignette);

        gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

    const vertexShader = `
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `;

    const uniforms = {
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uTheme: { value: themeRef.current === 'light' ? 1.0 : 0.0 },
      uScrollProgress: { value: 0.0 },
    };

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      depthWrite: false,
      depthTest: false,
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    let targetMouseX = 0.5;
    let targetMouseY = 0.5;
    let currentMouseX = 0.5;
    let currentMouseY = 0.5;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX / window.innerWidth;
      targetMouseY = 1.0 - e.clientY / window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      uniforms.uScrollProgress.value = progress;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      uniforms.uResolution.value.set(width, height);
    };

    window.addEventListener('resize', handleResize);

    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();
      uniforms.uTime.value = prefersReducedMotion ? 0.5 : elapsedTime;

      currentMouseX += (targetMouseX - currentMouseX) * 0.035;
      currentMouseY += (targetMouseY - currentMouseY) * 0.035;
      uniforms.uMouse.value.set(currentMouseX, currentMouseY);

      const targetThemeVal = themeRef.current === 'light' ? 1.0 : 0.0;
      uniforms.uTheme.value += (targetThemeVal - uniforms.uTheme.value) * 0.08;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="aurora-canvas-container"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
      }}
      aria-hidden="true"
    />
  );
};
