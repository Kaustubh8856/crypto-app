import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const cryptoApiHeaders = {
  "x-rapidapi-key": "0a9e266be4mshf953d9153b38753p1c3d40jsnf4b76e3ab64e",
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
};

const baseUrl = "https://coinranking1.p.rapidapi.com/stats";

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: createRequest("/coins"),
    }),
  }),
});

export const { useGetCryptosQuery } = cryptoApi;

// const options = {
//   method: "GET",
//   url: "https://coinranking1.p.rapidapi.com/stats",
//   params: {
//     referenceCurrencyUuid: "yhjMzLPhuIDl",
//   },
//   headers: {
//     "x-rapidapi-key": "0a9e266be4mshf953d9153b38753p1c3d40jsnf4b76e3ab64e",
//     "x-rapidapi-host": "coinranking1.p.rapidapi.com",
//   },
// };
