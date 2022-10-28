import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import './styles/form.css'

const Form = () => {
    const { handleSubmit, register, reset } = useForm()


    const navigate = useNavigate()

    const submit = (data) => {
        const URL = 'http://localhost:8000/api/v1/auth/login'
        axios
            .post(URL, data)
            .then(res => {
                localStorage.setItem("token", res.data.token)
                navigate('/')
            })
            .catch(err => {
                localStorage.setItem("token", "")
            })
        reset({
            email: "",
            password: "",
        })
    }
    return (
        <form onSubmit={handleSubmit(submit)} className='login__form'>
            <h3 className='login__form-text'>Bienvenidos! ingresa tu correo electronico y tu contraseña para continuar</h3>
            <ul className='login__form-container'>
                <li className='login__form-input__container'>
                    <label htmlFor="login-email" className='login__form-input__text'>Correo: </label>
                    <input type="email" id='login-email' className='login__form__input' {...register("email")} />
                </li>
                <li className='login__form-input__container'>
                    <label htmlFor="login-password" className='login__form-input__text'>Contraseña: </label>
                    <input type="password" id='login-password' className='login__form__input' {...register("password")} />
                </li>
            </ul>
            <button className='login__form-btn'>Login</button>
        </form>
    )
}

export default Form