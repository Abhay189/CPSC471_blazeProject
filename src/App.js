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
import AdminInventoryProducts from './AdminInventoryProducts';
import AdminRegisteredUser from './AdminRegisteredUsers';
import AdminDiscount from './AdminDiscount';
import LetsLogin from './TheLogin';
import AdminInventoryAddForm from './AdminInventoryAddForm';
import AdminViewDiscount from './AdminViewDiscount';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      isloggedin: false,
      homeScreenButton: true,
      isloginclicked: false,
      AdminLogginButtonclicked: false,
      isAdmin: false,
      search: "",
      AdminPannelComponent: <AdminInventoryProducts className = "adminSales"/>
    }

    this.loginbuttonhandler = this.loginbuttonhandler.bind(this);
    this.AdminLoginButtonHandler = this.AdminLoginButtonHandler.bind(this);
    this.HomeScreenButtonHandler = this.HomeScreenButtonHandler.bind(this);

    this.viewInventoryButtonHandler = this.viewInventoryButtonHandler.bind(this);
    this.addInventoryButtonHandler = this.addInventoryButtonHandler.bind(this);
    this.addSupplierButtonHandler = this.addSupplierButtonHandler.bind(this);
    this.viewSupplierButtonHandler = this.viewSupplierButtonHandler.bind(this);
    this.registeredUserButtonHandler = this.registeredUserButtonHandler.bind(this);
    this.discountButtonHandler = this.discountButtonHandler.bind(this);
    this.viewdiscountButtonHandler = this.viewdiscountButtonHandler.bind(this);
  }

  render(){
    if(this.state.homeScreenButton){    //this shows the to a normal user who is not logged in 
      return(
        <div className="App">
        <Navigbar 
          loginbuttonhandler = {this.loginbuttonhandler} 
          AdminLoginButtonHandler = {this.AdminLoginButtonHandler} 
          HomeScreenButtonHandler = {this.HomeScreenButtonHandler}
        />
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
                    addInventoryButtonHandler = {this.addInventoryButtonHandler}
                    addSupplierButtonHandler = {this.addSupplierButtonHandler}
                    viewSupplierButtonHandler = {this.viewSupplierButtonHandler}
                    registeredUserButtonHandler = {this.registeredUserButtonHandler}
                    discountButtonHandler = {this.discountButtonHandler}
                    viewdiscountButtonHandler = {this.viewdiscountButtonHandler}
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
//----------------------------------------------------------------------------------------------------------------------------------------
  viewInventoryButtonHandler(){
    this.setState({
    AdminPannelComponent: <AdminInventoryProducts/>
    });
  }
  addInventoryButtonHandler(){
    this.setState({
    AdminPannelComponent: <AdminInventoryAddForm/>
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
  registeredUserButtonHandler(){
    this.setState({
      AdminPannelComponent: <AdminRegisteredUser/>
      });
  }
  discountButtonHandler(){
    this.setState({
      AdminPannelComponent: <AdminDiscount/>
      });
  }
  viewdiscountButtonHandler(){
    this.setState({
      AdminPannelComponent: <AdminViewDiscount/>
      });
  }

//---------------------------------------------------------------------------------------------------------------------------------------- 
  HomeScreenButtonHandler(){
      this.setState({
        isAdmin: false,
        homeScreenButton:true
      });
  }

  AdminLoginButtonHandler(){
      this.setState({
        homeScreenButton: false,
        isAdmin: true
      });
  }
  loginbuttonhandler(){
    if(!this.state.isloginclicked){
      this.setState({
        isloginclicked: true,
      });
    }
  }
//----------------------------------------------------------------------------------------------------------------------------------------
}

export default App;