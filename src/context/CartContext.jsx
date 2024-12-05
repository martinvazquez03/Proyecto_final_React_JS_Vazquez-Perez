import { createContext, useState } from "react";

export const CartContext = createContext(false)

export function CartProvider({children}){

    const [cart, setCart]=useState([])

    const addItem = (item)=>{
        setCart([...cart, item])
    }

    const clear = (item) =>{
        setCart(cart.splice(item, 0,1))
    }

    const removeItem = (itemId) => {
        if (itemId) {
            setCart(prevCart => {
                const updatedCart = prevCart.filter(item => item.id !== itemId);
                return updatedCart;
        });
        }
    };

    return(
        <CartContext.Provider value={[cart,setCart,addItem, clear,removeItem]}>
            {children}
        </CartContext.Provider>
    )
}