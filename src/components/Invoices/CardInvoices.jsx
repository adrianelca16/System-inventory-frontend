import React from 'react'
import OutletItemsInvoice from './OutletItemsInvoice';
import './styles/cardInvoices.css'

const CardInvoices = (product) => {
  return (
    <div className='invoices__card'>
      <p><b>Hora:</b> {product.product.hour}</p>
      <p><b>Fecha:</b> {product.product.date}</p>
      <p><b>Precio total:</b> {product.product.totalPrice}</p>
      <p><b>Productos:</b></p>
      <ul className='incvoices__card-list'>
        {
          product.product.outletItems?.map(e => (
            <OutletItemsInvoice key={e.id} items={e}/>
          ))
        }
      </ul>
    </div>
  )
}

export default CardInvoices