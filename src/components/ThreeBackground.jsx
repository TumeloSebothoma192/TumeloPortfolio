import React, {useRef, useEffect} from 'react'
import * as THREE from 'three'

export default function ThreeBackground(){
  const mountRef = useRef(null)

  useEffect(()=>{
    const el = mountRef.current
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, el.clientWidth / el.clientHeight, 0.1, 1000)
    camera.position.z = 80

    const renderer = new THREE.WebGLRenderer({antialias:true, alpha:true})
    renderer.setSize(el.clientWidth, el.clientHeight)
    renderer.setPixelRatio(window.devicePixelRatio || 1)
    renderer.domElement.style.position = 'absolute'
    renderer.domElement.style.top = '0'
    renderer.domElement.style.left = '0'
    el.appendChild(renderer.domElement)

    // points cloud
    const particles = new THREE.BufferGeometry()
    const count = 1200
    const positions = new Float32Array(count * 3)
    for(let i=0;i<count;i++){
      positions[i*3] = (Math.random()-0.5) * 200
      positions[i*3+1] = (Math.random()-0.5) * 120
      positions[i*3+2] = (Math.random()-0.5) * 200
    }
    particles.setAttribute('position', new THREE.BufferAttribute(positions,3))

    const material = new THREE.PointsMaterial({color:0x2bf06a, size:1.6, transparent:true, opacity:0.9})
    const points = new THREE.Points(particles, material)
    scene.add(points)

    // subtle lights
    const dir = new THREE.DirectionalLight(0xffffff, 0.2)
    dir.position.set(0,1,1)
    scene.add(dir)

    let frameId
    const onResize = ()=>{
      renderer.setSize(el.clientWidth, el.clientHeight)
      camera.aspect = el.clientWidth / el.clientHeight
      camera.updateProjectionMatrix()
    }
    window.addEventListener('resize', onResize)

    const animate = ()=>{
      points.rotation.y += 0.0008
      points.rotation.x += 0.0004
      camera.position.x += (Math.sin(Date.now()*0.0002) * 0.4 - camera.position.x) * 0.02
      renderer.render(scene, camera)
      frameId = requestAnimationFrame(animate)
    }
    animate()

    return ()=>{
      cancelAnimationFrame(frameId)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
      el.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <div ref={mountRef} style={{position:'fixed', inset:0, zIndex:0, pointerEvents:'none'}} aria-hidden="true" />
  )
}
