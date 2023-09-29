import './Navbar.scss'
import Icon from './Icon'
import { useState } from 'react'
const Navbar = () => {
  let icons = ['icon1','icon2','icon3','icon4']
  let [isActive, setIsActive] = useState('icon1')
  return (
    <nav className='navbar'>
    {icons.map((icon) => (
        <Icon key={icon} isActive={isActive === icon} Name={icon} onClick = {()=>{setIsActive(icon)}}/>
      ))}
    </nav>
  )
}

export default Navbar