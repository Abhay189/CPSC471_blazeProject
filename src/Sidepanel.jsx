import React from "react";
import { Accordion, Button } from "react-bootstrap";
import './CSS/Sidepanel.css'

class Sidepanel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            topcheck: false,
            bottomcheck: false,
            XLcheck: false,
            Largecheck : false, 
            Mediumcheck : false, 
            smallcheck: false,
            price1 : false,
            price2check: false,
            price3check: false,
            price4check: false,
            Black: false,
            Blue: false,
            Green: false,
            Orange: false,
            Pink: false,
            Red: false,
            White: false,
            Yellow: false,
        }
    }

    myfun(){
        this.setState({
            topcheck: document.getElementById("top").checked,
            bottomcheck: document.getElementById("Bottom").checked,

            XLcheck: document.getElementById("XL").checked,
            Largecheck : document.getElementById("Large").checked, 
            Mediumcheck : document.getElementById("Medium").checked, 
            smallcheck: document.getElementById("Small").checked,

            price1 : document.getElementById("price1").checked,
            price2check: document.getElementById("price2").checked,
            price3check: document.getElementById("price3").checked,
            price4check: document.getElementById("price4").checked,

            Black: document.getElementById("Black").checked,
            Blue: document.getElementById("Blue").checked,
            Green: document.getElementById("Green").checked,
            Orange: document.getElementById("Orange").checked,
            Pink: document.getElementById("Pink").checked,
            Red: document.getElementById("Red").checked,
            White: document.getElementById("White").checked,
            Yellow: document.getElementById("Yellow").checked,
        })
        // console.log(this.state);
    }

    componentDidMount(){
        this.myfun();
    }

    render(){
        return(
            <div className="sidenav">
            <h1>Catagories</h1>
            <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0"> 
                <Accordion.Header>Clothing Type</Accordion.Header>
                <Accordion.Body>
                <ul>
                <li><input type="checkbox" id="top" name="topp" onClick={this.myfun} />Top</li>
                <li><input type="checkbox" id="Bottom" name="Lower" onClick={this.myfun} />Bottom</li>
                </ul>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Size</Accordion.Header>
                <Accordion.Body>
                <ul>
                <li><input id="XL" type="checkbox" onClick={this.myfun} />XL</li>
                <li><input id="Large" type="checkbox" onClick={this.myfun} />Large</li>
                <li><input id="Medium" type="checkbox" onClick={this.myfun} />Medium</li>
                <li><input id="Small" type="checkbox" onClick={this.myfun} />Small</li>
                </ul>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Price</Accordion.Header>
                <Accordion.Body>
                <ul>
                <li><input id="price1" type="checkbox" onClick={this.myfun} />$20-$100</li>
                <li><input id="price2" type="checkbox" onClick={this.myfun} />$100-$250</li>
                <li><input id="price3" type="checkbox" onClick={this.myfun} />$250-$500</li>
                <li><input id="price4" type="checkbox" onClick={this.myfun} />$500+</li>
                </ul>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>Color</Accordion.Header>
                <Accordion.Body>
                <ul>
                <li><input id="Black" onClick={this.myfun} type="checkbox"/>Black</li>
                <li><input id="Blue" onClick={this.myfun} type="checkbox"/>Blue</li>
                <li><input id="Green" onClick={this.myfun} type="checkbox"/>Green</li>
                <li><input id="Orange" onClick={this.myfun} type="checkbox"/>Orange</li>
                <li><input id="Pink" onClick={this.myfun} type="checkbox"/>Pink</li>
                <li><input id="Red" onClick={this.myfun} type="checkbox"/>Red</li>
                <li><input id="White" onClick={this.myfun} type="checkbox"/>White</li>
                <li><input id="Yellow" onClick={this.myfun} type="checkbox"/>Yellow</li>
                </ul>
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>
            <Button onClick={this.myfun} >Filter</Button>
        </div>
        )
    }
}
export default Sidepanel;