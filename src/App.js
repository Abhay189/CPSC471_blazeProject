import './CSS/App.css';
import './NavigBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigbar from './NavigBar';
import { Col, Container, Row } from 'react-bootstrap';
import Sidepanel from './Sidepanel';
import RightColumn from './RightColumn';

function App() {
  return (
    <div className="App">
      <Navigbar/>
      <Container fluid className="mainContainer">
        <Row>
          <Col className="leftCol" lg = {4} sm= {12}>
            <Sidepanel/>
          </Col>
            <Col className = "rightColumn">
              <RightColumn/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;