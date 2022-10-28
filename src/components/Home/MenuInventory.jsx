import React from 'react'
import { Link } from 'react-router-dom'
import './styles/menuInventory.css'

const MenuInventory = () => {
    

  return (
    <div className='menu__container'>
            <Link to='/inventory' className='menu__btn'>Inventario
                </Link>
            <Link to='/color' className='menu__btn'>Color</Link>
            <Link to='/invoice' className='menu__btn'>Factura</Link>
            <Link to='/closing' className='menu__btn'>Cierre</Link>
    </div>
  )
}

export default MenuInventory