
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllInventory } from '../../store/slices/inventory.slice'
import CardInventory from './CardInventory'
import InventoryForm from './InventoryForm'
import './styles/inventoryScreen.css'

const InventoryScreen = () => {
  const inventoryScreen = useSelector(state => state.inventory)
  const dispatch = useDispatch()

  const [isForm, setIsForm] = useState(false)
  const [getInventory, setGetInventory] = useState(false)

  const goToAddInventory = () => setIsForm(!isForm)

  useEffect(() => {
    dispatch(getAllInventory())
  }, [getInventory])
  return (
    <article className='inventory__container'>
      <button onClick={goToAddInventory} className='inventory__btn'>{isForm ? 'Volver' : 'Agregar un articulo'}</button>
      <div className='inventory__subcontainer'>
        {
          isForm ?
            <InventoryForm goToAddInventory={goToAddInventory} setGetInventory={setGetInventory} getInventory={getInventory} />
            :
            inventoryScreen.map(product => (
              <CardInventory key={product.id} product={product} />
            ))
        }
      </div>

    </article>
  )
}

export default InventoryScreen