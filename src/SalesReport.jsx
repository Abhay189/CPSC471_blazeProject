import {Table} from "react-bootstrap";
import './CSS/AdminDiscount.css'


function AdminSales(){
    return(
        <div class = "AdminProductTable">
          <Table striped bordered hover size="sm"> 
            <thead>
              <tr>
                <th>Product id</th>
                <th>Product</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td class = "align">
                  <tr>Name:</tr>
                  <tr>Price:</tr>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td class = "align">
                  <tr>Name:</tr>
                  <tr>Price:</tr>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
    )
}
    
export default AdminSales;