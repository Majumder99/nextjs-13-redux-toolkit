import React from "react";
import {
  useGetAllProductsQuery,
  useGetProductQuery,
} from "@/redux/features/apiSlice";
const Data = () => {
  const { data: allProducts } = useGetAllProductsQuery({
    pollingInterval: 100,
  });
  const { data: singleProduct } = useGetProductQuery("iphone");
  console.log("data", allProducts, singleProduct);
  return <div>Data</div>;
};

export default Data;
