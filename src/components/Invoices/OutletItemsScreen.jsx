import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {getAllOutletItems} from '../../store/slices/outletItems.slice'
import OutletItemsCard from './OutletItemsCard'
import './styles/invoicesForm.css'

const OutletItemsScreen = ({changed, isForm, setIsForm}) => {
  const outletItems = useSelector(state => state.outletItems)

  const navigate = useNavigate()

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllOutletItems())
  }, [changed])

  let priceTotal = 0

  for(let i = 0; i<outletItems.length; i++){
    if(outletItems[i].invoice == null){
      priceTotal = outletItems[i].totalPrice + priceTotal
    } 
  }

  const submit = () =>{
    const URL = 'http://localhost:8000/api/v1/invoice'
    axios.post(URL)
    .then(res => {
      setIsForm(!isForm)
      navigate('/invoice')
    })
    .catch(err => console.log(err))
  }

  let filter = outletItems.filter(e => e.invoice == null)

  return (
    <>
    <ul className='invoices__form-list-outletItems'>
      {
        filter?.map(e => (
          <OutletItemsCard key={e.id} product={e} />
        ))
      }
      
    </ul>
    <p className='invoices__form-outletItems-text'>Precio total: {priceTotal}</p>
    <button className='invoices__form-form-btn' onClick={submit}>Generar factura</button>
    </>
  )
}

export default OutletItemsScreen