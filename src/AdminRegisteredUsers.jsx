import React from "react";
import { render } from "@testing-library/react";
import { Table } from "react-bootstrap";
import "./CSS/AdminTable.css";

class AdminRegisteredUser extends React.Component {
  componentDidMount() {
    const axios = require("axios");
    // Make a request for a user with a given ID
    axios
      .get("https://localhost:44392/api/users")
      .then(function (response) {
        // handle success
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        console.log("hither");
        // always executed
      });
  }

  render() {
    return (
      <div class="AdminProductTable">
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
              <td class="align">
                <tr>LoginID:1023</tr>
                <tr>Name: bob</tr>
                <tr>Phone Number:</tr>
              </td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td class="align">
                <tr>LoginID:3232</tr>
                <tr>Name: james</tr>
                <tr>Phone Number:</tr>
              </td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
// function AdminRegisteredUser(){
//     return(
//         <div class = "AdminProductTable">
//         <Table striped bordered hover size="sm">
//           <thead>
//             <tr>
//               <th>Product id</th>
//               <th>Product</th>
//               <th>Delete</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>1</td>
//               <td class = "align">
//                 <tr>LoginID:1023</tr>
//                 <tr>Name: bob</tr>
//                 <tr>Phone Number:</tr>
//               </td>
//               <td><button>Delete</button></td>
//             </tr>
//             <tr>
//               <td>2</td>
//               <td class = "align">
//               <tr>LoginID:3232</tr>
//                 <tr>Name: james</tr>
//                 <tr>Phone Number:</tr>
//               </td>
//               <td><button>Delete</button></td>
//             </tr>
//           </tbody>
//         </Table>
//         </div>
//         )
//     }

export default AdminRegisteredUser;
