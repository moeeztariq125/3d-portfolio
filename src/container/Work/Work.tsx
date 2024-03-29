import { Line, ProjectCard, Stars } from '../../components'
import './Work.scss'
import { projectsList } from '../../constants'


const Work = () => {


  return (
    <>
    <div className='app__work WORK'>
      <Stars/>
      <div className='app__work__inner'>
      <Line start={false}/>
      <div className='app__work__content'>
        <h2>&lt;Projects /&gt;</h2>
        <div className='projects-list'>
        {projectsList.map((project,key)=>{
          return <ProjectCard {...project} key={key}/>
        })} 
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Work