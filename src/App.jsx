import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import ClosingScreen from './components/Closing/ClosingScreen'
import ColorScreen from './components/Colors/ColorScreen'
import HomeScren from './components/Home/HomeScren'
import InventoryScreen from './components/Inventory/InventoryScreen'
import InvoicesScreen from './components/Invoices/InvoicesScreen'
import LoginScreen from './components/Login/LoginScreen'
import ProtectedRoutes from './components/ProtectedRoutes'
import FooterScreen from './components/shared/FooterScreen'
import HeaderScreen from './components/shared/HeaderScreen'
import {getAllInventory} from './store/slices/inventory.slice'

function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllInventory())
  }, [])
  
  return (
    <div className="App">
      <HeaderScreen/>
      <Routes>
        <Route path='/' element={<HomeScren />} />
        <Route path='/login' element={<LoginScreen />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/inventory' element={<InventoryScreen />} />
          <Route path='/invoice' element={<InvoicesScreen />} />
          <Route path='/color' element={<ColorScreen />} />
          <Route path='/closing' element={<ClosingScreen />} />
        </Route>

      </Routes>
      <FooterScreen />
    </div>
  )
}

export default App
