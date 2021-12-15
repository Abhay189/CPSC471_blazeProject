import {Table} from "react-bootstrap";
import './CSS/AdminTable.css'


function AdminViewDiscount(){
    return(
        <div class = "AdminProductTable">
        <Table striped bordered hover size="sm"> 
          <thead>
            <tr>
              <th>Promo id</th>
              <th>Discount</th>
              <th>Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td class = "align">
                <tr>Expiration Date:1/3/2022</tr>
                <tr>Value($): 56</tr>
                <tr>Promo Code: sdh252</tr>
              </td>
              <td><button>Edit</button>    <button>Delete</button></td>
            </tr>
            <tr>
              <td>2</td>
              <td class = "align">
              <tr>Expiration Date:1/3/2025</tr>
                <tr>Value($): 892</tr>
                <tr>Promo Code: hsds982</tr>
              </td>
              <td><button>Edit</button>    <button>Delete</button></td>
            </tr>
        
          </tbody>
        </Table>
        </div>
)
}

export default AdminViewDiscount;