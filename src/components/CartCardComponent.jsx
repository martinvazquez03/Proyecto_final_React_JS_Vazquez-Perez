import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export default function CartCardComponent({product}) {
    const [cart,setCart,,,removeItem]=useContext(CartContext)


    return (
        <>
            <article style={{display:'flex', flexDirection:'row',minWidth:680,maxWidth:680, minHeight:'150px', justifyContent:'space-between', alignItems:'center', boxShadow:'0px 33px 61px -29px rgba(0,0,0,.6)', background:'#fff',  margin:7}}>
                <div style={{width:'100%', fontSize:20, fontWeight:600, display:'flex', padding:10, background:'#fff'}}>
                    {product.title} {product.id}
                </div>
                <div style={{display:'flex', objectFit:'cover'}}>
                    <img style={{maxWidth:150}} src={product.image} alt={product.title} />
                </div>
                <div style={{width:'100%', fontSize:17, display:'flex', padding:10, background:'#fff', justifyContent:'space-between', fontWeight:400}}>
                    ${product.price}
                    <p>cantidad: 1</p>
                    <button className="btn btn-secondary" type="button" style={{padding:'3px 12px'}} onClick={()=>removeItem(product.id)} >-</button>
                </div>
            </article>
        </>
    )
}
