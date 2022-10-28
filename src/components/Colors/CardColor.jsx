import React from 'react'
import './styles/colorScreen.css'

const CardColor = ({color}) => {
  return (
    <p className='color__name'>color: {color.name}</p>
  )
}

export default CardColor