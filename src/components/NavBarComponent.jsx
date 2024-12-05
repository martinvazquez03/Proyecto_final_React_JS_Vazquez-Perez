import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import { useEffect, useState } from "react";
import { getProducts } from "../firebase/firebase";


export default function NavBarComponent() {

    const [myProds, setMyProds]=useState([])

    useEffect(()=>{
        getProducts().then((products)=>setMyProds(products))
    },[])

    const categoriasUnicas = [...new Set(myProds.map(producto => producto.category))];
    

    return (
    <>
        {myProds && (
        <nav style={{padding:20, display:"flex"}} className='navbar fixed-top navbar-expand-sm navbar-dark bg-dark'>
            <div className="container-fluid" style={{display:'flex', justifyContent:'space-between'}}>
                <a style={{fontSize:22, fontWeight:500}} className="navbar-brand" href="/">1G-Store</a>
                <div className='lista' style={{display:'flex', justifyContent:'space-evenly'}}>
                    <ul style={{gap:110, fontSize:17, display:'flex', alignItems:'center'}} className="navbar-nav">
                    {categoriasUnicas.map((category, index) => (
                            <li className="nav-item" key={index}>
                                
                                <Link style={{background:'#555', fontSize:18 , textDecoration: 'none', color: '#eee', padding:'10px', border:'1px solid #222', borderRadius:'7px' }} to={`/productos/${category}`}>
                                    {category}
                                </Link>
                                
                            </li>
                    ))}
                        <CartWidget/>
                    </ul>
                </div>
                
            </div>
        </nav>
        )}
    </>
    )
}

