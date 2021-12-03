import { Accordion, Button } from "react-bootstrap";
import './Sidepanel.css'

function Sidepanel(){
    return(
        <div class="sidenav">
        <h1>Catagories</h1>
        <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0"> 
            <Accordion.Header>Clothing Type</Accordion.Header>
            <Accordion.Body>
            <ul>
            <li><input type="checkbox" id="top" name="topp" /><lable for= "top">Tops</lable></li>
            <li><input type="checkbox" id="Lower" name="Lower"/><lable for= "top">Lower</lable></li>
            <li><input type="checkbox" id="Casual" name="Casual"/><lable for= "top">Casual</lable></li>
            <li><input type="checkbox" id="Formal" name="Formal"/><lable for= "top">Formal</lable></li>
            <li><input type="checkbox" id="Under-Garments" name="Under-Garments"/><lable for= "top">Under-Garments</lable></li>
            </ul>
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
            <Accordion.Header>Size</Accordion.Header>
            <Accordion.Body>
            
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
            <Accordion.Header>Price</Accordion.Header>
            <Accordion.Body>
            
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
            <Accordion.Header>Brand</Accordion.Header>
            <Accordion.Body>
            
            </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        <Button >Filter</Button>
    </div>
    )
}

export default Sidepanel;