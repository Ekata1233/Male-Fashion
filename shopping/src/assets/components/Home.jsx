import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Prices } from './Prices';
import { useCart } from '../../context/cart';
import { useAuth } from '../../context/auth'; // Assuming you have an auth context
import Hero from '../components/Hero';
import Collections from './Collections';
import NewArrivals from './NewArrivals';
import DealWeek from './DealWeek';
import BlogDetails from './BlogDetails';
import Instagram from './Instagram';
import LatestNews from './LatestNews';



function Home() {
  const { cart, addToCart } = useCart(); // Use cart context
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [auth] = useAuth(); // Retrieve auth state (user info)

  // Fetch categories and products
  function getAllCategory() {
    fetch('http://localhost:4300/api/category/getcategory')
      .then((res1) => res1.json())
      .then((res2) => {
        console.log(res2);
        setCategories(res2.category);
      })
      .catch((error) => console.log(error));
  }

  function getProducts() {
    fetch('http://localhost:4300/api/product/getproducts')
      .then((resp1) => resp1.json())
      .then((resp2) => {
        console.log(resp2);
        setProducts(resp2.product);
      })
      .catch((error) => console.log(error));
  }

  // Apply filters
  function handleFilter(value, id) {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  }

  function filterProduct() {
    const data = { checked, radio };
    fetch('http://localhost:4300/api/product/filter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res1) => res1.json())
      .then((res2) => {
        console.log(res2);
        setProducts(res2.products);
      })
      .catch((error) => console.log(error));
  }

  // Re-fetch data if auth state changes (i.e., if user logs in)
  useEffect(() => {
    if (auth.user) {
      // Fetch products when user logs in
      getProducts();
    }
  }, [auth]); 

  // Initial fetches for categories and products
  useEffect(() => {
    getAllCategory();
    getProducts();
  }, []);

  // Apply filters if selected
  useEffect(() => {
    if (checked.length || radio.length) {
      filterProduct();
    } else {
      getProducts(); // Reset products if no filters are applied
    }
  }, [checked, radio]);

  return (
    <div style={{ paddingTop: '' }}>
      <Hero />
      <Collections />
      <NewArrivals />
      <DealWeek/>
     <Instagram/>
     <p className='fw-bold gold' style={{paddingTop:"180px"}}>LATEST NEWS</p>
     <h1 className='fw-bold pb-5'>Fashoin New Trend</h1>
     <LatestNews/>
      {/* Display Products */}
      {/* <Row className="mt-4">
        <Col md={2}>
          <h5 className="mb-3">Filter By Category</h5>
          {categories.map((c) => (
            <Form.Check
              type="checkbox"
              key={c._id}
              label={c.name}
              onChange={(e) => handleFilter(e.target.checked, c._id)}
            />
          ))}
          <h5 className="mb-3 mt-3">Filter By Prices</h5>
          {Prices.map((p) => (
            <Form.Check
              type="radio"
              key={p._id}
              label={p.name}
              value={p.array}
              onChange={() => setRadio(p.array)}
              name="price" // ensure only one radio button can be selected at a time
            />
          ))}
          <Button
            variant="info"
            className="mt-3"
            onClick={() => {
              setChecked([]);
              setRadio([]);
              getProducts(); // reset the products to the original list
            }}
          >
            RESET FILTERS
          </Button>
        </Col>
        <Col md={9}>
          <h3 className="text-center">All Products</h3>
          <Container>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {products?.map((item, index) => (
                <div className="col" key={index}>
                  <Card style={{ width: '18rem' }}>
                    <Card.Img
                      variant="top"
                      className="w-100 mx-auto d-block"
                      src={`http://localhost:4300/api/product/getphoto/${item._id}`}
                    />
                    <Card.Body className="text-center">
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Text>
                        {item.description}
                        <h4>₹ {item.price}</h4>
                      </Card.Text>
                      <Button
                        variant="success"
                        onClick={() => addToCart(item)} // Use addToCart from context
                      >
                        Add To Cart
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </Container>
        </Col>
      </Row> */}

    </div>
  );
}

export default Home;
