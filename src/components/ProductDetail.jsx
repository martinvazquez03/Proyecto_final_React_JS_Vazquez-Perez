import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import CounterComponent from "./CounterComponent"
import { CartContext } from "../context/CartContext"
import { getSingleProduct } from "../firebase/firebase"

export default function ProductDetail() {


    const [singleProd,setSingleProd] = useState()

    useEffect(()=>{
        getSingleProduct(prodId).then((product)=>setSingleProd(product))
    },[])


    const { prodId } = useParams()

    const [cart, setCart, addItem] = useContext(CartContext)

    const handleClick = () => {
        if (counterValue !== 0){
            addItem({...singleProd, cantidad: counterValue}, counterValue)
        }
    }

    const [counterValue, setCounterValue] = useState(0);

  // Función para actualizar el estado del contador en el componente padre
    const handleCounterChange = (newValue) => {
        setCounterValue(newValue);
    };


    return (
        <>
        <div style={{display:'flex', width:'100%', alignItems:'center', justifyContent:'center'}}>
        {singleProd && (
            <article style={{display:'flex',width:700, flexDirection:'column', minHeight:'300px',height:550 , justifyContent:'space-between', alignItems:'center', boxShadow:'0px 33px 61px -29px rgba(0,0,0,.6)', background:'#fff',  margin:7}}>
                <div style={{width:'100%', fontSize:20, fontWeight:600, display:'flex', padding:10, background:'#fff'}}>
                    {singleProd.title}
                </div>
                <div style={{display:'flex', objectFit:'cover', flex:1, justifyContent:"flex-start"}}>
                    <img style={{maxWidth:500}} src={singleProd.image} alt="aks" />
                </div>
                <div style={{width:'100%', fontSize:17, display:'flex',flex:1,flexDirection:"column", padding:10, background:'#fff', justifyContent:'space-between', fontWeight:400}}>
                    <p>Detalles: {singleProd.description}</p>
                    <p>Precio: ${singleProd.price}</p>
                    <p>Stock: {singleProd.stock}</p>
            
                    <CounterComponent className="btn btn-secondary" type="button" onCounterChange={handleCounterChange} handler={handleClick} stock={singleProd.stock} />
                </div>
            </article>
            )}
            </div>
            </>
    )
}
