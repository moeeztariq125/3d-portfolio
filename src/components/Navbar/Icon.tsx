import {forwardRef} from 'react'

const Icon:React.FC<IconProps> = forwardRef(({isActive, Name, onClick},ref) => {
    
  return (
    <div id={Name} className={`icon ${isActive? 'active':'inactive'}`} onClick={onClick} ref={ref}>
        {Name}
    </div>
  )
})

interface IconProps {
isActive: boolean;
Name : string;
onClick : ()=>void;
}

export default Icon