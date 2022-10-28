import React from 'react'
import './styles/cardInventory.css'

const CardInventory = ({product}) => {
  return (
    <div className='inventory__card'>
        <p><b>Nombre:</b> {product.name}</p>
        <p><b>Cantidad Disponible:</b>  {product.quantity}</p>
        <p><b>Precio por unidad:</b>  {product.salePrice}</p>
        <p><b>Color:</b>  {product.color.name}</p>
    </div>
  )
}

export default CardInventory