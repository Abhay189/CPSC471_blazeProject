import React from "react";
import { Accordion, Button } from "react-bootstrap";
import "./CSS/Sidepanel.css";

class Sidepanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      CatTop: false,
      CatBottom: false,
      SizeXL: false,
      SizeL: false,
      SizeM: false,
      SizeS: false,
      Price1: false,
      Price2: false,
      Price3: false,
      Price4: false,
      ColorBlack: false,
      ColorBlue: false,
      ColorGreen: false,
      ColorOrange: false,
      ColorPink: false,
      ColorRed: false,
      ColorWhite: false,
      ColorYellow: false,
    };
    this.myfun = this.myfun.bind(this);
  }

  myfun() {
    this.setState({
      CatTop: document.getElementById("top").checked,
      CatBottom: document.getElementById("Bottom").checked,

      SizeXL: document.getElementById("XL").checked,
      SizeL: document.getElementById("L").checked,
      SizeM: document.getElementById("M").checked,
      SizeS: document.getElementById("S").checked,

      Price1: document.getElementById("price1").checked,
      Price2: document.getElementById("price2").checked,
      Price3: document.getElementById("price3").checked,
      Price4: document.getElementById("price4").checked,

      ColorBlack: document.getElementById("Black").checked,
      ColorBlue: document.getElementById("Blue").checked,
      ColorGreen: document.getElementById("Green").checked,
      ColorOrange: document.getElementById("Orange").checked,
      ColorPink: document.getElementById("Pink").checked,
      ColorRed: document.getElementById("Red").checked,
      ColorWhite: document.getElementById("White").checked,
      ColorYellow: document.getElementById("Yellow").checked,
    });
  }

  componentDidMount() {
    this.myfun();
  }

  filterBtn() {
    // IDK why this.props.API_URL return undefined
    // ********
    let API_URL = "44317";

    let apiCalls = new Array();
    for (let [key, value] of Object.entries(this.state)) {
      if (key.includes("Cat") && value)
        apiCalls.push(
          `https://localhost:${API_URL}/api/productcat/${key.replace(
            "Cat",
            ""
          )}`
        );
      else if (key.includes("Size") && value)
        apiCalls.push(
          `https://localhost:${API_URL}/api/productsize/${key.replace(
            "Size",
            ""
          )}`
        );
      else if (key.includes("Price") && value)
        apiCalls.push(
          `https://localhost:${API_URL}/api/productprice/${key.replace(
            "Price",
            ""
          )}`
        );
      else if (key.includes("Color") && value)
        apiCalls.push(
          `https://localhost:${API_URL}/api/productcolor/${key.replace(
            "Color",
            ""
          )}`
        );
    }
    console.log(apiCalls);

    let newArr = new Array();
    apiCalls.forEach((url) => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => newArr.push(data));
    });
    console.log(newArr);
  }

  render() {
    return (
      <div className="sidenav">
        <h1>Catagories</h1>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Clothing Type</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>
                  <input
                    type="checkbox"
                    id="top"
                    name="topp"
                    onClick={this.myfun}
                  />
                  Top
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="Bottom"
                    name="Lower"
                    onClick={this.myfun}
                  />
                  Bottom
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Size</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>
                  <input id="XL" type="checkbox" onClick={this.myfun} />
                  XL
                </li>
                <li>
                  <input id="L" type="checkbox" onClick={this.myfun} />
                  Large
                </li>
                <li>
                  <input id="M" type="checkbox" onClick={this.myfun} />
                  Medium
                </li>
                <li>
                  <input id="S" type="checkbox" onClick={this.myfun} />
                  Small
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Price</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>
                  <input id="price1" type="checkbox" onClick={this.myfun} />
                  $20-$100
                </li>
                <li>
                  <input id="price2" type="checkbox" onClick={this.myfun} />
                  $100-$250
                </li>
                <li>
                  <input id="price3" type="checkbox" onClick={this.myfun} />
                  $250-$500
                </li>
                <li>
                  <input id="price4" type="checkbox" onClick={this.myfun} />
                  $500+
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Color</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>
                  <input id="Black" onClick={this.myfun} type="checkbox" />
                  Black
                </li>
                <li>
                  <input id="Blue" onClick={this.myfun} type="checkbox" />
                  Blue
                </li>
                <li>
                  <input id="Green" onClick={this.myfun} type="checkbox" />
                  Green
                </li>
                <li>
                  <input id="Orange" onClick={this.myfun} type="checkbox" />
                  Orange
                </li>
                <li>
                  <input id="Pink" onClick={this.myfun} type="checkbox" />
                  Pink
                </li>
                <li>
                  <input id="Red" onClick={this.myfun} type="checkbox" />
                  Red
                </li>
                <li>
                  <input id="White" onClick={this.myfun} type="checkbox" />
                  White
                </li>
                <li>
                  <input id="Yellow" onClick={this.myfun} type="checkbox" />
                  Yellow
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Button onClick={this.filterBtn.bind(this)}>Filter</Button>
      </div>
    );
  }
}
export default Sidepanel;
