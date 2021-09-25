import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

var options = {
  method: "GET",
  url: "https://bing-news-search1.p.rapidapi.com",
  params: { safeSearch: "Off", textFormat: "Raw" },
  headers: {
    "x-bingapis-sdk": "true",
    "x-rapidapi-host": process.env.X_RAPIDNEWSAPI_HOST,
    "x-rapidapi-key": process.env.X_RAPIDAPI_KEY,
  },
};

const createRequest = (url) => ({ url, headers: options.headers });

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl: options.url }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
