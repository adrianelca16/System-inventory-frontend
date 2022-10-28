import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const closingSlice = createSlice({
    name: 'closing',
    initialState: [],
    reducers: {
        setClosingGlobal: (state, action) => action.payload
    }
})

export const {setClosingGlobal} = closingSlice.actions

export const getAllClosing = () => (dispatch)=> {
    const URL = 'http://localhost:8000/api/v1/closing'
    return axios.get(URL)
    .then(res => dispatch(setClosingGlobal(res.data.closing)))
    .catch(err => console.log(err))
}

export default closingSlice.reducer