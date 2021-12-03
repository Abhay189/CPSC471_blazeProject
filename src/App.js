import './App.css';
import './NavigBar'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigbar from './NavigBar';
import { Accordion, Col, Container, Row } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';

function App() {
  return (
    <div className="App">
      <Navigbar/>
      <Container fluid className="mainContainer">
        <Row>
          <Col className="leftCol">
          <div class="sidenav .d-none">
            <h1>Catagories</h1>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Clothing Type</Accordion.Header>
                <Accordion.Body>
                 
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Size</Accordion.Header>
                <Accordion.Body>
                  
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Price</Accordion.Header>
                <Accordion.Body>
                  
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Brand</Accordion.Header>
                <Accordion.Body>
                  
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          
            {/* <Button >Heyy</Button> */}
          </Col>
          <Col className="rightCol">
            <Button >Heyy</Button>
          </Col>
        </Row>
      </Container>



      <body>
      
      </body>
    </div>
  );
}

export default App;
