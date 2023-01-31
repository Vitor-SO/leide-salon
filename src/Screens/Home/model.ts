import { ISpecificService, IClientOrder } from './../ServiceOrders/model';
export const HeadingServicesHomeList = [
  {
    id: '1',
    imgURL: 'https://images.pexels.com/photos/3268732/pexels-photo-3268732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Serviço Específico'
  },
  {
    id: '2',
    imgURL: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGFpciUyMGN1dHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    title: 'Corte de Cabelo'
  },
  {
    id: '3',
    imgURL: 'https://images.pexels.com/photos/11595336/pexels-photo-11595336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Cauterização'
  },
  {
    id: '4',
    imgURL: 'https://images.pexels.com/photos/3993311/pexels-photo-3993311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Restauração'
  },
  {
    id: '5',
    imgURL: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
    title: 'Hidratação'
  },
  {
    id: '6',
    imgURL: 'https://img.freepik.com/fotos-premium/uma-mulher-tinge-o-cabelo-de-vermelho-colorindo-as-raizes-do-cabelo-com-henna-ou-tintura_89718-1156.jpg?w=2000',
    title: 'Tintura'
  },
  {
    id: '7',
    imgURL: 'https://images.unsplash.com/photo-1605980766335-d3a41c7332a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    title: 'Matização',
  },
  {
    id: '8',
    imgURL: 'https://images.unsplash.com/photo-1519421692594-d7a3f3e3fe5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    title: 'Progressiva'
  },
  {
    id: '9',
    imgURL: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
    title: 'Escova'
  }
]

export interface IUserServiceOrderList{
  id: string;
  type: string;
  title: string;
  imgURL: string;
  desc: string;
  price: number;
  duration: string;
}

export interface IUserServicesContext extends ISpecificService, IClientOrder{};

export const UserServiceOrderList =[
  {
    id: '1',
    type: 'Corte de Cabelo',
    title: 'Woman Blunt Cut',
    imgURL: 'https://info.philippelusi.com/wp-content/uploads/2019/01/Blow-Dry-Desktop.jpg',
    desc: `This particular cut is made at jaw-level on both sides of the face.
    Even though the cut itself is sometimes easier to see on straight hair due to its razor-sharp edge, it can be sported by curly haired people, too.
     Hair density is the key to rocking the strong bob.`,
    price: 50,
    duration: "15-20"
  },
  {
    id: '2',
    type: 'Corte de Cabelo',
    title: 'Woman Brush',
    imgURL: 'https://mupcity.com.au/wp-content/uploads/2019/08/hands-blow-drying-hair-1024x683.jpg',
    desc: `This particular cut is made at jaw-level on both sides of the face.
    Even though the cut itself is sometimes easier to see on straight hair due to its razor-sharp edge, it can be sported by curly haired people, too.
     Hair density is the key to rocking the strong bob.`,
    price: 50,
    duration: "15-20"
  },
  {
    id: '3',
    type: 'Corte de Cabelo',
    title: 'Woman Cauterization',
    imgURL: 'https://beautvip.com/wp-content/uploads/2021/05/Relaxamento-para-cabelos-cacheados-pros-e-contras.jpg',
    desc: `This particular cut is made at jaw-level on both sides of the face.
    Even though the cut itself is sometimes easier to see on straight hair due to its razor-sharp edge, it can be sported by curly haired people, too.
     Hair density is the key to rocking the strong bob.`,
    price: 50,
    duration: "15-20"
  },
  {
    id: '4',
    type: 'Corte de Cabelo',
    title: 'Woman Cauterization',
    imgURL: 'https://beautvip.com/wp-content/uploads/2021/05/Relaxamento-para-cabelos-cacheados-pros-e-contras.jpg',
    desc: `This particular cut is made at jaw-level on both sides of the face.
    Even though the cut itself is sometimes easier to see on straight hair due to its razor-sharp edge, it can be sported by curly haired people, too.
     Hair density is the key to rocking the strong bob.`,
    price: 50,
    duration: "15-20"
  }
  
]