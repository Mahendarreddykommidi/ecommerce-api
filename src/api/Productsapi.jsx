import axios from 'axios';
import React from 'react'

const api = axios.create({
    baseURL: "https://fakestoreapi.com",
  });
  export const allproducts = () => {
    return api.get("/products");
  };