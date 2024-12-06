import { createContext, useState } from "react";

export const CartContext = createContext(false)

export function CartProvider({children}){

    const [cart, setCart]=useState([])

    const addItem = (item, counterValue)=>{
        setCart(prevCart => {
            const existingItemIndex = prevCart.findIndex(cartItem => cartItem.id === item.id);
    
            if (existingItemIndex !== -1) {
                const updatedCart = [...prevCart];
                updatedCart[existingItemIndex].cantidad = counterValue;
                return updatedCart;
            } else {
                return [...prevCart, {...item, cantidad : counterValue}];
            }
        });
    }

    const clear = (item) =>{
        setCart(cart.splice(item, 0,1))
    }

    const removeItem = (itemId) => {
        if (itemId) {
            setCart(prevCart => {
                const updatedCart = prevCart.map(item => {
                    if (item.id === itemId) {
                        if (item.cantidad > 1) {
                            return { ...item, cantidad: item.cantidad - 1 };
                        } 
                        return null;
                    }
                    return item;
                }).filter(item => item !== null);
    
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