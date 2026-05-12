import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductContext from './ProductContext';

function ProductContextProvider  ({children}) {

    const[products,setProducts]=useState()

    useEffect(
        ()=>{
        loadData();
        },[]
    )

    async function loadData() {
        try {
            const apiproducts = await axios.get("https://fakestoreapi.com/products")
            //const apiproducts = await axios.get("http://localhost:8087/products/getAllProducts")
            console.log(apiproducts) //single object {header,status,ok, data}
            setProducts(apiproducts.data)
        }
        catch (error) {
            console.log(error)
        }
    }

  return (
   <ProductContext.Provider value={{products}}>
    {children}
   </ProductContext.Provider>
  )
}

export default ProductContextProvider