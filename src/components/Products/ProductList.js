import React from "react";
import Product from './Product'

export default function ProductList({title,products}) {
  return (
<section>
  <h2 className="section-title">{title}</h2>
  <div className="products-center">
    {products.map(item => {
      return <Product key={item.id} {...item}></Product>
    })}

  </div>
</section>
  )
}
