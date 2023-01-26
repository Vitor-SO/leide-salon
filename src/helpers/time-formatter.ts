import { format } from 'date-fns'; 

const TimeFormatter = (time: Date)=>{
  const newTime = format(time, 'HH:mm:ss')
  
  return newTime;
  
}

export default TimeFormatter;