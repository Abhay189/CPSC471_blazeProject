import './App.css';
import './NavigBar'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigbar from './NavigBar';
import { Col, Container, Row } from 'react-bootstrap';
import Sidepanel from './Sidepanel';

function App() {
  return (
    <div className="App">
      <Navigbar/>
      <Container fluid className="mainContainer">
        <Row>
          <Col className="leftCol" lg = {4} sm= {12}>
            <Sidepanel/>
          </Col>
          <Col className="rightCol">
            <Button >Heyy</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
