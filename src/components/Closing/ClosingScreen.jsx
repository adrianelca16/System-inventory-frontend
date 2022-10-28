import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getAllClosing} from '../../store/slices/closing.slice'
import CardClosing from './CardClosing'
import './styles/closingScreen.css'

const ClosingScreen = () => {
  const closing = useSelector(state => state.closing)

  const [changedClosing, setChangedClosing] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllClosing())
  }, [changedClosing])

  const submit = () =>{
    const URL = 'http://localhost:8000/api/v1/sumInvoices'

    axios.post(URL)
    .then(res => {
      const URLClosing = 'http://localhost:8000/api/v1/closing'
      axios.post(URLClosing)
      .then(response => {
        setChangedClosing(!changedClosing)
      })
      .catch(erro => console.log(erro))
    })
    .catch(err => console.log(err))
  }
  return (
    <article className='closing__container'>
      <button onClick={submit} className='closing__btn'>Generar cierre</button>
      <div className='closing__subcontainer'>
      {
        closing?.map(e => (
          <CardClosing key={e.id} closing={e}/>
        ))
      }
      </div>
      
      
    </article>
  )
}

export default ClosingScreen