import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({baseUrl: "https://dummyjson.com/"}),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => "products"
        }),
        getProduct: builder.query({
            query: (product) => `product/search?q=${product}`
        })
    })
}) 


export const { useGetAllProductsQuery, useGetProductQuery } = productsApi;