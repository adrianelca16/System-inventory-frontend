import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const invoiceSlice = createSlice({
    name: 'invoice',
    initialState: [],
    reducers: {
        setInvoiceGlobal: (state,action) => action.payload
    }
})

export const {setInvoiceGlobal} = invoiceSlice.actions

export const getAllInvoice = () => (dispatch)=>{
    const URL = 'http://localhost:8000/api/v1/invoice'
    return axios.get(URL)
        .then(res=> dispatch(setInvoiceGlobal(res.data.invoice)))
        .catch(err => console.log(err))
}

export default invoiceSlice.reducer