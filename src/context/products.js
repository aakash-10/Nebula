import React from 'react'
import Axios from 'axios';
import url from '../utils/URL'
import {featuredProducts} from '../utils/helpers'

export const ProductContext = React.createContext();

//provider, consumer, useContext()




export default function ProductProvider({children}) {
    const [loading,setLoading] = React.useState(false);
    const [products, setProducts] = React.useState([]);
    const [featured, setFeatured] = React.useState([]);

React.useEffect(()=>{
    setLoading(true)
    console.log(url)
    Axios.get(`${url}/products`).then(response =>{
        const featured = featuredProducts(response.data)
        setProducts(response.data)
        setFeatured(featured)
        setLoading(false)

    }
      )
    return ()=>{

    }
},[])
   
    return (
   <ProductContext.Provider value={{products,loading,featured}}>
{children}
   </ProductContext.Provider>
    )
}
