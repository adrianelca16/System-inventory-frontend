import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getAllColor} from '../../store/slices/color.slice'
import CardColor from './CardColor'
import ColorForm from './ColorForm'
import './styles/colorScreen.css'

const ColorScreen = () => {

  const color = useSelector(state => state.color)
  const dispatch = useDispatch()

  const [isForm, setIsForm] = useState(false)

  useEffect(() => {
    dispatch(getAllColor())
  }, [isForm])
  
  const addColor = () => {
    setIsForm(!isForm)
  }
  return (
    <article className='color-container'>
      <button onClick={addColor} className='color__btn'>{isForm? 'volver': 'Agregar color'}</button>
      <div className='color-subcontainer'>
      {
        isForm?
        <ColorForm addColor={addColor}/>
        :
        color?.map(e => (
          <CardColor key={e.id} color={e}/>
        ))
      }
      </div>
      
    </article>
  )
}

export default ColorScreen