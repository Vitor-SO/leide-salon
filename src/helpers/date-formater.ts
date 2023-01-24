import { format } from 'date-fns'; 

const DateFormatter = (date: Date)=>{
  const newDate = format(date, 'dd/MM/yyyy')
  
  return newDate;
  
}

export default DateFormatter;