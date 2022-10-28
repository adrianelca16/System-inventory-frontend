import React from 'react'
import CardInvoiceClosing from './CardInvoiceClosing';
import './styles/closingScreen.css'

const CardClosing = ({closing}) => {
  return (
    <div className='closing__card'>
        <h3 className='closing__card-title'>Cierre del dia: {closing.date}</h3>
        <p className='closing__card-text'>ventas: {closing.fullSalesPrice}</p>
        <p className='closing__card-text'>ganancias del dia: {closing.gain}</p>
        <div className='closing__card-container'>
            <p className='closing__card-text'>facturas del dia:</p>
            <ul className='closing__card-list'>
                {
                    closing?.sumInvoices.map(e => (
                        <CardInvoiceClosing key={e.id} invoice={e}/>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}

export default CardClosing