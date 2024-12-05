import { useEffect, useState } from "react";
import CardComponent from "./CardComponent";
import { useParams } from "react-router-dom";
import { filterProducts, getProducts } from "../firebase/firebase";



export default function ProductFilter() {

    const [myProds, setMyProds]=useState([])

    useEffect(()=>{
        getProducts().then((products)=>setMyProds(products))
    },[])


    const { catId } = useParams()
    const [categoria, setCategoria] = useState({})

    useEffect(()=>{
        setCategoria(filterProducts(catId))
        console.log(catId)
    },[catId])

    const filtro = myProds.filter((producto) => producto.category === catId)


    return (
        <>
            <div style={{height:'90vh'}}>
                <div style={{display:'flex', justifyContent:'space-evenly', flexWrap:'wrap'}}>
                {filtro.map((producto)=> (
                    <CardComponent key={producto.id} product={producto}/>
                ))}
                </div>
            </div>
        </>
    )
}