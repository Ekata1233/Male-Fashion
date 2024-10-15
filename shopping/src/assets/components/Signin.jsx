import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth';

function Signin() {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const navigate=useNavigate("")
  const [auth,setAuth]=useAuth()

  function userSignin(e){
    e.preventDefault()
    let user={email,password}
    fetch("http://localhost:4300/api/auth/login",{
      method:"post",
      headers:{
        "content-type":"application/json",
      },
      body:JSON.stringify(user)
    }).then((resp1)=>{
      resp1.json().then((resp2)=>{
        console.log(resp2)
        alert("Login Successfully")
        setAuth({
          ...auth,
          user:resp2.user,
          token:resp2.token
        })
        localStorage.setItem("login",JSON.stringify(resp2))
        navigate('/')
      })
    })
  }
  return (
<div className='mt-5 pt-3'>
      <h1 className='mt-5 mb-3'>SignIn</h1>
    <Container className=''>
         <Form className='text-start w-50 m-auto mb-5 shadow p-3 mb-5 bg-white rounded' onSubmit={userSignin}>
      
      

        <Form.Group  controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" className='mb-3' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </Form.Group>

        <Form.Group  controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" className='mb-3' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </Form.Group>

        <Button variant="dark" onClick={()=>navigate('/ForgotPassword')} type="submit" className='m-auto d-block mb-5 px-5 py-2 rounded-pill'>
        forgot Password
      </Button>

       <Button variant="dark" type="submit" className='m-auto d-block mb-5 px-5 py-2 rounded-pill'>
        Login
      </Button>
    </Form>
    </Container>
    </div>  )
}

export default Signin