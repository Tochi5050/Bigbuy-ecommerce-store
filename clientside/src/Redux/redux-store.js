import {configureStore} from '@reduxjs/toolkit'
import { apislice } from './ApiSlice/createApi'
import authReducer from './ApiSlice/createSlice'
import cartReducer from './ApiSlice/cartSlice'

const store = configureStore({
    reducer: {
        [apislice.reducerPath]: apislice.reducer,
        auth: authReducer,
        cart: cartReducer
   },

   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apislice.middleware),

   devTools: true

})

export default store 