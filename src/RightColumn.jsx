import React from "react";
import ClothesCard from "./Cards";
import image from "./image.png";
import "./CSS/RightColumn.css";
import Sidepanel from "./Sidepanel";
import { Col, Container, Row } from "react-bootstrap";

class RightColumn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productArray: [],
      error: null,
    };
    this.rerenderfunction = this.rerenderfunction.bind(this);
  }

  buildList = (data) => {
    this.setState({
      productArray: data,
    });
  };

  componentDidMount() {
    let url = `https://localhost:${this.props.API_URL}/api/products`;
    fetch(url)
      .then((response) => response.json())
      .then(this.buildList)
      .catch();
  }

  rerenderfunction(something) {
    let fillarr = something;
    // console.log(fillarr.length);
    if (fillarr.length != 0) {
      let arrry = new Array();
      for (var i = 0; i < fillarr.length; i++) {
        for (var r = 0; r < fillarr[i].length; r++) {
          arrry.push(fillarr[i][r]);
          // console.log("foo");
        }
      }

      const result = arrry.reduce((unique, o) => {
        if (!unique.some((obj) => obj.PID === o.PID)) {
          unique.push(o);
        }
        return unique;
      }, []);
      //console.log(result);

      this.setState({
        productArray: result,
      });
    }
  }

  render() {
    let cards = [];
    if (this.state.productArray.length > 0) {
      // console.log(this.state.productArray);
      for (let i = 0; i < this.state.productArray.length; i++) {
        cards.push(
          <ClothesCard
            key={i}
            className="card"
            source={image}
            productPrice={this.state.productArray[i].Price}
            productname={this.state.productArray[i].Name}
            description={this.state.productArray[i].Descr}
          />
        );
        // console.log(this.state.productArray);
      }
      return (
        <Row>
          <Col className="leftCol" lg={4} sm={12}>
            <Sidepanel rerenderfunction={this.rerenderfunction} />
          </Col>
          <Col className="rightColumn">
            <div>
              <div className="heading">
                <h1 id="men_tops">Products</h1>
              </div>
              <div className="cardHolder">{cards}</div>
            </div>
          </Col>
        </Row>
        // <div>
        //   <div className="heading">
        //     <h1 id="men_tops">Products</h1>
        //   </div>
        //   <div className="cardHolder">{cards}</div>
        // </div>
      );
    } else {
      return (
        <div>
          <h1>Loading....</h1>
        </div>
      );
    }
  }
}

export default RightColumn;
