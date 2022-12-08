import { Entypo } from '@expo/vector-icons'; 

export interface IServicesView{
  titleSection: string;
  newDetailsCard: IServicesViewProps[];
  modalService: IServicesViewProps[];
  modalVisible: boolean;
  setTitleSection: React.Dispatch<React.SetStateAction<string>>;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  // setNewDetailsCard: React.Dispatch<React.SetStateAction<IServicesViewProps[]>>
  handleServiceList: (title: string) => void
  handleServiceDetailsCard: (title: string) => void
}

export interface IServicesViewProps{
  id: string;
  type: string;
  title: string;
  img: string;
  desc?: string;
  duration: string;
  price: number;
}

export const servicesList= [
  {
    id: '1',
    icon: '<Entypo name="scissors" size={24} color="black" />',
    title: 'Corte de Cabelo'
  },
  {
    id: '2',
    icon: '<Entypo name="scissors" size={24} color="black" />',
    title: 'Cauterização'
  },
  {
    id: '3',
    icon: '<Entypo name="scissors" size={24} color="black" />',
    title: 'Restauração'
  },
  {
    id: '4',
    icon: '<Entypo name="scissors" size={24} color="black" />',
    title: 'Hidratação'
  },
  {
    id: '5',
    icon: '<Entypo name="scissors" size={24} color="black" />',
    title: 'Tintura'
  },
  {
    id: '6',
    icon: '<Entypo name="scissors" size={24} color="black" />',
    title: 'Matização'
  },
  {
    id: '7',
    icon: '<Entypo name="scissors" size={24} color="black" />',
    title: 'Progressiva'
  },
  {
    id: '8',
    icon: '<Entypo name="scissors" size={24} color="black" />',
    title: 'Escova'
  },
]

export const serviceDetails =
 [
    
      {
        id: '1',
        type: 'Corte de Cabelo',
        title: 'Chandelier layers',
        img: 'https://media.glamour.com/photos/626996390aca11e120fa967a/1:1/w_1439,h_1439,c_limit/Curtain%20Bangs.png',
        desc:
     `Chandelier layers are dramatic, bouncy, curly bangs and general layers that typically come with a deep side part.
     You may also see them described as “curtain bangs,” although curtain bangs are more likely to be a middle part that frames your face equally.`,
        duration: '15-20',
        price: 50
      },
      {
        id: '2',
        type: 'Corte de Cabelo',
        title: 'Strong bob',
        img: 'https://i.pinimg.com/originals/23/95/e4/2395e4453280f082e107fce3a3ec52f2.jpg',
        desc: 
    `This particular cut is made at jaw-level on both sides of the face.
     Even though the cut itself is sometimes easier to see on straight hair due to its razor-sharp edge, it can be sported by curly haired people, too.
      Hair density is the key to rocking the strong bob.`,
        duration: '20-25',
        price: 50
      },
      {
        id: '3',
        type: 'Corte de Cabelo',
        title: 'Strong bob',
        img: 'https://i.pinimg.com/originals/23/95/e4/2395e4453280f082e107fce3a3ec52f2.jpg',
        desc: 
    `This particular cut is made at jaw-level on both sides of the face.
     Even though the cut itself is sometimes easier to see on straight hair due to its razor-sharp edge, it can be sported by curly haired people, too.
      Hair density is the key to rocking the strong bob.`,
        duration: '20-25',
        price: 50
      },
      {
        id: '4',
        type: 'Corte de Cabelo',
        title: 'Strong bob',
        img: 'https://i.pinimg.com/originals/23/95/e4/2395e4453280f082e107fce3a3ec52f2.jpg',
        desc: 
    `This particular cut is made at jaw-level on both sides of the face.
     Even though the cut itself is sometimes easier to see on straight hair due to its razor-sharp edge, it can be sported by curly haired people, too.
      Hair density is the key to rocking the strong bob.`,
        duration: '20-25',
        price: 50
      },
      {
        id: '5',
        type: 'Corte de Cabelo',
        title: 'Strong bob',
        img: 'https://i.pinimg.com/originals/23/95/e4/2395e4453280f082e107fce3a3ec52f2.jpg',
        desc: 
    `This particular cut is made at jaw-level on both sides of the face.
     Even though the cut itself is sometimes easier to see on straight hair due to its razor-sharp edge, it can be sported by curly haired people, too.
      Hair density is the key to rocking the strong bob.`,
        duration: '20-25',
        price: 50
      },
  
      {
        id: '1',
        type: 'Cauterização',
        title: 'Chandelier layers',
        img: 'https://media.glamour.com/photos/626996390aca11e120fa967a/1:1/w_1439,h_1439,c_limit/Curtain%20Bangs.png',
        duration: '15-20',
        price: 50
      },
 ]

export const serviceListName = [
  "Corte de Cabelo","Cauterização","Restauração","Hidratação","Tintura","Matização",
  "Progressiva","Escova"
]