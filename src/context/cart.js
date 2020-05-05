import React from 'react'

import localCart from '../utils/localCart'

function getCartFromLocalStorage(){
    return localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):[]
}

const CartContext = React.createContext();

function CartProvider({children}){
    const [cart,setCart] = React.useState(getCartFromLocalStorage())
    const [total, setTotal] = React.useState(0)
    const [cartItems, setCartItems] = React.useState(0) 

React.useEffect(()=>{
//local storage
localStorage.setItem('cart',JSON.stringify(cart))


//cart items
let newCartItems = cart.reduce((total,cartItem)=>{
     
return total += cartItem.amount 
},0)
setCartItems(newCartItems)

    //cart total
    let newTotal = cart.reduce((total, cartItem) => {
        return (total += cartItem.price * cartItem.amount)
    }, 0)
    newTotal = parseFloat(newTotal.toFixed(2))
    setTotal(newTotal)
},[cart])


//remove item
const removeItem = id => {
    let newCart = [...cart].filter(item => item.id != id)
    setCart(newCart)
    //setCart([...cart].filter(item => item.id != id))
}
//increse amount 
    const increaseAmount = id => {
        const newCart = [...cart].map(item => {
            return item.id === id?{...item,amount:item.amount+1}
                                 :{...item}
        })
        console.log("seitem")
        setCart(newCart)
     }
    //decrease item
    const decreaseAmount = (id,amount) => {
      if(amount===1){
          removeItem(id)
          return
      }else{
          const newCart = [...cart].map(item => {
              return item.id === id ? { ...item, amount: item.amount - 1 }
                  : { ...item }
          })
          console.log("seitem")
          setCart(newCart)
          
      }
        }
     
    //add to cart 
    const addToCart = product => {



        const {id,image:{url},title,price} = product;
        const item = [...cart].find(item => item.id === id)

        if(item){
            increaseAmount(id)

        }else{
            const newItem = {id,image:url,title,price,amount:1}
            const newCart = [...cart,newItem]
            setCart(newCart)
        }
     }
    //clear  cart
    const clearCart   = () => { }


    return <CartContext.Provider value={{ cart, total, cartItems, removeItem, increaseAmount, decreaseAmount,addToCart}}>
        {children}
    </CartContext.Provider>
}

export {CartContext,CartProvider}