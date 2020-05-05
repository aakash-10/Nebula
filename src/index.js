import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ProductProvider from '../src/context/products'
import {CartProvider} from '../src/context/cart'

ReactDOM.render(
<ProductProvider>
        <CartProvider>
        <App />
                </CartProvider>
</ProductProvider>
, document.getElementById("root"));
