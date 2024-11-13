import { useEffect, useState } from "react";
import CardComponent from "./CardComponent";
import { getProducts } from "../AsyncMock";
import { useParams } from "react-router-dom";

export default function ProductListComponent({greeting}) {

    const [productos, setProductos] = useState([])

    useEffect(()=> {
        getProducts.then((data) => setProductos(data))
    },[])

    return (
        <>
            <div style={{height:'90vh'}}>
                <h1 style={{marginBottom:65}}>{greeting}</h1>

                <div style={{display:'flex', justifyContent:'space-evenly', flexWrap:'wrap'}}>
                    {productos.map((producto)=> (
                        <CardComponent key={producto.id} product={producto}/>
                    ))}
                </div>
            </div>
        </>
    )
}
