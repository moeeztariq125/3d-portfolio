import './Navbar.scss'
import Icon from './Icon'
import { useState, useRef, useEffect } from 'react'
const Navbar = () => {
  let icons = ['home','about','work','contact']
  const [isActive, setIsActive] = useState('home')
  const [coverStyle, setCoverStyles] = useState({})
  const activeIconRef = useRef(null)

  const updateCoverPosition = () => {
    if (activeIconRef.current) {
      const icon = activeIconRef.current.getBoundingClientRect();
      const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize); // Get the root font size in pixels

      // Calculate values in rem units
      setCoverStyles({
        left: `${(icon.left / rootFontSize)}rem`,
        top: `${(icon.top / rootFontSize)}rem`,
        width: `${(icon.width / rootFontSize)}rem`,
        height: `${(icon.height / rootFontSize)}rem`,
      });
    }
  };
  const scrollToSection = () => {
    if(activeIconRef.current){
      const sectionName = activeIconRef.current.innerText;
      const section = document.getElementsByClassName(sectionName);
      section[0].scrollIntoView({behavior: 'smooth'})
    }
  }

  useEffect(() => {
    // Initial position calculation
    updateCoverPosition();
    scrollToSection()
    // Add a resize event listener to update position when the window size changes
    window.addEventListener('resize', updateCoverPosition);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateCoverPosition);
    };
  }, [isActive]);
  
  return (
    <>
    <nav className='navbar' >
    {icons.map((icon) => (
      <Icon key={icon}
      isActive={isActive === icon} 
      Name={icon} 
      onClick = {()=>{setIsActive(icon)}} 
      ref={(ref:any) => {
        if(isActive === icon){activeIconRef.current = ref}
      }}
      />
      
      ))}
    </nav>
    <div className="icon__cover" style={coverStyle}/>

      </>
  )
}

export default Navbar