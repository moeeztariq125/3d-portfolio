import { Line, ProjectCard } from '../../components'
import './Work.scss'
import { projectsList } from '../../constants'


const Work = () => {


  return (
    <>
    <div className='app__work WORK'>
      <Line start={false}/>
      <div className='app__work__content'>
        <ProjectCard/>
      </div>
    </div>
    </>
  )
}

export default Work