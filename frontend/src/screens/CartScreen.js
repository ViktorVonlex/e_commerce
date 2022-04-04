import React, {useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import {addToCart} from "../actions/cartActions";
import {useDispatch} from "react-redux";

export default function CartScreen() {

    const params = useParams();
    const { id: productId } = params;

    const { search } = useLocation();
    const qtyInUrl = new URLSearchParams(search).get('qty');
    const qty = qtyInUrl ? Number(qtyInUrl) : 1;

    const dispatch = useDispatch();

    useEffect(() => {
        if(productId){
            dispatch(addToCart(productId, qty))
        }
    }, [dispatch, productId, qty])

    return (
        <div>
            <h1>Cart Screen</h1>
            <p>ADD TO CART : productId: {productId} Qty: {qty}</p>
        </div>
    )
}
