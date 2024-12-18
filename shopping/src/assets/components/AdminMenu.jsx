import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";

function AdminMenu() {
  return (
    <div className="text-start">
    <h4 className="fw-bold mb-4">ADMIN DASHBOARD</h4>
  
    <div className="custom-accordion">
      <Accordion defaultActiveKey="0" className="accordion-style">
        <Accordion.Item eventKey="0">
          <Accordion.Header>PROFILE</Accordion.Header>
          <Accordion.Body>
            <ListGroupItem className="py-2">
              <Link
                to="/Dashboard/admin"
                className="text-decoration-none text-secondary"
              >
                My Profile
              </Link>
            </ListGroupItem>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  
    <div className="custom-accordion">
      <Accordion defaultActiveKey="0" className="accordion-style">
        <Accordion.Item eventKey="0">
          <Accordion.Header>CATEGORY</Accordion.Header>
          <Accordion.Body>
            <ListGroupItem className="py-2">
              <Link
                to="/Dashboard/admin/CreateCategory"
                className="text-decoration-none text-secondary"
              >
                Create Category
              </Link>
            </ListGroupItem>
            <ListGroupItem className="py-2">
              <Link
                to="/Dashboard/admin/Category"
                className="text-decoration-none text-secondary"
              >
                Categories
              </Link>
            </ListGroupItem>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  
    <div className="custom-accordion">
      <Accordion defaultActiveKey="0" className="accordion-style">
        <Accordion.Item eventKey="0">
          <Accordion.Header>PRODUCT</Accordion.Header>
          <Accordion.Body>
            <ListGroupItem className="py-2">
              <Link
                to="/Dashboard/admin/CreateProduct"
                className="text-decoration-none text-secondary"
              >
                Create Product
              </Link>
            </ListGroupItem>
            <ListGroupItem className="py-2">
              <Link
                to="/Dashboard/admin/Products"
                className="text-decoration-none text-secondary"
              >
                Products
              </Link>
            </ListGroupItem>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  
    <div className="custom-accordion">
      <Accordion defaultActiveKey="0" className="accordion-style">
        <Accordion.Item eventKey="0">
          <Accordion.Header>DEAL</Accordion.Header>
          <Accordion.Body>
            <ListGroupItem className="py-2">
              <Link
                to="/Dashboard/admin/CreateDeal"
                className="text-decoration-none text-secondary"
              >
                Create Deal
              </Link>
            </ListGroupItem>
            <ListGroupItem className="py-2">
              <Link
                to="/Dashboard/admin/Deals"
                className="text-decoration-none text-secondary"
              >
                Deals
              </Link>
            </ListGroupItem>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  
    <div className="custom-accordion">
      <Accordion defaultActiveKey="0" className="accordion-style">
        <Accordion.Item eventKey="0">
          <Accordion.Header>USERS</Accordion.Header>
          <Accordion.Body>
            <ListGroupItem className="py-2">
              <Link
                to="/Dashboard/admin/Users"
                className="text-decoration-none text-secondary"
              >
                Users
              </Link>
            </ListGroupItem>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  </div>
  
  );
}

export default AdminMenu;