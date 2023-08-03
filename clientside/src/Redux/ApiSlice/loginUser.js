import { apislice } from "./createApi";

export const userSlice = apislice.injectEndpoints({
    endpoints: (builder) => ({
      loginUser: builder.mutation({
         query: (data) => ({
            url: '/api/users/authUsers',
            method: 'POST',
            body: data
         })
      })
    })
})

export const {useLoginUserMutation} = userSlice