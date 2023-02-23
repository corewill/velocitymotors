import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3030"}),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => "products",
    })
}) 
}) 

export const {useGetProductsQuery} = productsApi;