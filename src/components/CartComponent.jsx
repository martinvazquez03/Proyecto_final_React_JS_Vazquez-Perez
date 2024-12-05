import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import CartCardComponent from './CartCardComponent'

export default function CartComponent() {

    const [cart, setCart,,clear] = useContext(CartContext)


    return (
        <>
            <div style={{display:'flex',flexDirection:'row', alignContent:'flex-start', justifyContent:'space-between',flexWrap:'wrap',width:'100%'}}>
                {cart.map((producto)=> (
                    <CartCardComponent style={{flex: '0 1 21%', margin: '10px'}} key={producto.id} product={producto}/>
                ))}
            </div>
            <h2 style={{marginTop:'auto'}}>Total: </h2>
            <button onClick={clear}>Vaciar carrito</button>
        </>
    )
}
