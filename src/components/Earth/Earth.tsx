/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.14 public/models/Earth.glb 
*/
import  {  useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Cube001: THREE.Mesh
  }
  materials: {
    ['Default OBJ']: THREE.MeshStandardMaterial
  }
}
function Earth(props:any) {
  const { nodes, materials } = useGLTF('./models/Earth.glb') as GLTFResult
  const ref = useRef<THREE.Group>()
  useFrame(() => {
    if (ref.current) {
      if(props.rotation){
        ref.current.rotation.y += props.rotation[1]; // Rotate on the Y-axis (adjust the rotation speed as needed)
      }
    }
  });
  return (
    <group {...props} dispose={null} ref={ref}>
      <mesh geometry={nodes.Cube001.geometry} material={materials['Default OBJ']} />
    </group>
  )
}

useGLTF.preload('./models/Earth.glb')



export default Earth