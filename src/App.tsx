import {Header, About, Work, Contact} from './container'
import {Navbar} from './components'
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