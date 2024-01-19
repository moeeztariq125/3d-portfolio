import {Header, Footer, About, Skills, Testimonials, Work, Contact} from './container'
import {Navbar, Stars} from './components'
import './App.scss'
const App = () => {
  return (
    <div className="app">
      <Navbar/>
      <Header/>
      <About/>
      <Work/>
      <Contact/>
    </div>
  )
}

export default App