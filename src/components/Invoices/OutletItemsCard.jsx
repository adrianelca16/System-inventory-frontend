import './styles/invoicesForm.css'
import React from 'react'

const OutletItemsCard = ({product}) => {
  return (
    <li className='invoices__form-outletItems-items'>
        <p><b className='invoices__form-outletItems-text'>Producto:</b> {product.inventory.name}  </p>
        <p><b className='invoices__form-outletItems-text'>Color:</b>  {product.inventory.color.name}</p>
        <p><b className='invoices__form-outletItems-text'>Cantidad:</b> {product.quantity}</p>
        <p><b className='invoices__form-outletItems-text'>Precio:</b> {product.totalPrice}</p>
    </li>
  )
}

export default OutletItemsCard