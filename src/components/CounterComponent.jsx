import React, { useState } from 'react'

export default function CounterComponent({ stock ,handler}) {

    const [contador, setContador]=useState(0)

    const handleClickInc = () => {
        if (contador < stock){
            setContador(contador + 1)
        }
    }

    const handleClickDec = () => {
        if (contador > 0){
            setContador(contador - 1)
        }
    }
    return (
        <>
            <p style={{fontSize:20}}>cantidad: </p>
            <div style={{display:"flex", justifyContent:'space-between', alignItems:'center'}}>
                <button style={{width:15, padding:"10px 20px", display:"flex", justifyContent:"center", alignItems:"center"}} onClick={handleClickDec}>-</button>
                <h3>{contador}</h3>
                <button style={{width:15, padding:"10px 20px", display:"flex", justifyContent:"center", alignItems:"center"}} onClick={handleClickInc}>+</button>
            </div>
            <button style={{marginTop:10}} onClick={handler}>Agregar al carrito</button>
        </>
    )
}
