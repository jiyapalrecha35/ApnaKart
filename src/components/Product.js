import React from 'react'

export default function Product(props) {
    return (
        <div className='row'>
            <div className='col-5 my-4'>
                <h2>{props.product.name} <span className="badge bg-secondary mx-4">₹ {props.product.price}/-</span></h2>
            </div>

            <div className="col-3 my-4">
                <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                    <button type="button" className="btn btn-danger" onClick={()=>{props.decrement(props.index)}}>-</button>
                    <button type="button" className="btn btn-warning">{props.product.quantity}</button>
                    <button type="button" className="btn btn-success" onClick={()=>{props.increment(props.index)}}>+</button>
                </div>
            </div>

            <div className='col-2 my-4'>
                <button type="button" className="btn btn-secondary btn-lg">{props.product.quantity * props.product.price}/-</button>
                </div>

            <div className='col-2 my-4'>
                <button class="btn btn-primary" onClick={()=>{props.Remove(props.index)}}>Remove</button>
            </div>
        </div>
    )
}
