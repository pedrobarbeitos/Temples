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
        fill={true}
        objectFit='cover'/>
    </div>
  )
}

export default Card