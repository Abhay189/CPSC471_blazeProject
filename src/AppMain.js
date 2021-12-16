import React,{useState} from 'react';
import data from "./ClothData";
import Main from './Main';
import Sidepanel from './Sidepanel';
import RightColumn from './RightColumn';
import { Col, Container, Row } from 'react-bootstrap';
import Basket from './Basket';

// This codes are meant to be inside App.js, but APp.js is not set up as a function
function AppMain(){
    // created this function because I couldn't use const in APP.js
    const [cartItems, setCartItems] = useState([]);
    const {products} = data;
    return (
        <div>
            <Container fluid className="mainContainer">
            <Row>
            <Col className="leftCol"lg = {3} sm= {12}>
            <Sidepanel/>
            </Col>
            <Col className = "rightColumn"lg = {6} sm= {12}>
            <Main>products = {products}</Main>
            </Col>
            <Col className= "rightMostColumn">
            <Basket></Basket>
            </Col>
            </Row>
            </Container>
        </div>
    );
} export default AppMain;

