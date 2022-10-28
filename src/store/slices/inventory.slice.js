import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const inventorySlice = createSlice({
    name: 'inventory',
    initialState: [],
    reducers:{
        setInventoryGlobal: (state, action) => action.payload
    }
})

export const {setInventoryGlobal} = inventorySlice.actions

export const getAllInventory = () => (dispatch) => {
    const URL = 'http://localhost:8000/api/v1/inventory'
    return axios.get(URL)
    .then(res => dispatch(setInventoryGlobal(res.data.inventory)))
    .catch(err => console.log(err.data))
}

export default inventorySlice.reducer