import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
function Signup() {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [phone,setPhone]=useState("")
  const [address,setAddress]=useState("")
  const [answer,setAnswer]=useState("")
  const navigate=useNavigate("")

  function userSignup(e){
    e.preventDefault()
    let user={name,email,password,phone,address,answer}
    fetch("http://localhost:4300/api/auth/register",{
      method:"post",
      headers:{
        "content-type":"application/json",
      },
      body:JSON.stringify(user)
    }).then((resp1)=>{
      resp1.json().then((resp2)=>{
        console.log(resp2)
        alert("SignUp Successfully")
        navigate('/Signin')
      })
    })
  }

  return (
    <div className=' pt-3 '  style={{paddingTop:"250px"}}>
      <h1 className='mt-5 mb-3'>SignUp</h1>
    <Container className=''>
         <Form className='text-start w-50 m-auto  p-3 mb-5 shadow p-3 mb-5 bg-white rounded' onSubmit={userSignup}>
      
      <Form.Group  controlId="formGridName">
          <Form.Label className='mb-2'>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" className='mb-3' value={name} onChange={(e)=>setName(e.target.value)}/>
        </Form.Group>

        <Form.Group  controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" className='mb-3' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </Form.Group>

        <Form.Group  controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" className='mb-3' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </Form.Group>
        <Form.Group  controlId="formGridPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" placeholder="Enter Phone" className='mb-3' value={phone} onChange={(e)=>setPhone(e.target.value)}/>
        </Form.Group>
        
      <Form.Group className="mb-3" controlId="formGridAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="Enter Address" className='mb-5' value={address} onChange={(e)=>setAddress(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress">
        <Form.Label>Answer</Form.Label>
        <Form.Control placeholder="Enter Sport" className='mb-5' value={answer} onChange={(e)=>setAnswer(e.target.value)}/>
      </Form.Group>
      


      

      

      

      <Button variant="dark" type="submit" className='m-auto d-block mb-5 px-5 py-2 rounded-pill'>
        Submit
      </Button>
    </Form>
    </Container>
    </div>
  )
}

export default Signup