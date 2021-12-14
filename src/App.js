import './CSS/App.css';
import './NavigBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
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
import LetsLogin from './TheLogin';

class App extends React.Component {
  /**
   * 
   * @param {*} props
   * @property isloggedin = to check if a user is successfully logged into the system or not. 
   * @property isloginclicked = to check if a user has clicked the login button or not. 
   * @property AdminLogginButtonclicked = true if the user has clicked on the Admin loggin button in the navigation bar 
   * @property isAdmin = true if the user has successfully logged into the computer as an admin. 
   * @property search = contains the search string typed by the user after search button is clicked. 
   */
  constructor(props){
    super(props);
    //Set the initial state variables 
    this.state = {
      isloggedin: false,
      isloginclicked: false,
      AdminLogginButtonclicked: false,
      isAdmin: false,
      search: ""
    }
    //Binds the methods to this in the class. 
    this.loginbuttonhandler = this.loginbuttonhandler.bind(this);
    this.AdminLoginButtonHandler = this.AdminLoginButtonHandler.bind(this);
  }

  render(){
    if(!this.state.isloginclicked && !this.state.isAdmin){    //this shows the to a normal user who is not logged in 
      return(
        <div className="App">
        {/* <LetsLogin/> */}
        <Navigbar loginbuttonhandler = {this.loginbuttonhandler} AdminLoginButtonHandler = {this.AdminLoginButtonHandler} />
        <Container fluid className="mainContainer">
          <Row>
            <Col className="leftCol" lg = {4} sm= {12}>
              <Sidepanel/>
            </Col>
              <Col className = "rightColumn">
                <RightColumn/>
            </Col>
            {/* <Col><AdminSales/></Col> */}
          </Row>
        </Container>
      </div>
      )
    }
    if(this.state.isloginclicked){    //this shows the login page after the user clicks the login button
      return(
        <div>
           <LetsLogin/>
        </div>
      )
    }
    if(this.state.isAdmin){
      return(
        <div>
          <div className="App">
            {/* <LetsLogin/> */}
            <Navigbar loginbuttonhandler = {this.loginbuttonhandler} />
            <Container fluid className="mainContainer">
              <Row>
                <Col className="leftCol" lg = {4} sm= {12}>
                  <Adminsidepanel/>
                </Col>
                <Col className = "admincol">
                  <AdminSales className = "adminSales"/>
                  <AdminForm  className = "adminSales"/>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      )
    }
    
  }

  AdminLoginButtonHandler(){
    if(!this.state.isAdmin){
      this.setState({
        isAdmin: true
      });
    }
  }
  loginbuttonhandler(){
    if(!this.state.isloginclicked){
      this.setState({
        isloginclicked: true
      });
    }
  }
}

export default App;