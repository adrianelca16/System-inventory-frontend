import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const colorSlice = createSlice({
    name: 'color',
    initialState: [],
    reducers:{
        setColorGlobal: (state, action) => action.payload
    }
})

export const {setColorGlobal} = colorSlice.actions

export const getAllColor = () => (dispacth)=>{
    const URL = 'http://localhost:8000/api/v1/color'
    return axios.get(URL)
    .then(res => dispacth(setColorGlobal(res.data.colors)))
    .catch(err => console.log(err.data))
}

export default colorSlice.reducer