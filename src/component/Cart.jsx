import React from 'react'
import {useSelector} from "react-redux"
import { useDispatch } from 'react-redux'
import { delCart } from '../redux/action'
const Cart = () => {
    const state = useSelector((state)=> state.addCart)
    const dispatch = useDispatch();
    const cartItems = (cartItem) =>{
        return(
            <div className="px-4 my-5 bg-light rounded-3">
                <div className="container py-4">
                <button className="btn-close float-end" aria-label='Close'> </button>
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <img src={cartItem.image} alt={cartItem.title} />
                    </div>
                </div>
                </div>
            </div>
        );
    }
  return (
    <div>
    {state.length !== 0 && state.map(cartItems)}

    </div>
  )
}

export default Cart