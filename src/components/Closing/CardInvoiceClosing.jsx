import React from 'react'
import CardProductsClosing from './CardProductsClosing'
import './styles/closingScreen.css'

const CardInvoiceClosing = ({invoice}) => {
  return (
    <div className='closing__card-invoices'>
        <h4 className='closing__card-invoice-title'>Factura</h4>
        <p className='closing__card-invoice-text'><b>dia:</b> {invoice.invoice.date} <b>hora:</b> {invoice.invoice.hour}</p>
        <p className='closing__card-invoice-text'><b>Precio Total:</b> {invoice.invoice.totalPrice}</p>
        <p className='closing__card-invoice-text'><b>Productos:</b></p>
        {
            invoice.invoice.outletItems?.map(e=> (
                <CardProductsClosing key={e.id} product={e}/>
            ))
        }
    </div>
  )
}

export default CardInvoiceClosing