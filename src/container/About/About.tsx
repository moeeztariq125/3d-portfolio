import { Line } from '../../components'
import './About.scss'

const About = () => {
  return (
    <div className='app__about ABOUT'>
      <Line start={false}/>
      <div className='app__about__content'>
        <h2>&lt;About /&gt;</h2>
      </div>
    </div>
  )
}

export default About