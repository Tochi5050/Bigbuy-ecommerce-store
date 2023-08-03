import { apislice } from "./createApi";

export const userSlice = apislice.injectEndpoints({
    endpoints: (builder) => ({
      logoutUser: builder.mutation({
         query: () => ({
            url: '/api/users/logoutUsers',
            method: 'POST',
         })
      })
    })
})

export const {useLogoutUserMutation} = userSlice