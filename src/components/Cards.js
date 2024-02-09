import React from 'react'
import img1 from "../assets/images/img1.avif"

const Cards = ({card}) => {
    console.log(card);
  return (
    <div>
        <h3>{card.title}</h3>
        <p>{card.info}</p>
    </div>
  )
}

export default Cards