import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {
    const [email,setEmail]=useState("")
    const [newPassword,setNewPassword]=useState("")
    const [answer,setAnswer]=useState('')
    const navigate=useNavigate("")

    function changePassword(e){
        e.preventDefault()
        let user={email,newPassword,answer}
        fetch("http://localhost:4300/api/auth/forgotPassword",{
          method:"post",
          headers:{
            "content-type":"application/json",
          },
          body:JSON.stringify(user)
        }).then((resp1)=>{
          resp1.json().then((resp2)=>{
            console.log(resp2)
            alert("Change Password Successfully")
           
            navigate('/Signin')
          })
        })
      }
  return (
<div className='mt-5 pt-3'>
      <h1 className='mt-5 mb-3'>Forgot Password</h1>
    <Container className=''>
         <Form className='text-start w-50 m-auto mb-5 shadow p-3 mb-5 bg-white rounded' onSubmit={changePassword}>
      
      

        <Form.Group  controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" className='mb-3' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </Form.Group>

        <Form.Group  controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" className='mb-3' value={newPassword} onChange={(e)=>setNewPassword(e.target.value)}/>
        </Form.Group>

        <Form.Group  controlId="formGridAnswer">
          <Form.Label>Answer</Form.Label>
          <Form.Control type="text" placeholder="Answer" className='mb-3' value={answer} onChange={(e)=>setAnswer(e.target.value)}/>
        </Form.Group>

        <Button variant="dark"  type="submit" className='m-auto d-block mb-5 px-5 py-2 rounded-pill'>
        Reset
      </Button>

       <Button variant="dark" type="submit" className='m-auto d-block mb-5 px-5 py-2 rounded-pill'>
        Login
      </Button>
    </Form>
    </Container>
    </div>
 )
}

export default ForgotPassword