import Card from "./components/card/Card"
import './page.scss'

const data = [
  {
      id: 1,
      imgA:'/01_A.png',
      imgB:'/01_B.png'
  },
  {
      id: 2,
      imgA:'/02_A.png',
      imgB:'/02_B.png'
  },
  {
      id: 3,
      imgA:'/03_A.png',
      imgB:'/03_B.png'
  },
  {
      id: 4,
      imgA:'/04_A.png',
      imgB:'/04_B.png'
  },
  {
      id: 5,
      imgA:'/05_A.png',
      imgB:'/05_B.png'
  },
  {
      id: 6,
      imgA:'/06_A.png',
      imgB:'/06_B.png'
  },
  {
      id: 7,
      imgA:'/07_A.png',
      imgB:'/07_B.png'
  },
  {
      id: 8,
      imgA:'/08_A.png',
      imgB:'/08_B.png'
  },
  {
      id: 9,
      imgA:'/09_A.png',
      imgB:'/09_B.png'
  }
]

export default function Home() {
  return (
  <div className="mainContainer">
    <h1>Temples is a collection of ancient religious buildings constructed by the Hellenic people from the 6th century BC until the 2nd century AD.</h1>
    <div className="container">
      {data.map(item => (
        <Card item={item} key={item.id}/>
      ))}
    </div>
   </div>
  )
}
