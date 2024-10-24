import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function AdminMenu() {
  return (
    <div className=''>
      <ListGroup defaultActiveKey="#link1" className="text-start p-3 ">
        <h4 className=" mb-4">Admin Panel</h4>
        <ListGroup.Item>
          <Link to="/Dashboard/admin/Createcategory" className='text-decoration-none text-dark'>Create Category</Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <Link to="/Dashboard/admin/Createproduct" className='text-decoration-none text-dark'>Create Product</Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <Link to="/Dashboard/admin/Products" className='text-decoration-none text-dark'>Products</Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <Link to="/Dashboard/admin/Createdeal" className='text-decoration-none text-dark'>Create Deal</Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <Link to="/Dashboard/admin/Users" className='text-decoration-none text-dark'>Users</Link>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default AdminMenu;
