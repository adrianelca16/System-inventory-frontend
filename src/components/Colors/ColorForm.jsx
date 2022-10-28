import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import './styles/colorScreen.css'

const ColorForm = ({addColor}) => {
    const {handleSubmit, reset, register} = useForm()

    const submit = (data) => {
        const URL = 'http://localhost:8000/api/v1/color'
        axios.post(URL,data)
        .then(res => {
            addColor()
        })
        .catch(err => console.log(err.data))
        reset({
            name: ''
        })
    }
  return (
    <form onSubmit={handleSubmit(submit)} className='color__form' >
        <div className='color__form-container'>
        <label htmlFor="color-name" className='color__form-label'>Nombre: </label>
        <input type="text" id="color-name" className='color__form-input' {...register('name')}/>
        </div>
        <button className='color__form-btn'>agregar color</button>
    </form>
  )
}

export default ColorForm