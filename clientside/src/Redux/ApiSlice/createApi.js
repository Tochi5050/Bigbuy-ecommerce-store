import { BASE_URL } from "../../constants";
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const apislice = createApi({
    baseQuery: fetchBaseQuery({baseUrl: ''}),
    endpoints: (builder) => ({}),
    tagTypes: ['Products', 'User', 'Orders']
})