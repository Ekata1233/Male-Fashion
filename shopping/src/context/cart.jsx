import { useState,createContext,useContext } from "react";

const CartContext=createContext();
const CartProvider=({children})=>{
    const [cart,setCart]=useState([])
   
    return (
        <CartContext.Provider value={[cart,setCart]}>
            {children}
        </CartContext.Provider>
    )
}
// create custom hook
const useCart=()=>useContext(CartContext)
export {useCart,CartProvider}