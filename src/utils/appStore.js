import { configureStore } from "@reduxjs/toolkit";
import appSlice from './app.Slice'

const appStore = configureStore({
    reducer : {
        app :appSlice
    }
})

export default appStore;