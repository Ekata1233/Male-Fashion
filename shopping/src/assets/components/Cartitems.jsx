import React from 'react'
import { useCart } from '../../context/cart'
import { useAuth } from '../../context/auth'
import { useNavigate } from 'react-router-dom'
import { Container } from 'react-bootstrap'

function Cartitems() {
    const [cart,setCart]=useCart()
    const [auth,setAuth]=useAuth()
    const navigate=useNavigate()
  return (
    <div style={{paddingTop:"200px"}}>
        <Container>
            <h1 className='text-center p-3 mb-2'>{`Hello ${auth?.token && auth?.user?.name}`}</h1>
            <h4 className='text-center'>{cart?.length>1?`You have ${cart.length} items in your cart${auth?.token?"":"Please Login to Checkout"}`:"Your cart is empty"}</h4>
        </Container>
    </div>
  )
}

export default Cartitems