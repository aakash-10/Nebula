import React from "react";
import {useParams} from 'react-router-dom'
import {ProductContext} from '../context/products'
import {CartContext} from '../context/cart'
 import Loading from '../components/Loading'

import {useHistory} from 'react-router-dom'

export default function ProductDetails() 
{

  console.log(useParams())
  const {id} = useParams()
  const history = useHistory()
  const {products} = React.useContext(ProductContext)
  const {addToCart} = React.useContext(CartContext)
  const product = products.find(item => 
    item.id === parseInt(id)
  )
  if(products.length === 0){
    return <Loading></Loading>
  }
  else{
    const {image:{url},title,price,description} = product
    return (
      <section className="single-product">
        <img src={url} alt = {title} className="single-product-image"></img>
        <article> 
          <h1>{title}</h1>
          <h2> ${price}</h2>
          <p>{description}</p>
          <button className="btn btn-primary btn-block" onClick={()=>{
            //add to cart
            addToCart(product)
            history.push('/cart')
          }}>Add to Cart</button>
        </article>
      </section>
    )
  }

}
