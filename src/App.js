import './CSS/App.css';
import './NavigBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigbar from './NavigBar';
import { Col, Container, Row } from 'react-bootstrap';
import Sidepanel from './Sidepanel';
import RightColumn from './RightColumn';
import Adminsidepanel from './AdminSidepanel';
import AdminForm  from './AdminSupplierForm';
import Adminview from './AdminViewSuppliers'
import AdminProducts from './AdminProducts';
import AdminRUser from './AdminRegisteredUsers';
import AdminDiscount from './AdminDiscount';
import AdminSales from './SalesReport';

function App() {
  return (
    <div className="App">
      <Navigbar/>
      <Container fluid className="mainContainer">
        <Row>
          <Col className="leftCol" lg = {4} sm= {12}>
            <Adminsidepanel/>
          </Col>
            <Col className = "rightColumn">
              <RightColumn/>
          </Col>
          <Col><AdminSales/></Col>
          
        </Row>
      </Container>
    </div>
  );
}

export default App;