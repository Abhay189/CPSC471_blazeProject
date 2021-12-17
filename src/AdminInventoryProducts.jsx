import React from "react";
import { Table } from "react-bootstrap";
import "./CSS/AdminTable.css";

class AdminInventoryProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productArray: [],
      error: null,
    };
  }

  buildList = (data) => {
    this.setState({
      productArray: data,
    });
    console.log(this.state.productArray);
  };
//this.props.API_URL
  componentDidMount() {
    let url = `https://localhost:${this.props.API_URL}/api/products`;
    fetch(url)
      .then((response) => response.json())
      .then(this.buildList)
      .catch();
  }

  deleteBtn(PID, i) {
    this.state.productArray.splice(i, 1);
    this.setState({});

    let url = `https://localhost:${this.props.API_URL}/api/products/${PID}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((response) => console.log(response.json()))
      .then()
      .catch();
  }

  render() {
    let products = [];
    if (this.state.productArray.length > 0) {
      for (let i = 0; i < this.state.productArray.length; i++) {
        products.push(
          <tr>
            <td>{this.state.productArray[i].PID}</td>
            <td className="align">
              <tr>Name: {this.state.productArray[i].Name}</tr>
              <tr>Descr: {this.state.productArray[i].Descr}</tr>
              <tr>Price: {this.state.productArray[i].Price}$</tr>
              <tr>PID: {this.state.productArray[i].PID}</tr>
              <tr>Size: {this.state.productArray[i].Size}</tr>
              <tr>Color: {this.state.productArray[i].Color}</tr>
            </td>
            <td>
            <button>Edit</button>        
              <button
                onClick={this.deleteBtn.bind(
                  this,
                  this.state.productArray[i].PID,
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
                <th>Product ID</th>
                <th>Product</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>{products}</tbody>
          </Table>
        </div>
      );
    } else {
      return (
        <div class="AdminProductTable">
          <h1>Loading</h1>
        </div>
      );
    }
  }
}

export default AdminInventoryProducts;
