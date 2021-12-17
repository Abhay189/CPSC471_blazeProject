import React from 'react';
import { Container, Nav, Navbar, NavDropdown, FormControl, Button, Form } from 'react-bootstrap';
import './CSS/Navbar.css';

class Navigbar extends React.Component {
    render(){
        return(
            <Navbar bg="dark" className="navbar-dark" expand="lg">
            <Container fluid>
                <Navbar.Brand>
                Blaze Collection
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    {/* <Nav.Link href="#">Men</Nav.Link> */}
                    <NavDropdown title="Link" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#men_tops">Tops</NavDropdown.Item>
                    <NavDropdown.Item href="#men_lower">Bottom</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#">
                        Some Action
                    </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outline-success" className="buttonss">Search</Button>
                    <Button variant="outline-success" onClick={this.props.loginbuttonhandler} className="buttonss">login</Button>
                    <Button variant="outline-success" onClick={this.props.AdminLoginButtonHandler} className="buttonss">Admin Login</Button>
                    <Button variant="outline-success" onClick={this.props.HomeScreenButtonHandler} className="buttonss">Home Page</Button>
                </Form>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        )
    }
}



// function Navigbar(){
//     return(
//             <Navbar bg="dark" className="navbar-dark" expand="lg">
//             <Container fluid>
//                 <Navbar.Brand href="#">Blaze Collection</Navbar.Brand>
//                 <Navbar.Toggle aria-controls="navbarScroll" />
//                 <Navbar.Collapse id="navbarScroll">
//                 <Nav
//                     className="me-auto my-2 my-lg-0"
//                     style={{ maxHeight: '100px' }}
//                     navbarScroll
//                 >
//                     <Nav.Link href="#">Men</Nav.Link>
//                     <Nav.Link href="#">Women</Nav.Link>
//                     <NavDropdown title="Link" id="navbarScrollingDropdown">
//                     <NavDropdown.Item href="#men_tops">Tops</NavDropdown.Item>
//                     <NavDropdown.Item href="#men_lower">Lower</NavDropdown.Item>
//                     <NavDropdown.Item href="#men_casual">Casual</NavDropdown.Item>
//                     <NavDropdown.Item href="#men_formal">Formal</NavDropdown.Item>
//                     <NavDropdown.Item href="#men_undergarments">Undergarments</NavDropdown.Item>
//                     <NavDropdown.Divider />
//                     <NavDropdown.Item href="#">
//                         Some Action
//                     </NavDropdown.Item>
//                     </NavDropdown>
//                 </Nav>
//                 <Form className="d-flex">
//                     <FormControl
//                     type="search"
//                     placeholder="Search"
//                     className="me-2"
//                     aria-label="Search"
//                     />
//                     <Button variant="outline-success" className="buttonss">Search</Button>
//                     <Button variant="outline-success" onClick={loginCall} className="buttonss">login</Button>
//                 </Form>
//                 </Navbar.Collapse>
//             </Container>
//             </Navbar>
//         )
// }



export default Navigbar;
