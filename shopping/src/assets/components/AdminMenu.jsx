import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function AdminMenu() {
  return (
    <div className="admin-menu">
      <Container className="p-0">
        <ListGroup defaultActiveKey="#link1" className="text-start">
          <h4 className="mb-4 text-center">Admin Panel</h4>
          <ListGroup.Item className="admin-menu-item">
            <Link to="/Dashboard/admin/Createcategory" className="text-decoration-none text-dark">Create Category</Link>
          </ListGroup.Item>
          <ListGroup.Item className="admin-menu-item">
            <Link to="/Dashboard/admin/Createproduct" className="text-decoration-none text-dark">Create Product</Link>
          </ListGroup.Item>
          <ListGroup.Item className="admin-menu-item">
            <Link to="/Dashboard/admin/Products" className="text-decoration-none text-dark">Products</Link>
          </ListGroup.Item>
          <ListGroup.Item className="admin-menu-item">
            <Link to="/Dashboard/admin/Createdeal" className="text-decoration-none text-dark">Create Deal</Link>
          </ListGroup.Item>
          <ListGroup.Item className="admin-menu-item">
            <Link to="/Dashboard/admin/Users" className="text-decoration-none text-dark">Users</Link>
          </ListGroup.Item>
        </ListGroup>
      </Container>
    </div>
  );
}

export default AdminMenu;
