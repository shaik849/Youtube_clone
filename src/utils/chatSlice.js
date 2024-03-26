import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_COUNT } from "./constants";

const chartSlice = createSlice({
    name : "chart",
    initialState :{
        messages : []
    },
    reducers :{
        addMessages : (state, action) =>{
            state.messages.splice(OFFSET_LIVE_COUNT, 1)
            state.messages.unshift(action.payload)
        }
    }
})

export const {addMessages} = chartSlice.actions
export default chartSlice.reducer;