import React,{useContext} from "react";
import { ProductContext } from "../context/products";
//import {ProductConsumer} from '../context/products'
import Loading from '../components/Loading'
import ProductList from '../components/Products/ProductList'


export default function Products() {
  const {loading,products} = React.useContext(ProductContext)
  

if(loading){
 return <Loading></Loading>
}else{
 return <ProductList title="Our Products" products={products}></ProductList>
}
}
