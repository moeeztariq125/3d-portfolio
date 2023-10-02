import {forwardRef} from 'react'

const Icon:React.FC<IconProps> = forwardRef(({isActive, Name, onClick},ref) => {
    
  return (
    <div className={`icon ${isActive? 'active':'inactive'}`} onClick={onClick} ref={ref}>
        {Name}
    </div>
  )
})

interface IconProps {
isActive: boolean;
Name : String;
onClick : ()=>void;
}

export default Icon