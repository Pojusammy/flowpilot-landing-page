"use client"

import { useEffect, useRef } from "react"

export function AnimatedShaderBackground() {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) {
      return
    }

    let cleanup: (() => void) | undefined
    let cancelled = false

    const startShader = async () => {
      const THREE = await import("three")

      if (cancelled || !container.isConnected) {
        return
      }

      const scene = new THREE.Scene()
      const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
      const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true, powerPreference: "low-power" })
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")

      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.25))
      renderer.setClearColor(0x000000, 0)
      container.appendChild(renderer.domElement)

      const material = new THREE.ShaderMaterial({
        uniforms: {
          iTime: { value: 0 },
          iResolution: { value: new THREE.Vector2(1, 1) },
        },
        vertexShader: `
        void main() {
          gl_Position = vec4(position, 1.0);
        }
      `,
        fragmentShader: `
        uniform float iTime;
        uniform vec2 iResolution;

        #define NUM_OCTAVES 3

        float rand(vec2 n) {
          return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
        }

        float noise(vec2 p) {
          vec2 ip = floor(p);
          vec2 u = fract(p);
          u = u*u*(3.0-2.0*u);

          float res = mix(
            mix(rand(ip), rand(ip + vec2(1.0, 0.0)), u.x),
            mix(rand(ip + vec2(0.0, 1.0)), rand(ip + vec2(1.0, 1.0)), u.x), u.y);
          return res * res;
        }

        float fbm(vec2 x) {
          float v = 0.0;
          float a = 0.3;
          vec2 shift = vec2(100);
          mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
          for (int i = 0; i < NUM_OCTAVES; ++i) {
            v += a * noise(x);
            x = rot * x * 2.0 + shift;
            a *= 0.4;
          }
          return v;
        }

        void main() {
          vec2 shake = vec2(sin(iTime * 1.2) * 0.005, cos(iTime * 2.1) * 0.005);
          vec2 p = ((gl_FragCoord.xy + shake * iResolution.xy) - iResolution.xy * 0.5) / iResolution.y * mat2(6.0, -4.0, 4.0, 6.0);
          vec2 v;
          vec4 o = vec4(0.0);

          float f = 2.0 + fbm(p + vec2(iTime * 2.4, 0.0)) * 0.5;

          for (float i = 0.0; i < 22.0; i++) {
            v = p + cos(i * i + (iTime + p.x * 0.08) * 0.025 + i * vec2(13.0, 11.0)) * 3.5 + vec2(sin(iTime * 3.0 + i) * 0.003, cos(iTime * 3.5 - i) * 0.003);
            float tailNoise = fbm(v + vec2(iTime * 0.5, i)) * 0.3 * (1.0 - (i / 22.0));
            vec4 flowpilotColors = vec4(
              0.18 + 0.16 * sin(i * 0.2 + iTime * 0.25),
              0.42 + 0.22 * cos(i * 0.3 + iTime * 0.35),
              0.95 + 0.18 * sin(i * 0.4 + iTime * 0.2),
              1.0
            );
            vec4 currentContribution = flowpilotColors * exp(sin(i * i + iTime * 0.8)) / length(max(v, vec2(v.x * f * 0.015, v.y * 1.5)));
            float thinnessFactor = smoothstep(0.0, 1.0, i / 22.0) * 0.6;
            o += currentContribution * (1.0 + tailNoise * 0.8) * thinnessFactor;
          }

          o = tanh(pow(o / 100.0, vec4(1.6)));
          gl_FragColor = o * 1.8;
        }
      `,
      })

      const geometry = new THREE.PlaneGeometry(2, 2)
      const mesh = new THREE.Mesh(geometry, material)
      let frameId = 0
      let lastFrameTime = 0
      let isVisible = true

      scene.add(mesh)

      const setSize = () => {
        const rect = container.getBoundingClientRect()
        const width = Math.max(1, Math.floor(rect.width))
        const height = Math.max(1, Math.floor(rect.height))

        renderer.setSize(width, height, false)
        material.uniforms.iResolution.value.set(width, height)
      }

      const animate = (time: number) => {
        if (isVisible && time - lastFrameTime > 33) {
          if (!mediaQuery.matches) {
            material.uniforms.iTime.value += 0.033
          }
          renderer.render(scene, camera)
          lastFrameTime = time
        }

        frameId = requestAnimationFrame(animate)
      }

      const resizeObserver = new ResizeObserver(setSize)
      const visibilityObserver = new IntersectionObserver(([entry]) => {
        isVisible = entry.isIntersecting
      })

      resizeObserver.observe(container)
      visibilityObserver.observe(container)
      setSize()
      animate(0)

      cleanup = () => {
        cancelAnimationFrame(frameId)
        resizeObserver.disconnect()
        visibilityObserver.disconnect()
        renderer.domElement.remove()
        geometry.dispose()
        material.dispose()
        renderer.dispose()
      }
    }

    const startupObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startupObserver.disconnect()
          void startShader()
        }
      },
      { rootMargin: "500px 0px" },
    )

    startupObserver.observe(container)

    return () => {
      cancelled = true
      startupObserver.disconnect()
      cleanup?.()
    }
  }, [])

  return <div ref={containerRef} className="absolute inset-0 h-full w-full overflow-hidden" aria-hidden="true" />
}

export default AnimatedShaderBackground
