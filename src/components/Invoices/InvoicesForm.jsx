import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import ListItems from './ListItems'
import OutletItemsScreen from './OutletItemsScreen'
import './styles/invoicesForm.css'

const InvoicesForm = ({isForm, setIsForm}) => {
  const [text, setText] = useState("")
  const { handleSubmit, register, reset } = useForm()
  const [color, setColor] = useState()
  const [outletItems, setOutletItems] = useState(false)


  const inventory = useSelector(state => state.inventory)

  let filter = inventory?.filter(e => e.name.includes(text))

  if (text === '') {
    filter = null
  } else if (filter.length == false) {
    filter = false
  }

  const submit = (data) => {
    data.name = text
    data.color = color
    console.log(data)

    const URL = 'http://localhost:8000/api/v1/outletItems'
    axios.post(URL, data)
      .then(res => {
        setOutletItems(!outletItems)
      })
      .catch(err => console.log(err))

    reset({
      quantity: ''
    })
    setColor('')
    setText('')

  }



  return (
    <div className='invoices__form-container'>
      <div className='invoices__form'>
        <label htmlFor="invoices-product" className='invoices__form-subtitle'>Buscar producto: </label>
        <input className='invoices__form-input' type="text" value={text} onChange={e => setText(e.target.value)} id='invoices-product' />
        <ul className='invoices__form-list'>
          {
            filter ?
              filter?.map(product => (
                <ListItems key={product.id} product={product} setText={setText} text={text} setColor={setColor} />
              ))
              :
              <p>no hay productos</p>
          }
        </ul>
      </div>
      <form onSubmit={handleSubmit(submit)} className='invoices__form-form'>
        <div className='invoices__form-form-container'>
        <label htmlFor="invoices-product" className='invoices__form-form-text'>Producto: </label>
        <input type="text" id='invoices-product' defaultValue={text} className='invoices__form-form-input'/>
        </div>
        <div className='invoices__form-form-container'>
        <label htmlFor="invoices-quantity" className='invoices__form-form-text'>Cantidad: </label>
        <input type="number" min='0' id='invoices-quantity' {...register('quantity')} className='invoices__form-form-input'/>
        </div>
        <div className='invoices__form-form-container'>
          <label htmlFor="invoices-color" className='invoices__form-form-text'>Color: </label>
        <input type="text" id='invoices-color' defaultValue={color} className='invoices__form-form-input'/>
        </div>
        <button className='invoices__form-form-btn'>agregar</button>
      </form>

      <OutletItemsScreen changed={outletItems} isForm={isForm} setIsForm={setIsForm}/>
    </div>
  )
}

export default InvoicesForm