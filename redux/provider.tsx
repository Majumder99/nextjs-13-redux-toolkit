"use client";

import { Provider } from "react-redux";
import { store } from "./store";
import React from "react";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { productsApi } from "./features/apiSlice";

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ApiProvider api={productsApi}>{children}</ApiProvider>
    </Provider>
  );
}
