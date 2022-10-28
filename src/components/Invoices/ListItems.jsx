import React from 'react'
import './styles/invoicesForm.css'

const ListItems = ({product, setText, text, setColor}) => {
    const textName = ()=>{
        setText(product.name)
        setColor(product.color.name)
    }
  return (
    <li onClick={textName} className='invoices__fom-items'>
        <p><b>producto:</b> {product.name} {product.color.name}</p>
    </li>
  )
}

export default ListItems