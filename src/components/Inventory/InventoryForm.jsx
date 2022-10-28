import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import './styles/inventoryForm.css'

const InventoryForm = ({ goToAddInventory, setGetInventory, getInventory }) => {

    const { handleSubmit, register, reset } = useForm()

    const changedInventory = () => setGetInventory(!getInventory)
    

    const submit = (data) => {
        const URL = 'http://localhost:8000/api/v1/inventory'

        data.quantity = parseInt(data.quantity)
        data.sale_price = parseFloat(data.sale_price)
        data.purchase_price = parseFloat(data.purchase_price)

        axios.post(URL, data)
            .then(res => {
                goToAddInventory()
                changedInventory()
            })
            .catch(err => {
                console.log(err);
            })
        reset({
            name: "",
            quantity: "",
            purchase_price: "",
            sale_price: "",
            color: "",
        })
    }
    return (
        <form onSubmit={handleSubmit(submit)} className='inventory__form'>
            <h3 className='inventory__form-title'>Agrega un articulo</h3>
            <ul className='inventory__form-list'>
                <li className='inventory__form-items'>
                    <label htmlFor="login-name" className='inventory__form-text'>Nombre: </label>
                    <input type="text" id='login-name' className='inventory__form-input' {...register("name")} />
                </li>
                <li className='inventory__form-items'>
                    <label htmlFor="login-quantity" className='inventory__form-text'>Cantidad: </label>
                    <input type="number" id='login-quantity' className='inventory__form-input' {...register("quantity")} />
                </li>
                <li className='inventory__form-items'>
                    <label htmlFor="login-purchase-price" className='inventory__form-text'>Precio de compra: </label>
                    <input type="number" id='login-purchase-price' step='0.01' min='0' className='inventory__form-input' {...register("purchase_price")} />
                </li>
                <li className='inventory__form-items'>
                    <label htmlFor="login-sale-price" className='inventory__form-text'>Precio de Venta: </label>
                    <input type="number" id='login-sale-price' step='0.01' min='0' className='inventory__form-input' {...register("sale_price")} />
                </li>
                <li className='inventory__form-items'>
                    <label htmlFor="login-color" className='inventory__form-text'>Color: </label>
                    <input type="text" id='login-color' className='inventory__form-input' {...register("color")} />
                </li>
            </ul>
            <button className='inventory__form-btn'>agregar</button>
        </form>
    )
}

export default InventoryForm