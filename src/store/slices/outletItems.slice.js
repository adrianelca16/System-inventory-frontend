import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const outletItemsSlice = createSlice({
    name: 'outletItems',
    initialState: [],
    reducers:{
        setOutletItemsGlobal: (state, action) => action.payload
    }
})

export const {setOutletItemsGlobal} = outletItemsSlice.actions

export const getAllOutletItems = () => (dispatch) => {
    const URL = 'http://localhost:8000/api/v1/outletItems'
    return axios.get(URL)
    .then(res => dispatch(setOutletItemsGlobal(res.data.outletItems.rows)))
    .catch(err => console.log(err.data))
}

export default outletItemsSlice.reducer