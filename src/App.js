import './CSS/App.css';
import './NavigBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navigbar from './NavigBar';
import { Col, Container, Row } from 'react-bootstrap';
import Sidepanel from './Sidepanel';
import RightColumn from './RightColumn';
import Adminsidepanel from './AdminSidepanel';
import AdminSupplierAddForm  from './AdminSupplierForm';
import AdminViewSupplier from './AdminViewSuppliers'
import AdminProductsDeletion from './AdminProductsDeletion';
import AdminRegisterUser from './AdminRegisteredUsers';
import AdminDiscount from './AdminDiscount';
import AdminSalesReport from './SalesReport';
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
      search: "",
      AdminPannelComponent: <AdminSalesReport className = "adminSales"/>
    }
    //Binds the methods to this in the class. 
    
    this.loginbuttonhandler = this.loginbuttonhandler.bind(this);
    this.AdminLoginButtonHandler = this.AdminLoginButtonHandler.bind(this);
    this.viewInventoryButtonHandler = this.viewInventoryButtonHandler.bind(this);
    this.addSupplierButtonHandler = this.addSupplierButtonHandler.bind(this);
    this.viewSupplierButtonHandler = this.viewSupplierButtonHandler.bind(this);
    this.registerUserButtonHandler = this.registerUserButtonHandler.bind(this);
    this.discountButtonHandler = this.discountButtonHandler.bind(this);
    this.SalesReportButtonHandler = this.SalesReportButtonHandler.bind(this);

  
  
  
  }

  render(){
    if(!this.state.isloginclicked && !this.state.isAdmin){    //this shows the to a normal user who is not logged in 
      return(
        <div className="App">
        <Navigbar loginbuttonhandler = {this.loginbuttonhandler} AdminLoginButtonHandler = {this.AdminLoginButtonHandler} />
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
            <Navigbar 
              loginbuttonhandler = {this.loginbuttonhandler}/>
            <Container fluid className="mainContainer">
              <Row>
                <Col className="leftCol" lg = {4} sm= {12}>
                  <Adminsidepanel 
                    viewInventoryButtonHandler = {this.viewInventoryButtonHandler}
                    addSupplierButtonHandler = {this.addSupplierButtonHandler}
                    viewSupplierButtonHandler = {this.viewSupplierButtonHandler}
                    registerUserButtonHandler = {this.registerUserButtonHandler}
                    discountButtonHandler = {this.discountButtonHandler}
                    SalesReportButtonHandler = {this.SalesReportButtonHandler}
                  />
                </Col>
                <Col className = "admincol">
                  {this.state.AdminPannelComponent}
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      )
    }
    
  }
  viewInventoryButtonHandler(){
    this.setState({
    AdminPannelComponent: <AdminProductsDeletion/>
    });
  }
  addSupplierButtonHandler(){
    this.setState({
      AdminPannelComponent: <AdminSupplierAddForm/>
      });
  }
  viewSupplierButtonHandler(){
    this.setState({
      AdminPannelComponent: <AdminViewSupplier/>
      });
  }
  registerUserButtonHandler(){
    this.setState({
      AdminPannelComponent: <AdminRegisterUser/>
      });
  }
  discountButtonHandler(){
    this.setState({
      AdminPannelComponent: <AdminDiscount/>
      });
  }
  SalesReportButtonHandler(){
    this.setState({
      AdminPannelComponent: <AdminSalesReport/>
      });
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