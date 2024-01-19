import './Navbar.scss'
import Icon from './Icon'
import { useState, useRef, useEffect } from 'react'
const Navbar = () => {
  let icons = ['HOME','ABOUT','WORK','CONTACT']
  const [isActive, setIsActive] = useState('HOME')
  const [coverStyle, setCoverStyles] = useState({})
  const [toCover, setToCover] = useState('HOME')
  const activeIconRef = useRef(null)

  const updateCoverPosition = () => {
      const icon = document.getElementById(toCover.toUpperCase())!.getBoundingClientRect();
      const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize); // Get the root font size in pixels

      // Calculate values in rem units
      setCoverStyles({
        left: `${(icon.left / rootFontSize)}rem`,
        top: `${(icon.top / rootFontSize)}rem`,
        width: `${(icon.width / rootFontSize)}rem`,
        height: `${(icon.height / rootFontSize)}rem`,
      });
  };
  const scrollToSection = () => {
    if(activeIconRef.current){
      const sectionName = activeIconRef.current.innerText;
      const section = document.getElementsByClassName(sectionName);
      section[0].scrollIntoView({behavior: 'smooth'})
    }
  }
  useEffect(() => {
    scrollToSection()
  }, [isActive]);


  useEffect(()=>{
    updateCoverPosition();
  },[toCover])


  useEffect(()=>{
    window.addEventListener('resize', updateCoverPosition);
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setToCover(entry.target.className.split(' ')[1]);
        }
      });
    }, options);
    icons.forEach((icon) => {
    const section = document.getElementsByClassName(icon.toUpperCase());
    if (section.length > 0) {
      observer.observe(section[0]);
    }
  });
  return () => {
    window.removeEventListener('resize', updateCoverPosition);
    observer.disconnect();
  };
  },[])
  
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