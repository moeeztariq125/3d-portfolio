import { Line, Stars } from '../../components'
import './About.scss'

const About = () => {
  return (
    <div className='app__about ABOUT'>
      <Stars/>
      <div className='app__about__inner'>
      <Line start={false}/>
      <div className='app__about__content'>
        <h2>&lt;About /&gt;</h2> 
        <p><span className='green'>class</span> <span className='yellow'>Moeez Tariq</span> {`{`}</p>
        <p className='comment'>// It is what it is.</p>
        <p className='comment'>// I keep learning and class keeps expanding.</p>
        {/* constructor */}
        <p><span className='dots'>··</span><span className='green'>constructor()</span>{' { '} </p>
        <p><span className='dots'>····</span><span className='red'>this</span>.<span className='lightGreen'>name</span> = <span className='desc'>'Moeez Tariq'</span></p>
        <p><span className='dots'>····</span><span className='red'>this</span>.<span className='lightGreen'>email</span> = <span className='desc'>'moeeztariq125@gmail.com'</span> </p>
        <p><span className='dots'>··</span>{'}'}</p>
        {/* Work Experience */}
        <p><span className='dots'>··</span><span className='yellow'>workExperience()</span>{' { '} </p>
        <p><span className='dots'>····</span><span className='green'>return</span> {`[`}</p>
        <p><span className='dots'>······</span>{'{ '}<span className='desc'>'2024-Now'</span> : <span className='desc'>'NodeJS developer at BlockBunny.'</span>{' }'}</p>
        <p><span className='dots'>······</span>{'{ '}<span className='desc'>'2021-Now'</span> : <span className='desc'>'Senior Full-Stack Engineer at SystemsLtd.'</span>{' }'}</p>
        <p><span className='dots'>······</span>{'{ '}<span className='desc'>'2020-2021'</span> : <span className='desc'>'IOT/ML Intern at RiseTech Pvt Ltd.'</span>{' }'}</p>
        <p><span className='dots'>······</span>{'{ '}<span className='desc'>'2020-Now'</span> : <span className='desc'>'Full-Stack Designer/developer at MTsHomeLab.'</span>{' }'}</p>
        <p><span className='dots'>····</span>{`]`}</p>
        <p><span className='dots'>··</span>{'}'}</p>
        {/* education */}
        <p><span className='dots'>··</span><span className='yellow'>education()</span>{' { '} </p>
        <p><span className='dots'>····</span><span className='green'>return</span> {`[`}</p>
        <p><span className='dots'>······</span>{'{ '}<span className='desc'>'2017-2021'</span> : <span className='desc'>'NUST - Bachelor's Degree, Computer Engineering'</span>{' }'}</p>
        <p><span className='dots'>····</span>{`]`}</p>
        <p><span className='dots'>··</span>{'}'}</p>
        {/* Certifications */}
        <p><span className='dots'>··</span><span className='yellow'>certifications()</span>{' { '} </p>
        <p><span className='dots'>····</span><span className='green'>return</span> {`[`}</p>
        <p><span className='dots'>······</span>{'{ '}<span className='desc'>'2023-November'</span> : <span className='desc'>'Meta Front-end Developer Professional - Coursera'</span>{' }'}</p>
        <p><span className='dots'>······</span>{'{ '}<span className='desc'>'2021-January'</span> : <span className='desc'>'Full-Stack Web Development with React - Coursera'</span>{' }'}</p>
        <p><span className='dots'>····</span>{`]`}</p>
        <p><span className='dots'>··</span>{'}'}</p>
        {/* skills */}
        <p><span className='dots'>··</span><span className='yellow'>skills()</span>{' { '} </p>
        <p><span className='dots'>····</span><span className='green'>return</span> {`[`}</p>
        <p><span className='dots'>······</span>{'{ '}<span className='desc'>'Languages'</span> : <span className='desc'>' JavaScript, TypeScript, HTML5, CSS3, Python, C++'</span>{' }'}</p>
        <p><span className='dots'>······</span>{'{ '}<span className='desc'>'Frameworks'</span> : <span className='desc'>' NodeJS, ReactJS, NextJS, NestJS, ExpressJS, BootStrap, TailwindCSS, SCSS, ThreeJS, React Three Fiber'</span>{' }'}</p>
        <p><span className='dots'>······</span>{'{ '}<span className='desc'>'Test Cases'</span> : <span className='desc'>'Jest'</span>{' }'}</p>
        <p><span className='dots'>······</span>{'{ '}<span className='desc'>'Operating Systems'</span> : <span className='desc'>'Windows, Linux'</span>{' }'}</p>
        <p><span className='dots'>······</span>{'{ '}<span className='desc'>'Version Control'</span> : <span className='desc'>'Git, SVN, SourceTree'</span>{' }'}</p>
        <p><span className='dots'>······</span>{'{ '}<span className='desc'>'Build Tools'</span> : <span className='desc'>' Webpack, Vite, NPM, TSC, Babel, ESLint, Prettier'</span>{' }'}</p>
        <p><span className='dots'>······</span>{'{ '}<span className='desc'>'Databases'</span> : <span className='desc'>' MongoDB, DocumentDB, Redis, MSSQL, MySQL, PostgreSQL'</span>{' }'}</p>
        <p><span className='dots'>······</span>{'{ '}<span className='desc'>'Message Queues'</span> : <span className='desc'>'NATS, RabbitMQ, Apache Kafka, Redis'</span>{' }'}</p>
        <p><span className='dots'>······</span>{'{ '}<span className='desc'>'CI/CD'</span> : <span className='desc'>'Azure Devops, Jenkins'</span>{' }'}</p>
        <p><span className='dots'>······</span>{'{ '}<span className='desc'>'IAC'</span> : <span className='desc'>'Terraform, SST, AWS CDK'</span>{' }'}</p>
        <p><span className='dots'>····</span>{`]`}</p>
        <p><span className='dots'>··</span>{'}'}</p>
        <p>{'}'}</p>
      </div>
      </div>
    </div>
  )
}

export default About