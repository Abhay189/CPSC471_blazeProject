import './CSS/Card.css';
import { Card, Button } from "react-bootstrap";

function ClothesCard(props){
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src= {props.source} />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>$19.99</Card.Text>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
            <Button variant="primary">Add to Cart </Button>
        </Card.Body>
        </Card>

    )
}

export default ClothesCard;