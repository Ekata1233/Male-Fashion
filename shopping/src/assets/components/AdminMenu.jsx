import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function AdminMenu() {
  return (
    <div className=''style={{marginTop:"150px"}}>
      <ListGroup defaultActiveKey="#link1" className="m-3 p-3">
        <h4 className="mt-4 mb-4">Admin Panel</h4>
        <ListGroup.Item>
          <Link to="/Dashboard/admin/Createcategory">Create Category</Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <Link to="/Dashboard/admin/Createproduct">Create Product</Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <Link to="/Dashboard/admin/Users">Users</Link>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default AdminMenu;
