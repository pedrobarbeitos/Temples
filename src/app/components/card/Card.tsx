import Image from 'next/image'
import React from 'react'
import './Card.scss'



type Props = {item: any}

function Card({item}: Props) {
  return (
    <div className="cardContainer">
      <Image 
        className='cardImage'
        src={item.imgA} 
        alt='' 
        width={333} 
        height={500}></Image>
    </div>
  )
}

export default Card