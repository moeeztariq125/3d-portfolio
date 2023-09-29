import './Navbar.scss'
import Icon from './Icon'
import { useState, useRef, useEffect } from 'react'
const Navbar = () => {
  let icons = ['icon1','icon2','icon3','icon4']
  const [isActive, setIsActive] = useState('icon1')
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

  useEffect(() => {
    // Initial position calculation
    updateCoverPosition();

    // Add a resize event listener to update position when the window size changes
    window.addEventListener('resize', updateCoverPosition);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateCoverPosition);
    };
  }, [isActive]);
  
  return (
    <>
    <div className="icon__cover" style={coverStyle}/>
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
      </>
  )
}

export default Navbar