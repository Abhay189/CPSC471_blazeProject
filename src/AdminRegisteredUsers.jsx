import React from "react";
import { Table } from "react-bootstrap";
import "./CSS/AdminTable.css";

class AdminRegisteredUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usersArray: [],
      error: null,
    };
  }

  buildList = (data) => {
    this.setState({
      usersArray: data,
    });
  };

  componentDidMount() {
    let url = `https://localhost:${this.props.API_URL}/api/users`;
    fetch(url)
      .then((response) => response.json())
      .then(this.buildList)
      .catch();
  }

  deleteBtn(loginID, i) {
    this.state.usersArray.splice(i, 1);
    this.setState({});

    let url = `https://localhost:${this.props.API_URL}/api/users/${loginID}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((response) => console.log(response.json()))
      .then()
      .catch();
  }

  render() {
    let users = [];
    if (this.state.usersArray.length > 0) {
      for (let i = 0; i < this.state.usersArray.length; i++) {
        users.push(
          <tr>
            <td>{this.state.usersArray[i].LoginID}</td>
            <td>{this.state.usersArray[i].Pwd}</td>
            <td>
              <button
                onClick={this.deleteBtn.bind(
                  this,
                  this.state.usersArray[i].LoginID,
                  i
                )}
              >
                Delete
              </button>
            </td>
          </tr>
        );
      }
      return (
        <div class="AdminProductTable">
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>LoginID</th>
                <th>Pwd</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>{users}</tbody>
          </Table>
        </div>
      );
    } else {
      return (
        <div class="AdminProductTable">
          <h1>Loading...</h1>
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
}

export default AdminRegisteredUser;
