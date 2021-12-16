import React from "react";
import { Accordion, Button } from "react-bootstrap";
import './CSS/Sidepanel.css'

class Sidepanel extends React.Component{
    render(){
        return(
            <div className="sidenav">
            <h1>Catagories</h1>
            <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0"> 
                <Accordion.Header>Clothing Type</Accordion.Header>
                <Accordion.Body>
                <ul>
                <li><input type="checkbox" id="top" name="topp" />Top</li>
                <li><input type="checkbox" id="Lower" name="Lower"/>Bottom</li>
                </ul>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Size</Accordion.Header>
                <Accordion.Body>
                <ul>
                <li><input id="jiio" type="checkbox"/>XL</li>
                
                <li><input type="checkbox"/>Large</li>
                <li><input type="checkbox"/>Medium</li>
                <li><input type="checkbox"/>Small</li>
                </ul>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Price</Accordion.Header>
                <Accordion.Body>
                <ul>
                <li><input type="checkbox"/>$20-$100</li>
                <li><input type="checkbox"/>$100-$250</li>
                <li><input type="checkbox"/>$250-$500</li>
                <li><input type="checkbox"/>$500+</li>
                </ul>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>Color</Accordion.Header>
                <Accordion.Body>
                <ul>
                <li><input type="checkbox"/>Black</li>
                <li><input type="checkbox"/>Blue</li>
                <li><input type="checkbox"/>Green</li>
                <li><input type="checkbox"/>Orange</li>
                <li><input type="checkbox"/>Pink</li>
                <li><input type="checkbox"/>Red</li>
                <li><input type="checkbox"/>White</li>
                <li><input type="checkbox"/>Yellow</li>
                </ul>
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>
            <Button>Filter</Button>
        </div>
        )
    }
}
export default Sidepanel;