import React, { Component } from 'react'
import { ProductConsumer } from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';


export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
            {(value) => {
                console.log("value", value)
                const {id, img, info, price, title, inCart, date1, date2} = value.detailProduct
                return (
                    <div className="container py-5">
                        {/* title */}
                        <div className="row">
                            <div className="col-10 mx-auto text-center text-slanted text-green my-5">
                                <h1>{title}</h1>
                            </div>
                        </div>
                        {/* end of title  */}
                        {/* product image */}
                        <div className="row">
                            <div className="col-10 mx-auto col-md-6 my-3">
                                <img 
                                    src={img} 
                                    className="image-fluid details-image" 
                                    alt="product"
                                ></img>
                            </div>
                        {/* product text  */}
                            <div className="col-10 mx-auto col-md-6 my-3 ">
                                <h2>Adventure : {title}</h2>
                                <h4 className="text-green">
                                    <strong> 
                                        price: <span>$</span> {price}
                                    </strong>
                                </h4>
                                <p className="text-capitalize font-weight-bold mt-3 mb-0">Dates</p>
                                <p className="text-muted lead">{date1}</p>
                                <p className="text-muted lead">{date2}</p>
                                <p className="font-weight-bold mt-3 mb-0">Description</p>
                                <p className="text-muted lead">{info}</p>
                                {/* buttons */}
                                <div>
                                    <Link to="/products">
                                        <ButtonContainer>
                                            back to upcoming adventures
                                        </ButtonContainer>
                                    </Link>
                                    <ButtonContainer 
                                    cart 
                                    disabled={inCart ? true : false} 
                                    onClick={()=> {
                                        value.addToCart(id);
                                        value.openModal(id); 
                                    }}
                                    >
                                        {inCart ? 'in cart' : 'add to cart'}
                                    </ButtonContainer>   
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }}
            </ProductConsumer>
        )
    }
}
