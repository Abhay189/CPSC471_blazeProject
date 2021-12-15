import {Form,InputGroup,Button,FormControl } from "react-bootstrap";
import './CSS/AdminDiscount.css'


function AdminDiscount(){
    return(
        <div class="DiscountBack">
    <Form>
  <Form.Group className="mb-3" controlId="formEXPDate">
    <Form.Label>Expiration Date</Form.Label>
    <Form.Control type="text" placeholder="01/31/2021" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formValue">
    <Form.Label>Value</Form.Label>
    <InputGroup>
        <InputGroup.Text>$</InputGroup.Text>
        <FormControl id="formValue" placeholder="21" />
    </InputGroup>
  </Form.Group> 

  <Form.Group className="mb-3" controlId="formEXPDate">
    <Form.Label>Promo Code</Form.Label>
    <Form.Control type="text" placeholder="code1234" />
  </Form.Group>

  <button class = "customButton" variant="primary" type="submit">
    Submit
  </button>
</Form>
        </div>
)
    }
    
    export default AdminDiscount;