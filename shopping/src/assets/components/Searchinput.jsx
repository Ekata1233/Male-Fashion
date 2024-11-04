import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../../context/search';
function Searchinput() {
    const [values,setValues]=useSearch()
    const navigate=useNavigate()
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);
    function handleSubmit(e)
    {
        e.preventDefault()
        fetch(`http://localhost:4300/api/product/search/${values.keyword}`).then((res1)=>{
            res1.json().then((res2)=>{
                setValues({...values,result:res2})
                navigate('/Search')
            })
        })
    }
  return (
    <div className=''>
        <Form inline onSubmit={handleSubmit}>
        <Row className='pt-2'>
          <Col >
          <Form.Control
            type="search"
            placeholder="Search"
            value={values.keyword}
            className="mr-sm-2 search"
          
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={(e) => setValues({ ...values, keyword: e.target.value })}
        />
          </Col>
          <Col className=''>
          <button type="submit" className="bg-white border-0 pe-4">
  <img src="/search.png" alt="search" />
</button>

          </Col>
        </Row>
      </Form>
    </div>
  )
}

export default Searchinput