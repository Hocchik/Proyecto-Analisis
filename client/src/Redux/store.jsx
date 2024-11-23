import { configureStore } from "@reduxjs/toolkit";
import reservaReducer from "./Compra/ReservaSlice";

export default configureStore({
    reducer: {
        compra: reservaReducer
    }
})