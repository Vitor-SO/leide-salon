import React, {createContext,useState} from 'react';
import { IServicesView, IServicesViewProps, serviceDetails } from '../Screens/Services/model';

export const ServicesViewContext = createContext({} as IServicesView)

function ServicesViewProvider({children}:any){
  const [titleSection, setTitleSection] = useState<string>('Cabelo');
  const [newDetailsCard, setNewDetailsCard] = useState<IServicesViewProps[]>(
    [
      {
        id: '1',
        type: 'Cabelo',
        title: 'Chandelier layers',
        img: 'https://media.glamour.com/photos/626996390aca11e120fa967a/1:1/w_1439,h_1439,c_limit/Curtain%20Bangs.png',
        desc:
     `Chandelier layers are dramatic, bouncy, curly bangs and general layers that typically come with a deep side part. You may also see them described as “curtain bangs,” although curtain bangs are more likely to be a middle part that frames your face equally.`,
        duration: '15-20',
        price: 50
      },
      {
        id: '2',
        type: 'Cabelo',
        title: 'Strong bob',
        img: 'https://i.pinimg.com/originals/23/95/e4/2395e4453280f082e107fce3a3ec52f2.jpg',
        desc: 
    `This particular cut is made at jaw-level on both sides of the face.
     Even though the cut itself is sometimes easier to see on straight hair due to its razor-sharp edge, it can be sported by curly haired people, too.
      Hair density is the key to rocking the strong bob.`,
        duration: '20-25',
        price: 50
      },
    ]
  )
  
  const [modalService,setModalService] = useState<IServicesViewProps[]>([])

  const [modalVisible, setModalVisible] = useState<boolean>(false)

  function handleServiceList(title: string){
    
    setTitleSection(title)
    const data =serviceDetails.filter(service => service.type === title)

    setNewDetailsCard(data)
  }


  function handleServiceDetailsCard(title: string){
    if(title && newDetailsCard.length === 0){
      const data = serviceDetails.filter(service => service.title === title)
      setModalService(data)
    }
    
    const data = newDetailsCard.filter(service => service.title === title)
    


    setModalService(data)
    
    if(!modalVisible){
      setModalVisible(true)
    }
  }

 

  return(
    <ServicesViewContext.Provider 
    value={{titleSection,setTitleSection,newDetailsCard,
     handleServiceList,handleServiceDetailsCard,modalService,
     modalVisible,setModalVisible}}>
      {children}
    </ServicesViewContext.Provider>
  )
}


export default ServicesViewProvider