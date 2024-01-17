import {Header, Footer, About, Skills, Testimonials, Work} from './container'
import {Navbar, Stars} from './components'
import './App.scss'
const App = () => {
  return (
    <div className="app">
      <Navbar/>
      <Header/>
      <About/>
      {/* <Work/> */}
    </div>
  )
}

export default App