import React from "react";
import ClothesCard from "./Cards";
import image from "./image.png";
import "./CSS/RightColumn.css";

class RightColumn extends React.Component {
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
  };

  componentDidMount() {
    let url = "https://localhost:" + 44317 + "/api/products";
    fetch(url)
      .then((response) => response.json())
      .then(this.buildList)
      .catch();

    // axios({
    //   method: 'get',
    //   url: "https://localhost:44317/api/products",
    //   responseType: 'stream'
    // })
    //   .then(function (response) {
    //     this.setState({
    //       productArray: response
    //     })
    //     // console.log(response);
    //   });

    // const axios = require("axios");
    // axios
    //   .get("https://localhost:44317/api/products")
    //   .then(function (response) {
    //     // console.log(response);
    //     this.setState({
    //       productArray: response.data
    //     })
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   })
    //   .then(function () {
    //     console.log(this.state.productArray);
    //   });
  }

  // makeGetRequest(path) {

  //   return new Promise(function (resolve, reject) {
  //     const axios = require("axios");
  //     axios.get(path).then(
  //         (response) => {
  //           var result = response.data;
  //           // console.log('Processing Request');
  //           for (var i = 0; i < response.data.length; i++) {
  //             productArray.push(response.data[i]);
  //           }

  //           // console.log(prokkductArray);
  //           resolve(result);
  //         },
  //         (error) => {
  //             console.log(error);
  //         }
  //     );
  //   });
  // }

  // async secondfunction(){
  //   var result = await this.makeGetRequest("https://localhost:44317/api/products");
  //   // console.log(result);
  //   return{
  //     result
  //   }
  // }

  render() {
    let cards = [];
    if (this.state.productArray.length > 0) {
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
        <div>
          <div className="heading">
            <h1 id="men_tops">Products</h1>
          </div>
          <div className="cardHolder">{cards}</div>
        </div>
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
