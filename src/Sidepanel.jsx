import { Accordion, Button } from "react-bootstrap";
import './CSS/Sidepanel.css'

function Sidepanel(){
    return(
        <div class="sidenav">
        <h1>Catagories</h1>
        <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0"> 
            <Accordion.Header>Clothing Type</Accordion.Header>
            <Accordion.Body>
            <ul>
            <li><input type="checkbox" id="top" name="topp" /><lable for= "top">Top</lable></li>
            <li><input type="checkbox" id="Lower" name="Lower"/><lable for= "top">Bottom</lable></li>
            </ul>
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
            <Accordion.Header>Size</Accordion.Header>
            <Accordion.Body>
            <ul>
            <li><input type="checkbox"/><lable for= "top">XL</lable></li>
            <li><input type="checkbox"/><lable for= "top">Large</lable></li>
            <li><input type="checkbox"/><lable for= "top">Medium</lable></li>
            <li><input type="checkbox"/><lable for= "top">Small</lable></li>
            </ul>
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
            <Accordion.Header>Price</Accordion.Header>
            <Accordion.Body>
            <ul>
            <li><input type="checkbox"/><lable for= "top">$20-$100</lable></li>
            <li><input type="checkbox"/><lable for= "top">$100-$250</lable></li>
            <li><input type="checkbox"/><lable for= "top">$250-$500</lable></li>
            <li><input type="checkbox"/><lable for= "top">$500+</lable></li>
            </ul>
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
            <Accordion.Header>Color</Accordion.Header>
            <Accordion.Body>
            <ul>
            <li><input type="checkbox"/><lable for= "top">Black</lable></li>
            <li><input type="checkbox"/><lable for= "top">Blue</lable></li>
            <li><input type="checkbox"/><lable for= "top">Green</lable></li>
            <li><input type="checkbox"/><lable for= "top">Orange</lable></li>
            <li><input type="checkbox"/><lable for= "top">Pink</lable></li>
            <li><input type="checkbox"/><lable for= "top">Red</lable></li>
            <li><input type="checkbox"/><lable for= "top">White</lable></li>
            <li><input type="checkbox"/><lable for= "top">Yellow</lable></li>
            </ul>
            </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        <Button>Filter</Button>
    </div>
    )
}
export default Sidepanel;