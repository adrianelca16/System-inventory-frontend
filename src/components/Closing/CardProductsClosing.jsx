import React from 'react'
import './styles/closingScreen.css'

const CardProductsClosing = ({product}) => {
  return (
    <div className='closing__inventory-card'>
        <p className='closing__inventory-card-text'><b>Producto:</b> {product.inventory.name}</p>
        <p className='closing__inventory-card-text'><b>Cantidad:</b> {product.quantity}</p>
        <p className='closing__inventory-card-text'><b>Color:</b> {product.inventory.color.name}</p>
        <p className='closing__inventory-card-text'><b>Precio total por productos:</b> {product.totalPrice}</p>
    </div>
  )
}

export default CardProductsClosing