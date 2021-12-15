import React from "react";
import { Accordion, Button } from "react-bootstrap";
import './CSS/AdminSidepanel.css'

class Adminsidepanel extends React.Component{
    render(){
        return(
            <div class="sidenav">
            <h1>Catagories</h1>
            <Accordion defaultActiveKey="10">
            <Accordion.Item eventKey="10"> 
                <Accordion.Header>Inventory</Accordion.Header>
                <Accordion.Body>
                <ul>
                <li><button onClick={this.props.viewInventoryButtonHandler} class ="AdminButton">View Inventory</button></li>
                <li><button onClick={this.props.addInventoryButtonHandler} class ="AdminButton">Add Inventory</button></li>
                </ul>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="11">
                <Accordion.Header>Supplier</Accordion.Header>
                <Accordion.Body>
                <ul>
                <li><button onClick={this.props.addSupplierButtonHandler} class ="AdminButton">Add</button></li>
                <li><button onClick={this.props.viewSupplierButtonHandler} class ="AdminButton">View</button></li>
                </ul>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="12">
                <Accordion.Header>System</Accordion.Header>
                <Accordion.Body>
                <ul>
                <li><button onClick={this.props.registeredUserButtonHandler} class ="AdminButton">Regiestered Users</button> </li>
                <li><button onClick={this.props.discountButtonHandler} class ="AdminButton">Add Discount</button></li>
                <li><button onClick={this.props.viewdiscountButtonHandler} class ="AdminButton">View Discount</button></li>
                </ul>
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>
        </div>
        )
    }
}

export default Adminsidepanel;