import {Table} from "react-bootstrap";
import './CSS/AdminTable.css'


function AdminView(){
    return(
        <div class = "AdminProductTable">
        <Table striped bordered hover size="sm"> 
          <thead>
            <tr>
              <th>Supplier id</th>
              <th>Supplier</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td class = "align">
                <tr>Name:dsdasa</tr>
                <tr>Email:</tr>
                <tr>Address:</tr>
                <tr>Phone Number:</tr>
              </td>
              <td><button>Delete</button></td>
            </tr>
            <tr>
              <td>2</td>
              <td class = "align">
                <tr>Name:sdasffffffffffffffffffffffffffff</tr>
                <tr>Email:</tr>
                <tr>Address:</tr>
                <tr>Phone Number:</tr>
              </td>
              <td><button>Delete</button></td>
            </tr>
        
          </tbody>
        </Table>
        </div>
)
}

export default AdminView;