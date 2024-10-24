import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

export default function CartWidget() {
    return (
        <li className="nav-item" style={{display:'flex', marginLeft:300, alignItems:'center', justifyContent:'center'}}>
                <a className="nav-link" style={{textDecoration:'none'}} href="#">
                    <h4 style={{display:'flex', justifyContent:'center', alignItems:'center'}}><FontAwesomeIcon style={{display:'flex', gap:7, fontSize:22}} icon={faCartShopping}/> 5</h4>
                </a>
        </li>
    )
}
