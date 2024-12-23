import React from 'react'
import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { FaArrowRightLong } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
function Hero() {
  const navigate=useNavigate()
  return (
    <div className=''>
        <Carousel fade interval={1000} className='custom-carousel' indicators={false}>
  <Carousel.Item >
    <div className='hero-bg'>
    <img src='/bg_1.png' className=' cara-img ' alt="First slide" />

<div className="caraText w-25">
        <h5 className="text-white fw-bold">SUMMER COLLECTION</h5>
        <h1 className="text-dark fw-bold mt-4">Fall - Winter </h1>
        <h1 className="text-dark fw-bold">Collections 2024</h1>
        <p className="text-dark fw-bold mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt aliqua.
        </p>
        <Button variant="dark" className="heroButton mt-4  px-4 py-3" onClick={()=>navigate("/Shop")}>
          SHOP NOW <FaArrowRightLong className="heroArrow ms-1"/>
        </Button>
        <div className="mt-3"><FaFacebookF className="mx-2"/><FaPinterestP className="mx-2" /><FaInstagram className="mx-2" /><FaTwitter className="mx-2" /></div>
      </div>
    </div>
  </Carousel.Item>

  <Carousel.Item>
    <div className='hero-bg'>
    <img src='/model_6.png' className=' cara-img1 ' alt="Second slide" />

<div className="caraText w-25 ">
        <h5 className="text-white fw-bold">SUMMER COLLECTION</h5>
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
    </div>
  </Carousel.Item>
</Carousel>

    </div>
  )
}

export default Hero