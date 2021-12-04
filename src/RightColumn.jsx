import ClothesCard from "./Cards";
import image from './image.png';
import './CSS/RightColumn.css';

function RightColumn(){
    return(
        <div>
            
            <div className="heading">
              <h1>Mens Tops</h1>
            </div>

            <div className="cardHolder">
              <ClothesCard className="card" source={image}/>
              <ClothesCard className="card" source={image}/>
              <ClothesCard className="card" source={image}/>
              <ClothesCard className="card" source={image}/>
              <ClothesCard className="card" source={image}/>
              <ClothesCard className="card" source={image}/>
            </div>

            <div className="heading">
              <h1>Mens Lowers</h1>
            </div>

            <div className="cardHolder">
              <ClothesCard className="card" source={image}/>
              <ClothesCard className="card" source={image}/>
              <ClothesCard className="card" source={image}/>
              <ClothesCard className="card" source={image}/>
              <ClothesCard className="card" source={image}/>
              <ClothesCard className="card" source={image}/>
            </div>

            <div className="heading">
              <h1>Mens Casuals</h1>
            </div>

            <div className="cardHolder">
              <ClothesCard className="card" source={image}/>
              <ClothesCard className="card" source={image}/>
              <ClothesCard className="card" source={image}/>
              <ClothesCard className="card" source={image}/>
              <ClothesCard className="card" source={image}/>
              <ClothesCard className="card" source={image}/>
            </div>

            <div className="heading">
              <h1>Mens Formals</h1>
            </div>

            <div className="cardHolder">
              <ClothesCard className="card" source={image}/>
              <ClothesCard className="card" source={image}/>
              <ClothesCard className="card" source={image}/>
              <ClothesCard className="card" source={image}/>
              <ClothesCard className="card" source={image}/>
              <ClothesCard className="card" source={image}/>
            </div>

            <div className="heading">
              <h1>Mens Undergarments</h1>
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

export default RightColumn;