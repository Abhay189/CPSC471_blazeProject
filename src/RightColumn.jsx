import React from "react";
import ClothesCard from "./Cards";
import image from "./image.png";
import "./CSS/RightColumn.css";

let productArray = new Array();

class RightColumn extends React.Component {
  constructor(props) {
    super(props);
    // let productArray = new Array();
    this.state = {
      // productArray: new Array()
    };
    this.callAPI = this.callAPI.bind(this);
    this.callAPI();
  }

  callAPI() {
    const axios = require("axios");
    // Make a request for a user with a given ID
    axios
      .get("https://localhost:44392/api/products")
      .then(function (response) {
        for (var i = 0; i < response.data.length; i++) {
          productArray.push(response.data[i]);
        }
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // console.log(productArray[0]);
      });

    // console.log(productArray);
  }

  render() {
    return (
      <div>
        <div className="heading">
          <h1 id="men_tops">Mens Tops</h1>
        </div>
        <div className="cardHolder">
          <ClothesCard
            className="card"
            source={image}
            // productname={productArray[0].name}
            // description={productArray[0].descr}
          />
          <ClothesCard className="card" source={image} />
          <ClothesCard className="card" source={image} />
          <ClothesCard className="card" source={image} />
          <ClothesCard className="card" source={image} />
          <ClothesCard className="card" source={image} />
        </div>
        <div className="heading">
          <h1 id="men_lower">Mens Bottom</h1>
        </div>
        <div className="cardHolder">
          <ClothesCard className="card" source={image} />
          <ClothesCard className="card" source={image} />
          <ClothesCard className="card" source={image} />
          <ClothesCard className="card" source={image} />
          <ClothesCard className="card" source={image} />
          <ClothesCard className="card" source={image} />
        </div>
      </div>
    );
  }
}

// function RightColumn(){
//     return(
//         <div>
//             <div className="heading">
//               <h1 id= "men_tops">Mens Tops</h1>
//             </div>
//             <div className="cardHolder">
//               <ClothesCard className="card" source={image}/>
//               <ClothesCard className="card" source={image}/>
//               <ClothesCard className="card" source={image}/>
//               <ClothesCard className="card" source={image}/>
//               <ClothesCard className="card" source={image}/>
//               <ClothesCard className="card" source={image}/>
//             </div>
//             <div className="heading">
//               <h1 id= "men_lower">Mens Bottom</h1>
//             </div>
//             <div className="cardHolder">
//               <ClothesCard className="card" source={image}/>
//               <ClothesCard className="card" source={image}/>
//               <ClothesCard className="card" source={image}/>
//               <ClothesCard className="card" source={image}/>
//               <ClothesCard className="card" source={image}/>
//               <ClothesCard className="card" source={image}/>
//             </div>
//         </div>
//     )
// }

export default RightColumn;
