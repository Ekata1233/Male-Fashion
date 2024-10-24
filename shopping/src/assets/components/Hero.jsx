import React from 'react'
import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { FaArrowRightLong } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
function Hero() {
  return (
    <div className=''>
        <Carousel fade interval={3000} className='custom-carousel' indicators={false}>
  <Carousel.Item>
    <img src='/hero-1.jpg' className='w-100 cara-img' alt="First slide" />

    <div className="caraText w-25">
            <p className="text-danger fw-bold">SUMMER COLLECTION</p>
            <h1 className="text-dark fw-bold mt-4">Fall - Winter </h1>
            <h1 className="text-dark fw-bold">Collections 2024</h1>
            <p className="text-dark fw-bold mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt aliqua.
            </p>
            <Button variant="dark" className="heroButton mt-4  px-4 py-3">
              SHOP NOW <FaArrowRightLong className="heroArrow ms-1"/>
            </Button>
            <div className="mt-3"><FaFacebookF className="mx-2"/><FaPinterestP className="mx-2" /><FaInstagram className="mx-2" /><FaTwitter className="mx-2" /></div>
          </div>
  </Carousel.Item>

  <Carousel.Item>
    <img src='/hero-2.jpg' className='w-100 cara-img' alt="Second slide" />

    <div className="caraText w-25">
            <p className="text-danger fw-bold">SUMMER COLLECTION</p>
            <h1 className="text-dark fw-bold mt-4">Fall - Winter </h1>
            <h1 className="text-dark fw-bold">Collections 2024</h1>
            <p className="text-dark fw-bold mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt aliqua.
            </p>
            <Button variant="dark" className="heroButton mt-4  px-4 py-3">
              SHOP NOW <FaArrowRightLong className="heroArrow ms-1"/>
            </Button>
            <div className="mt-3"><FaFacebookF className="mx-2"/><FaPinterestP className="mx-2" /><FaInstagram className="mx-2" /><FaTwitter className="mx-2" /></div>
          </div>
  </Carousel.Item>
</Carousel>

    </div>
  )
}

export default Hero