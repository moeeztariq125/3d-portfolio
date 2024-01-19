import { Line } from '../../components'
import './Contact.scss'
const Contact = () => {
  return (
    <div className='app__contact CONTACT'>
        <div className='app__contact__inner'>
        <Line start={false}/>

        <div className='app__contact__content'>
            <h2>&lt;Contact /&gt;</h2> 
            <h1>Find me on:</h1>
            <div className='contacts'>
                <a href='https://www.linkedin.com/in/moeez-tariq-975919196/'>in/moeez-tariq-975919196</a>
                <a href='https://github.com/moeeztariq125'>github.com/moeeztariq125</a>
                <a href='mailto:moeeeeez115@gmail.com'>Mail me</a>
            </div>
            <a href="mailto:moeeztariq125@gmail.com">
            <button>CONTACT ME</button>
            </a>
            <small>Made by Moeez. 2023 &lt;A work in progress&gt;</small>

        </div>
        </div>
    </div>
  )
}

export default Contact