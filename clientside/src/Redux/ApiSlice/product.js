import { apislice } from "./createApi"

export const productslice = apislice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
           query: () => ({
              url: '/api/products'
           })
        }),
        providesTags: ['Products']
      })
})

export const {useGetProductsQuery} = productslice 