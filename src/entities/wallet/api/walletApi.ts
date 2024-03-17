import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../../../app/config/network';

enum TAGS {
  BALANCE = 'BALANCE',
}

export const walletApi = createApi({
  reducerPath: 'walletApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: [TAGS.BALANCE],
  endpoints: (builder) => ({
    getBalance: builder.query({
      query: ({ userId }) => `wallet/${userId}`,
      providesTags: [TAGS.BALANCE],
    }),
    updateBalance: builder.mutation({
      query: (body) => ({
        url: '/wallet',
        body,
      }),
      invalidatesTags: [TAGS.BALANCE],
    }),
  }),
});

// export const { useGetUserQuery } = walletApi;
