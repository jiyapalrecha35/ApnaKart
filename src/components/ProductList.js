import React from 'react'
import Product from './Product.js'

export default function ProductList(props) {
  return (
    props.productList.length > 0 ?
      props.productList.map((product, i) => {
        return <Product
          product={product}
          key={i}
          increment={props.increment}
          index={i}
          decrement={props.decrement}
          Remove={props.Remove}
        />
      })
      : <h1>No products in the Cart .. !!</h1>
  )
}
