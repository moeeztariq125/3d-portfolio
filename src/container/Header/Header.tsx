import {useState} from 'react'
import { Line } from '../../components'
import './Header.scss'
import {app_header_skills} from '../../constants'
const Header = () => {
  const [word, setWord] = useState(app_header_skills[0])

  return (
    <div className='app__header'>
      <Line start={true}/>
      <div className='circle'/>
      <div className='app__header__content'>
      <h2>&lt;Start /&gt;</h2>
      <h1>Hi, I'm <span className='title'>Moeez Tariq</span></h1>
      <h1 className='before_skills'>I <span className='italic'>design</span> and <span className='bold'>develop</span> {word} </h1>
      </div>
    </div>
  )
}

export default Header