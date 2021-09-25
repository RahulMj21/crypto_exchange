import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const options = {
  method: "GET",
  url: "https://coinranking1.p.rapidapi.com/",
  headers: {
    "x-rapidapi-host": process.env.X_RAPIDAPI_HOST,
    "x-rapidapi-key": process.env.X_RAPIDAPI_KEY,
  },
};

const createRequest = (url) => ({ url, headers: options.headers });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl: options.url }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`coins?limit=${count}`),
    }),
    getCrypto: builder.query({
      query: (coinId) => createRequest(`coin/${coinId}`),
    }),
  }),
});

export const { useGetCryptosQuery, useGetCryptoQuery } = cryptoApi;
