import {configureStore} from '@reduxjs/toolkit'
import { apislice } from './ApiSlice/createApi'
import authReducer from './ApiSlice/createSlice'

const store = configureStore({
    reducer: {
        [apislice.reducerPath]: apislice.reducer,
        auth: authReducer
   },

   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apislice.middleware),

   devTools: true

})

export default store 