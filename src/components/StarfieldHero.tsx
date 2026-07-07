import { useEffect, useRef } from 'react'
import * as THREE from 'three'

class StarfieldScene {
  scene: THREE.Scene
  camera: THREE.PerspectiveCamera
  renderer: THREE.WebGLRenderer
  cameraGroup: THREE.Group
  particles: THREE.Points
  mouse = { x: 0, y: 0 }
  targetMouse = { x: 0, y: 0 }
  animationId: number | null = null
  sizes = { width: 0, height: 0 }

  constructor(container: HTMLElement) {
    this.sizes.width = container.offsetWidth
    this.sizes.height = container.offsetHeight

    this.scene = new THREE.Scene()
    this.scene.fog = new THREE.FogExp2(0x0c1a2d, 0.001)

    this.camera = new THREE.PerspectiveCamera(60, this.sizes.width / this.sizes.height, 0.1, 2000)
    this.camera.position.set(0, 0, 100)

    this.cameraGroup = new THREE.Group()
    this.cameraGroup.add(this.camera)
    this.scene.add(this.cameraGroup)

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    this.renderer.setSize(this.sizes.width, this.sizes.height)
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    this.renderer.setClearColor(0x0c1a2d, 1)
    container.appendChild(this.renderer.domElement)

    // Create particles
    const particleCount = 8000
    const geometry = new THREE.BufferGeometry()
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)
    const sizes = new Float32Array(particleCount)

    const goldColor = new THREE.Color(0xe8c97a)
    const creamColor = new THREE.Color(0xf7f5f0)

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3
      positions[i3] = (Math.random() - 0.5) * 2000
      positions[i3 + 1] = (Math.random() - 0.5) * 2000
      positions[i3 + 2] = (Math.random() - 0.5) * 2000

      const color = Math.random() > 0.5 ? goldColor : creamColor
      colors[i3] = color.r + (Math.random() - 0.5) * 0.1
      colors[i3 + 1] = color.g + (Math.random() - 0.5) * 0.1
      colors[i3 + 2] = color.b + (Math.random() - 0.5) * 0.1

      sizes[i] = Math.random() * 2 + 0.5
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1))

    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uPixelRatio: { value: this.renderer.getPixelRatio() },
      },
      vertexShader: `
        attribute float size;
        varying vec3 vColor;
        uniform float uTime;
        uniform float uPixelRatio;
        
        void main() {
          vColor = color;
          vec3 pos = position;
          pos.y += sin(uTime * 0.1 + position.x * 0.01) * 10.0;
          pos.x += cos(uTime * 0.08 + position.z * 0.01) * 5.0;
          
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = size * uPixelRatio * (200.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        
        void main() {
          float dist = length(gl_PointCoord - vec2(0.5));
          if (dist > 0.5) discard;
          float alpha = 1.0 - smoothstep(0.3, 0.5, dist);
          gl_FragColor = vec4(vColor, alpha * 0.8);
        }
      `,
      transparent: true,
      vertexColors: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })

    this.particles = new THREE.Points(geometry, material)
    this.scene.add(this.particles)

    // Mouse follow
    window.addEventListener('mousemove', this.onMouseMove)
    window.addEventListener('resize', this.onResize)

    this.animate()
  }

  onMouseMove = (e: MouseEvent) => {
    this.targetMouse.x = (e.clientX / this.sizes.width - 0.5) * 2
    this.targetMouse.y = -(e.clientY / this.sizes.height - 0.5) * 2
  }

  onResize = () => {
    const container = this.renderer.domElement.parentElement
    if (!container) return
    this.sizes.width = container.offsetWidth
    this.sizes.height = container.offsetHeight
    this.camera.aspect = this.sizes.width / this.sizes.height
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(this.sizes.width, this.sizes.height)
  }

  animate = () => {
    this.animationId = requestAnimationFrame(this.animate)

    const time = performance.now() * 0.001

    // Update mouse with damping
    this.mouse.x += (this.targetMouse.x - this.mouse.x) * 0.05
    this.mouse.y += (this.targetMouse.y - this.mouse.y) * 0.05

    this.camera.position.x = this.mouse.x * 10
    this.camera.position.y = this.mouse.y * 10
    this.camera.lookAt(0, 0, 0)

    // Update particles
    const material = this.particles.material as THREE.ShaderMaterial
    material.uniforms.uTime.value = time

    this.particles.rotation.y = time * 0.02
    this.particles.rotation.x = time * 0.01

    this.renderer.render(this.scene, this.camera)
  }

  destroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId)
    }
    window.removeEventListener('mousemove', this.onMouseMove)
    window.removeEventListener('resize', this.onResize)

    const geometry = this.particles.geometry
    geometry.dispose()
    ;(this.particles.material as THREE.ShaderMaterial).dispose()
    this.renderer.dispose()

    if (this.renderer.domElement.parentElement) {
      this.renderer.domElement.parentElement.removeChild(this.renderer.domElement)
    }
  }
}

export default function StarfieldHero({ children }: { children?: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<StarfieldScene | null>(null)

  useEffect(() => {
    if (containerRef.current && !sceneRef.current) {
      sceneRef.current = new StarfieldScene(containerRef.current)
    }

    return () => {
      if (sceneRef.current) {
        sceneRef.current.destroy()
        sceneRef.current = null
      }
    }
  }, [])

  return (
    <div className="relative w-full overflow-hidden md:min-h-screen">
      <div ref={containerRef} className="absolute inset-0 md:inset-0" style={{ minHeight: '100%' }} aria-hidden="true" />
      {children}
    </div>
  )
}
