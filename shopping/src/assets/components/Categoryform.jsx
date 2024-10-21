import React from 'react'
import { Button, Form } from 'react-bootstrap'

function Categoryform({handleSubmit,value,setValue}) {
  return (
    <div>
        <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3' controlId='exapmleForm.ControlInput1'>
                <Form.Control type='text' placeholder='Enter Category Name' value={value} onChange={(e)=>setValue(e.target.value)}/>

                
            </Form.Group>
            <Button variant='primary' type='submit'>Submit</Button>

        </Form>
    </div>
  )
}

export default Categoryform