import { Line, Earth } from '../../components'
import {Canvas} from '@react-three/fiber'
import {OrbitControls, ScrollControls} from '@react-three/drei'
import './Work.scss'
import {  useState } from 'react'


const Work = () => {
  const [rotation,setRotation] = useState([0,0.001,0])


  return (
    <>
    <div className='app__work WORK'>
      <Line start={false}/>
      <div className='app__work__content'>
        <h2>&lt;Work /&gt;</h2>
        <Canvas camera={{position:[0,0,1000]}}>
          <ambientLight intensity={12}/>
          {/* <OrbitControls /> */}
          <Earth position={[0,0,0]} rotation={rotation}/>
        </Canvas>
      </div>
    </div>
    </>
  )
}

export default Work