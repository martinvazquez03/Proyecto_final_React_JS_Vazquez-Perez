import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProduct } from "../AsyncMock"

export default function ProductDetail() {

    const { prodId } = useParams()
    const [product, setProduct] = useState({})

    useEffect(()=>{
        setProduct(getProduct(prodId))
    },[prodId])

    return (
        <>
        <div style={{display:'flex', width:'100%', alignItems:'center', justifyContent:'center'}}>
            <article style={{display:'flex',width:700, flexDirection:'column', minHeight:'300px',height:550 , justifyContent:'space-between', alignItems:'center', boxShadow:'0px 33px 61px -29px rgba(0,0,0,.6)', background:'#fff',  margin:7}}>
                <div style={{width:'100%', fontSize:20, fontWeight:600, display:'flex', padding:10, background:'#fff'}}>
                    {product.titulo}
                </div>
                <div style={{display:'flex', objectFit:'cover', flex:1, justifyContent:"flex-start"}}>
                    <img style={{maxWidth:500}} src={product.imagen} alt="aks" />
                </div>
                <div style={{width:'100%', fontSize:17, display:'flex',flex:1,flexDirection:"column", padding:10, background:'#fff', justifyContent:'space-between', fontWeight:400}}>
                    <p>Detalles:{product.detalles}</p>
                    <p>Precio: ${product.precio}</p>
                    <p>Stock: {product.stock}</p>
                    <button className="btn btn-secondary" type="button">Agregar al carrito</button>
                </div>
            </article>
        </div>
            </>
    )
}
