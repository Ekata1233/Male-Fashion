import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AdminMenu from "../assets/components/AdminMenu";
import { useAuth } from "../context/auth";
import Categoryform from "../assets/components/Categoryform";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Createcategory() {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [selected, setSelected] = useState(null);
  const [updatedName, setUpdatedName] = useState("");
  const [auth] = useAuth();
  const token = auth.token;
  console.log(token);
  function handleSubmit(e) {
    e.preventDefault();
    const data = { name };
    console.log(data);
    fetch("http://localhost:4300/api/category/createcategory", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: token,
      },
      body: JSON.stringify(data),
    }).then((resp1) => {
      resp1.json().then((resp2) => {
        console.log(resp2);
        getAllCategory();
      });
    });
  }
  function getAllCategory() {
    fetch("http://localhost:4300/api/category/getcategory").then((resp1) => {
      resp1.json().then((resp2) => {
        console.log(resp2);
        setCategories(resp2.category);
      });
    });
  }
  useEffect(() => {
    getAllCategory();
  }, []);
  function handleUpdate(e) {
    e.preventDefault();
    console.log();
    const data = { name: updatedName };
    fetch(`http://localhost:4300/api/category/updatecategory/${selected._id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        "authorization": token,
      },
      body: JSON.stringify(data),
    }).then((resp1) => {
      resp1.json().then((resp2) => {
        console.log(resp2);
        setSelected(null);
        setUpdatedName("");
        setShow(false);
        getAllCategory();
      });
    });
  }
  function handleDelete(id) {
    fetch(`http://localhost:4300/api/category/deletecategory/${id}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    }).then((resp1) => {
      resp1.json().then((resp2) => {
        console.log(resp2);

        getAllCategory();
      });
    });
  }

  return (
    <div className=""style={{paddingTop:"200px"}}>
      <Container fluid className="">
        <Row>
          <Col md={3}>
            <AdminMenu />
          </Col>

          <Col md={9}>
            <h1>Create Category</h1>
            <div className="p-3">
              <Categoryform
                handleSubmit={handleSubmit}
                value={name}
                setValue={setName}
              />
            </div>
            <table className="table w-75">
              <caption>All Categories</caption>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td>
                        <Button variant="primary" onClick={()=>{handleShow();setUpdatedName(item.name);setSelected(item)}}>
                          Edit
                        </Button>

                        <Modal show={show} onHide={handleClose}>
                          <Modal.Header closeButton>
                            <Modal.Title>Update Category</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                           <Categoryform value={updatedName} setValue={setUpdatedName} handleSubmit={handleUpdate}></Categoryform>
                          </Modal.Body>
                          
                        </Modal>
                        <Button variant="danger" className="ms-3" onClick={()=>handleDelete(item._id)}>Delete</Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Createcategory;
