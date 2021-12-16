import React from 'react';
import ClothesCard from "./Cards";
import image from './image.png';
import './CSS/RightColumn.css';

class RightColumn extends React.Component {

  render(){
    return(
      <div>            
          <div className="heading">
            <h1 id= "men_tops">Mens Tops</h1>
          </div>
          <div className="cardHolder">
            <ClothesCard className="card" source={image} key = {1}/>
            <ClothesCard className="card" source={image} key = {2}/>
            <ClothesCard className="card" source={image} key = {3}/>
            <ClothesCard className="card" source={image} key = {4}/>
            <ClothesCard className="card" source={image} key = {5}/>
            <ClothesCard className="card" source={image} key = {6}/>
          </div>
          <div className="heading">
            <h1 id= "men_lower">Mens Bottom</h1>
          </div>
          <div className="cardHolder">
            <ClothesCard className="card" source={image}/>
            <ClothesCard className="card" source={image}/>
            <ClothesCard className="card" source={image}/>
            <ClothesCard className="card" source={image}/>
            <ClothesCard className="card" source={image}/>
            <ClothesCard className="card" source={image}/>
          </div>
      </div>
    )
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


