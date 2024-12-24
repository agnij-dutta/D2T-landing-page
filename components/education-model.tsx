'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { Suspense } from 'react'

function Model() {
  const { scene } = useGLTF("https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/book/model.gltf")
  return <primitive object={scene} scale={3} /> // Increased scale from 2 to 3
}

export function EducationModel() {
  return (
    <div className="h-[500px] w-full"> {/* Increased height from 400px to 500px */}
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.7} /> {/* Increased intensity from 0.5 to 0.7 */}
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.5} /> {/* Added intensity */}
        <pointLight position={[-10, -10, -10]} intensity={1.2} /> {/* Added intensity */}
        <Suspense fallback={null}>
          <Model />
          <OrbitControls autoRotate />
        </Suspense>
      </Canvas>
    </div>
  )
}

