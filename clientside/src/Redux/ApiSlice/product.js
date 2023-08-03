import { apislice } from "./createApi"

export const productslice = apislice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
           query: ({keyword}) => ({
              url: '/api/products',
              params: { keyword}
           })
        }),
        providesTags: ['Products']
      })
})

export const {useGetProductsQuery} = productslice