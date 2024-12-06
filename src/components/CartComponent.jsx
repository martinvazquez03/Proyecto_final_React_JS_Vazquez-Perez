import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import CartCardComponent from './CartCardComponent'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
import { v4 as uuidv4 } from 'uuid';



export default function CartComponent() {

    const [cart, setCart,,clear] = useContext(CartContext)

    const totalPrice = cart.reduce((total, item) => {
        return total + (item.price * item.cantidad);
    }, 0);

    const checkOut = () => {
        const MySwal = withReactContent(Swal)
        if (cart.length !== 0){
            const steps = ['1', '2', '3']
            const Queue = MySwal.mixin({
            progressSteps: steps,
            confirmButtonText: 'Next >',
            // optional classes to avoid backdrop blinking between steps
            showClass: { backdrop: 'swal2-noanimation' },
            hideClass: { backdrop: 'swal2-noanimation' },
            inputValidator: (value) => {
                if (!value) {
                    return "No puedes dejar este campo vacio!";
                }
            },
            
            })
            ;(async () => {
            await Queue.fire({
                title: 'Nombre Completo',
                input:'text',
                currentProgressStep: 0,
            })
            await Queue.fire({
                title: 'Email',
                input:"email",
                currentProgressStep: 1,
                inputValidator: (value) => {
                    if (!value) {
                        return "No puedes dejar este campo vacío!";
                    }
                    if (!value.includes('@' && '.com')) {
                        return "Debe ingresar una direccion de email valida.";
                    }
                },
            })
            await Queue.fire({
                title: 'Listo!',
                text:`Su id de orden es ${uuidv4()}`,
                currentProgressStep: 2,
                confirmButtonText: 'OK',
            }).then(clear)
            })()    
        }
    };

    return (
        <>
            <div style={{display:'flex',flexDirection:'row', alignContent:'flex-start', justifyContent:'space-between',flexWrap:'wrap',width:'100%'}}>
                {cart.map((producto)=> (
                    <CartCardComponent style={{flex: '0 1 21%', margin: '10px'}} key={producto.id} product={producto}/>
                ))}
            </div>
            <h2 style={{marginTop:'auto'}}>Total: ${totalPrice} </h2>
            <button onClick={clear}>Vaciar carrito</button>
            <button onClick={checkOut}>Finalizar Compra</button>
        </>
    )
}
