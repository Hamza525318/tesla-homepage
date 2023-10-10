import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cars: ["MODEL S","MODEL Y"," MODEL 3","MODEL X"]
}

const carSlice = createSlice({
    name:"car",
    initialState,
    reducers:{}
})

export const selectCars = state=> state.car.cars;

export default carSlice.reducer;

