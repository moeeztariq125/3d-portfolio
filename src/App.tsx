import {Header, Footer, About, Skills, Testimonials, Work} from './container'
import {Navbar, Stars} from './components'
import './App.scss'
const App = () => {
  return (
    <div className="app">
      <Navbar/>
      <Header/>
      <div className='work_section'>
      <Work/>
      <Stars/>
      </div>
      <About/>
      <Skills/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default App