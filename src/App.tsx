import {Header, Footer, About, Skills, Testimonials, Work} from './container'
import {Navbar} from './components'
import './App.scss'
const App = () => {
  return (
    <div className="app">
      <Navbar/>
      <Header/>
      <Footer/>
      <About/>
      <Skills/>
      <Testimonials/>
      <Work/>
    </div>
  )
}

export default App