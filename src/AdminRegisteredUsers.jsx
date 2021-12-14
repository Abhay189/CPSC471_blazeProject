import {Table } from "react-bootstrap";
import './CSS/AdminTable.css'

function AdminRegisteredUser(){
    return(
        <div class = "AdminProductTable">
        <Table striped bordered hover size="sm"> 
          <thead>
            <tr>
              <th>Product id</th>
              <th>Product</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td class = "align">
                <tr>LoginID:1023</tr>
                <tr>Name: bob</tr>
                <tr>Phone Number:</tr>
              </td>
              <td><button>Delete</button></td>
            </tr>
            <tr>
              <td>2</td>
              <td class = "align">
              <tr>LoginID:3232</tr>
                <tr>Name: james</tr>
                <tr>Phone Number:</tr>
              </td>
              <td><button>Delete</button></td>
            </tr>
          </tbody>
        </Table>
        </div>
        )
    }
    
    export default AdminRegisteredUser;