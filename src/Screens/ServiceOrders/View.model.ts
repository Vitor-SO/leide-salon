import { IServiceOrdersProps } from './model';
import { ServicesViewContext } from './../../Contexts/ServicesView';
import { useContext,useState} from "react";
import { Platform } from 'react-native';
import { DateTimePickerEvent } from '@react-native-community/datetimepicker';
// import { parseISO } from 'date-fns'; 
// import { utcToZonedTime, zonedTimeToUtc } from 'date-fns-tz';

const useServicesOrdersViewModel = () =>{

  const {modalService} = useContext(ServicesViewContext);

  const dataServiceOrders: IServiceOrdersProps ={
    title: modalService[0]?.title,
    img: modalService[0]?.img,
    duration: modalService[0]?.duration,
    price: modalService[0]?.price,
    id: '',
    type: modalService[0]?.type
  }

  const [date, setDate] = useState(new Date(Date.now()));
  const [time, setTime] = useState(new Date(Date.now()));
  const [mode, setMode] = useState<string>();
  const [show, setShow] = useState(false);
  

  
  const onChangeDate = (event: DateTimePickerEvent, selectedDate: any) => {
    const currentDate = selectedDate
    setShow(false);
    setDate(currentDate);
  };

  const onChangeTime = (event: any, selectedTime: any) => {
    
    setShow(false);
    setTime(selectedTime)
  };

  const showMode = (mode: string) => {
    if (Platform.OS === 'android') {
      setShow(true);
    }
    if (Platform.OS === 'ios') {
      setShow(true);
    }

    setMode(mode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  
  // const setTimeUTC = (time: Date): string => {
  //   const currentTime = time.toISOString().split('T')[0] + ' ' + time.toLocaleTimeString()
  //   const parsedDate = parseISO(currentTime);
    
  //   const znDate = zonedTimeToUtc(time, '-3GMT');
  //   console.log(znDate);
    

  //   // console.log(znDate.toLocaleTimeString("pt-BR"));
    
  //   // return znDate.toLocaleTimeString("pt-BR")
    
  // };


  return{
    dataServiceOrders,
    onChangeDate,
    onChangeTime,
    showDatepicker,
    showTimepicker,
    date,
    show,
    time,
    mode,
    // setTimeUTC

  }
}

export default useServicesOrdersViewModel