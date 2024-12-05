import { Link } from "react-router-dom";

export default function CardComponent({product}) {
    
    return (
        <>
            <article style={{display:'flex', flexDirection:'column',maxWidth:350, minHeight:'300px', justifyContent:'space-between', alignItems:'center', boxShadow:'0px 33px 61px -29px rgba(0,0,0,.6)', background:'#fff',  margin:7}}>
                <div style={{width:'100%', fontSize:20, fontWeight:600, display:'flex', padding:10, background:'#fff'}}>
                    {product.title}
                </div>
                <div style={{display:'flex', objectFit:'cover'}}>
                    <img style={{maxWidth:284}} src={product.image} alt={product.title} />
                </div>
                <div style={{width:'100%', fontSize:17, display:'flex', padding:10, background:'#fff', justifyContent:'space-between', fontWeight:400}}>
                    ${product.price}
                    <button className="btn btn-secondary" type="button"><Link style={{textDecoration:"none", color:"#fff"}} to={`/${product.id}`} >Ver detalle</Link></button>
                </div>
            </article>
        </>
    )
}
