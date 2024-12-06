import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

export default function CartWidget() {
    const [cart,setCart] = useContext(CartContext)

    const totalQuantity = cart.reduce((total, item) => total + item.cantidad, 0);

    return (
        <li className="nav-item" style={{display:'flex', marginLeft:300, alignItems:'center', justifyContent:'center'}}>
            <Link style={{textDecoration:'none'}} to={`/cart`}>
                <a className="nav-link"  href="#">
                    <h4 style={{display:'flex', justifyContent:'center', alignItems:'center'}}><FontAwesomeIcon style={{display:'flex', gap:7, fontSize:22}} icon={faCartShopping}/> {totalQuantity}</h4>
                </a>
            </Link>
        </li>
    )
}
