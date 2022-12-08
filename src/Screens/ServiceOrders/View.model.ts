import { IServiceOrdersProps } from './model';
import { ServicesViewContext } from './../../Contexts/ServicesView';
import { SetStateAction, useContext,useState} from "react";
import { Platform } from 'react-native';
import DateTimePicker,{AndroidNativeProps, IOSNativeProps} from '@react-native-community/datetimepicker';


interface IProps extends AndroidNativeProps{
  mode: "date" | "time";
  value: Date
}
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
  
  function HourUTC(time: Date){
    
    const hoursUTC = time.toUTCString().split(' ')[4]

  const hour = parseInt(hoursUTC.split(':')[0])
  
  const min = hoursUTC.split(':')[1]
  const sec = hoursUTC.split(':')[2]

  const newHour = hour - 3
    let date =`${newHour.toString()}:${min}:${sec}`
    console.log(date);
    
    // setTime(date)
  }

  
  const onChangeDate = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
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



  return{
    dataServiceOrders,
    onChangeDate,
    onChangeTime,
    showDatepicker,
    showTimepicker,
    date,
    show,
    time,
    mode

  }
}

export default useServicesOrdersViewModel