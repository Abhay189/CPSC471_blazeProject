import {Button,Form } from "react-bootstrap";
import './CSS/AdminSupplierForm.css';

function AdminInventoryAddForm(){
    return(
      <div className="adminsupplierbackground">
        <Form>
          <Form.Group className="mb-3" controlId="ProductName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="Semail" placeholder="Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="ProductEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="Semail" placeholder="Email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="ProductAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control type="Saddress" placeholder="Address" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="ProductPhoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="Saddress" placeholder="Phone Number" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="ProductformBasicCheckbox">
            <Form.Check type="checkbox" label="Completed" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    )
}

export default AdminInventoryAddForm;