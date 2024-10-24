import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';

function DealWeek() {
    const [deal,setDeal]=useState([])
    function getDeal()
    {
        fetch("http://localhost:4300/api/deal/getdeal").then((resp1)=>{
            resp1.json().then((resp2)=>{
                console.log(resp2);
                setDeal(resp2.deal)
                console.log(deal)
                
            }).catch((error)=>{
                console.log(error)
            })
        })
    }
    useEffect(()=>{
        getDeal()
    },[])
  return (
    <div  className='deal py-5'>
        <Container>
           
            


                {deal.map((item,index)=>{
                    return (
                        <Row key={index}
                        className='dealCard'
                        style={{padding: "0", margin: "0" }}>
                            <Col>1</Col>
                            <Col>
                            <img src={`http://localhost:4300/api/deal/getphoto/${item._id}`}/>
                            <h2>₹{item.price}</h2>
                            </Col>
                            <Col>
                            <h2>{item.title}</h2>
                            
                            <h2>{item.days}</h2>
                            <h2>{item.hours}</h2>
                            <h2>{item.minutes}</h2>
                            <h2>{item.seconds}</h2>
                            </Col>
                        </Row>
                    )
                })}
           
            
        </Container>
    </div>
  )
}

export default DealWeek