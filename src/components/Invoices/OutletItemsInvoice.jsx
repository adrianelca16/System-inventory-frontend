import React from 'react'
import './styles/cardInvoices.css'

const OutletItemsInvoice = ({items}) => {
  return (
    <li className='invoices__card-items'>
        <p>producto: {items.inventory.name}</p>
        <p>color: {items.inventory.color.name}</p>
        <p>Cantidad {items.quantity}</p>
        <p>precio total: {items.totalPrice}</p>
    </li>
  )
}

export default OutletItemsInvoice