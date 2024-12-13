import React, { useEffect } from 'react';
import { useCart } from '../../context/cart';
import { useAuth } from '../../context/auth';
import { useNavigate } from 'react-router-dom';
import { Button, Col, Container, Row } from 'react-bootstrap';

function Cartitems() {
    const [cart, setCart] = useCart();
    const [auth, setAuth] = useAuth();
    const navigate = useNavigate();

    const totlePrice = () => {
        return cart?.reduce((total, item) => total + item.price, 0);
    };

    const refreshCart = () => {
        // Fetch cart data from API or local storage when user logs in
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(savedCart);
    };

    useEffect(() => {
        if (auth.token) {
            refreshCart(); // Refresh the cart when the user logs in
        }
    }, [auth.token]);

    function removecartitem(cid) {
        let myCart = [...cart];
        let index = myCart.findIndex(item => item._id === cid);
        myCart.splice(index, 1);
        setCart(myCart);
        localStorage.setItem('cart', JSON.stringify(myCart));
    }

    return (
        <div style={{ paddingTop: "200px" }}>
            <Container>
                <h1 className='text-center p-3 mb-2'>{`Hello ${auth?.token && auth?.user?.name}`}</h1>
                <h4 className='text-center'>
                    {cart?.length > 0
                        ? `You have ${cart.length} items in your cart${auth.token ? "" : " Please Login to Checkout"}`
                        : "Your cart is empty"}
                </h4>
                {auth.token && (
                    <Row className='mb-4'>
                        <Col md={9}>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Products</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart?.map((c) => (
                                        <tr key={c._id}>
                                            <td>
                                                <img
                                                    className='img-auto d-block'
                                                    src={`http://localhost:4300/api/product/getphoto/${c._id}`}
                                                    alt=""
                                                    height={100}
                                                    width={100}
                                                />
                                            </td>
                                            <td>{c.name}</td>
                                            <td>{c.price}</td>
                                            <td>
                                                <Button variant='danger' onClick={() => removecartitem(c._id)}>
                                                    Remove
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </Col>

                        <Col md={3}>
                            <h2>Cart Summary</h2>
                            <p>Total | Checkout | Payment</p>
                            <hr />
                            <h4>Total: ₹ {totlePrice()}</h4>
                            <Button variant='success' className='mt-4' onClick={() => navigate('/Dashboard/user/Orders')}>
                                Proceed to Checkout
                            </Button>
                        </Col>
                    </Row>
                )}
            </Container>
        </div>
    );
}

export default Cartitems;
