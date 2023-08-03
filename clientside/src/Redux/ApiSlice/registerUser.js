import { apislice } from "./createApi";

export const userSlice = apislice.injectEndpoints({
    endpoints: (builder) => ({
      registerUser: builder.mutation({
         query: (data) => ({
            url: '/api/users/registerUsers',
            method: 'POST',
            body: data
         })
      })
    })
})

export const {useRegisterUserMutation} = userSlice