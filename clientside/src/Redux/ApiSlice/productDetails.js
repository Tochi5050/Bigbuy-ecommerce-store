import { apislice } from "./createApi";

export const productDetailsSlice = apislice.injectEndpoints({
  endpoints: (builder) => ({
    getProductDetails: builder.query({
      query: (productDetailsId) => ({
        url: `/api/products/${productDetailsId}`,
      }),
    }),
    // providesTags: ['ProductDetails']
  }),
});

export const { useGetProductDetailsQuery } = productDetailsSlice;
