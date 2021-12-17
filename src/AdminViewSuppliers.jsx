import React from "react";
import { Table } from "react-bootstrap";
import "./CSS/AdminTable.css";

class AdminViewSupplier extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      supplierArray: [],
      error: null,
    };
  }

  buildList = (data) => {
    this.setState({
      supplierArray: data,
    });
  };

  componentDidMount() {
    let url = "https://localhost:" + 44309 + "/api/suppliers";
    fetch(url)
      .then((response) => response.json())
      .then(this.buildList)
      .catch();
  }

  deleteBtn(supID, i) {
    this.state.supplierArray.splice(i, 1);
    this.setState({});

    let url = `https://localhost:${this.props.API_URL}/api/suppliers/${supID}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((response) => console.log(response.json()))
      .then()
      .catch();
  }

  render() {
    let suppliers = [];
    if (this.state.supplierArray.length > 0) {
      for (let i = 0; i < this.state.supplierArray.length; i++) {
        suppliers.push(
          <tr>
            <td>{this.state.supplierArray[i].SupID}</td>
            <td class="align">
              <tr>Name:{this.state.supplierArray[i].Name}</tr>
              <tr>Email:{this.state.supplierArray[i].Email}</tr>
              <tr>
                Address:{this.state.supplierArray[i].Street}{" "}
                {this.state.supplierArray[i].City}{" "}
                {this.state.supplierArray[i].PostalCode}
              </tr>
              <tr>Phone Number:{this.state.supplierArray[i].PhoneNo}</tr>
            </td>
            <td>
            <button>Edit</button>        
              <button
                onClick={this.deleteBtn.bind(
                  this,
                  this.state.supplierArray[i].SupID,
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
                <th>Supplier ID</th>
                <th>Supplier</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>{suppliers}</tbody>
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
}

export default AdminViewSupplier;
