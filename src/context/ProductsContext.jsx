import { createContext, useEffect, useState } from "react";


export const ProductsContext = createContext(false)


export function ProductsProvider({children}) {

    const [products, setProducts]= useState([])

    // useEffect(()=>{
    //     getProducts.then((data)=>setProducts(data))
    // },[])

    return (
        <ProductsContext.Provider value={children}>
            {children}
        </ProductsContext.Provider>
    )
}
