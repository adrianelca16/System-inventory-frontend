import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getAllInvoice} from '../../store/slices/invoice.slice'
import CardInvoices from './CardInvoices'
import InvoicesForm from './InvoicesForm'
import './styles/invoicesScreen.css'

const InvoicesScreen = () => {
  const invoice = useSelector(state => state.invoice)
  const dispatch = useDispatch()

  const [isForm, setIsForm] = useState(false)

  const goToAddInvoice = () => setIsForm(!isForm)

  useEffect(() => {
    dispatch(getAllInvoice())
  }, [isForm])
  return (
    <article className='invoices__container'>
      <button onClick={goToAddInvoice} className= 'invoices__btn'>{isForm?'volver':'Generar nueva factura'}</button>
      <div className='invoices__subcontainer'>
      {
        isForm?
        <InvoicesForm goToAddInvoice={goToAddInvoice} isForm={isForm} setIsForm={setIsForm}/>
        :
        invoice.map(product => (
          <CardInvoices key={product.id} product={product}/>
        ))
      }
      </div> 
    </article>
  )
}

export default InvoicesScreen