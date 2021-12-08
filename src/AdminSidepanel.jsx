import { Accordion, Button } from "react-bootstrap";
import './CSS/AdminSidepanel.css'

function Adminsidepanel(){
    return(
        <div class="sidenav">
        <h1>Catagories</h1>
        <Accordion defaultActiveKey="10">
        <Accordion.Item eventKey="10"> 
            <Accordion.Header>Inventory</Accordion.Header>
            <Accordion.Body>
            <ul>
            <li><button class ="AdminButton">Receiving</button></li>
            </ul>
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="11">
            <Accordion.Header>Supplier</Accordion.Header>
            <Accordion.Body>
            <ul>
            <li><button class ="AdminButton">Add</button></li>
            <li><button class ="AdminButton">View</button></li>
            </ul>
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="12">
            <Accordion.Header>System</Accordion.Header>
            <Accordion.Body>
            <ul>
            <li><button class ="AdminButton">Regiester Users</button> </li>
            <li><button class ="AdminButton">Discount</button></li>
            <li><button class ="AdminButton">Sales Report</button></li>
            </ul>
            </Accordion.Body>
        </Accordion.Item>
        </Accordion>
    </div>
    )
}

export default Adminsidepanel;