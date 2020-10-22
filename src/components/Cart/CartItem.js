import React from 'react'
import { Form } from 'react-bootstrap';

export default function CartItem({item, value}) {
    const{id, title, price, total, count, date1, date2} = item;
    const {increment, decrement, removeItem} = value; 
    return (
        <div className="row my-2 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">product: </span>
                {title}
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">date: </span>
                    <Form.Check label={date1} type="radio"></Form.Check>
                    <Form.Check label={date2} type="radio"></Form.Check>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">price: </span>
                ${price}.00
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        <span className="btn btn-black mx-1" onClick={() => decrement(id)}>-</span>
                        <span className="btn btn-black mx-1" onClick={() => decrement(id)}>{count}</span>
                        <span className="btn btn-black mx-1" onClick={() => increment(id)}>+</span>
                    </div>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <div className="cart-icon" onClick={() => removeItem(id)}>
                    <i className="fas fa-trash"></i>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <strong>item total: ${total}.00</strong>
            </div>
            {/* end of button */}
        </div>
    )
}
