const Icon:React.FC<IconProps> = ({isActive, Name, onClick}) => {
    
  return (
    <div className={`icon ${isActive? 'active':'inactive'}`} onClick={onClick}>
        {Name}
    </div>
  )
}

interface IconProps {
isActive: boolean;
Name : String;
onClick : ()=>void;
}

export default Icon