// import React from 'react'
import { useEffect, useState } from 'react'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import { Button, Container, Form, FormControl, FormLabel } from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import { useAuth } from '../context/auth'
import AdminMenu from '../assets/components/AdminMenu'

function CreateDeal() {
    const [title,setTitle] = useState("");
    const [price,setPrice] = useState("")
    const [days,setDays] = useState(0);
    const [hours,setHours] = useState(0);
    const [minutes,setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [photo,setPhoto]=useState("")
    const [auth]=useAuth()
    const token=auth.token
    const navigate=useNavigate()

    function addDeal(e){
        e.preventDefault();
        const deal= new FormData()
        deal.append("title",title)
        deal.append("price",price)
        deal.append("days",days)
        deal.append("hours",hours)
        deal.append("minutes",minutes)
        deal.append("seconds",seconds)
        photo && deal.append("photo",photo)

        fetch("http://localhost:4300/api/deal/createdeal",{
            method:"post",
            headers:{
                "authorization":token
            },
            body:deal
        }).then((res1)=>{
            res1.json().then((res2)=>{
                console.log(res2)
                // getprods()
                // navigate('/Dashboard/admin/Products')
            }).catch((error)=>{
                console.log(error)
            })
        })
    }

    

  return (
    <div style={{paddingTop:"180px"}}>
        <Container>
        <Row>
                <Col md={3} className='mt-4'>
                    <AdminMenu/>
                </Col>
                <Col md={9}>
                    <Container>
                        <h1 className='mt-4 text-center'>Add New Deal</h1>
                        <Form onSubmit={(e)=>addDeal(e)}>
                            
                            <Form.Group as={Row} className='mb-3' controlId='forHorizontalEmail'>
                                <FormLabel column sm={2}>
                                    Title : 
                                </FormLabel>
                                <Col sm={10}>
                                    <FormControl type='text' placeholder='Enter Title' value={title} onChange={(e)=>setTitle(e.target.value)} /> 
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className='mb-3' controlId='forHorizontalPrice'>
                                <FormLabel column sm={2}>
                                    Price : 
                                </FormLabel>
                                <Col sm={10}>
                                    <FormControl type='text' placeholder='Product Price' value={price} onChange={(e)=>setPrice(e.target.value)} /> 
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className='mb-3' controlId='forHorizontalDays'>
                                <FormLabel column sm={2}>
                                    Days : 
                                </FormLabel>
                                <Col sm={10}>
                                    <FormControl type='text' placeholder='Days' value={days} onChange={(e)=>setDays(e.target.value)} /> 
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className='mb-3' controlId='forHorizontalHours'>
                                <FormLabel column sm={2}>
                                    Hours : 
                                </FormLabel>
                                <Col sm={10}>
                                    <FormControl type='text' placeholder='Hours' value={hours} onChange={(e)=>setHours(e.target.value)} /> 
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className='mb-3' controlId='forHorizontalMinutes'>
                                <FormLabel column sm={2}>
                                    Minutes : 
                                </FormLabel>
                                <Col sm={10}>
                                    <FormControl type='text' placeholder='Minutes' value={minutes} onChange={(e)=>setMinutes(e.target.value)} /> 
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className='mb-3' controlId='forHorizontalSeconds'>
                                <FormLabel column sm={2}>
                                    Seconds : 
                                </FormLabel>
                                <Col sm={10}>
                                    <FormControl type='text' placeholder='Seconds' value={seconds} onChange={(e)=>setSeconds(e.target.value)} /> 
                                </Col>
                            </Form.Group>

                            {/* <Form.Group  className='mb-3' controlId='formFile'>
                                <FormLabel column sm={2}>
                                    Upload Product Picture : 
                                </FormLabel>
                                    <FormControl type='file' name='photo' accept='image/*' onChange={(e)=>setPhoto(e.target.files[0])} hidden /> 
                            </Form.Group> */}


<Form.Group className="mb-3" controlId="formFile">
<FormLabel column sm={2}>
                                    Upload Deal Picture : 
                                </FormLabel>
  
  <div className="upload-btn-wrapper">
    <Button variant="outline-primary" className="upload-button">
      Choose File
    </Button>
    <Form.Control
      type="file"
      name="photo"
      accept="image/*"
      onChange={(e) => setPhoto(e.target.files[0])}
      className="upload-input"
    />
  </div>

  <small className="text-muted mt-2 d-block">
    Accepted formats: JPG, PNG, GIF
  </small>
</Form.Group>


                            <div className='mb-3'>
                                {photo && (
                                    <div className='text-center'>
                                        <img src={URL.createObjectURL(photo)} alt='product' height={"200px"} className='img-fluid' />
                                    </div>
                                )}
                            </div>
                            <Form.Group as={Row} className='mb-3'>
                                <Col sm={{span:10 , offset:2}}>
                                    <Button type='submit' variant="dark" className="heroButton mt-4  px-4 py-3">
              ADD DEAL 
            </Button>
                                </Col>
                            </Form.Group>

                        </Form>
                    </Container>                
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default CreateDeal