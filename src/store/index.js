import { configureStore } from '@reduxjs/toolkit'
import inventory from './slices/inventory.slice'
import invoice from './slices/invoice.slice'
import outletItems from './slices/outletItems.slice'
import color from './slices/color.slice'
import closing from './slices/closing.slice'

export default configureStore({
  reducer: {
    inventory,
    invoice,
    outletItems,
    color,
    closing
	}
})