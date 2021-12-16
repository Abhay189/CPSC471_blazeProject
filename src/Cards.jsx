import "./CSS/Card.css";
import { Card, Button } from "react-bootstrap";

function ClothesCard(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.source} />
      <Card.Body>
        <Card.Title>{props.productname}</Card.Title>
        <Card.Text>{props.productPrice}$</Card.Text>
        <Card.Text>{props.description}</Card.Text>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default ClothesCard;
