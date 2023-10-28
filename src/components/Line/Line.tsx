import './Line.scss'
const Line:React.FC<LineProps> = (props) => {
  return (
    <div className='Line'>
        {props.start?<div className='header_line_start_empty'/>:<div className='header_line_start'/>}
        <div className='header_circle'/>
        <div className='header_line'/>
    </div>
  )
}

interface LineProps {
    start: boolean;
}
export default Line