import React from 'react';
import { Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
const logo = require('../logo.png'); 

const Styles = styled.div`
  .navbar { 
    background-color: ##FFFFFF;
    overflow: hidden;
    position: fixed; /* Set the navbar to fixed position */
    top: 0; /* Position the navbar at the top of the page */
    width: 100%; /* Full width */
   }
  .navbar-brand {
    font-size: 1.4em;
    color: white;
    &:hover { color: white; }
  }
  .form-right {
    position: fixed;
    right: 5%;
  }
`;
function NavigationBar () {
 // const [term, setTerm] = useState("");
  return (
  <Styles>
    <Navbar>
      {/* <Navbar.Brand href="https://www.elmacademicconsultants.com/"><img src="../public/logo.png"></img></Navbar.Brand> */}
      <Navbar.Brand href="https://www.elmacademicconsultants.com/"><img src={logo}/></Navbar.Brand>
      <Form className="form-right">
      <button className="btn btn-success btn-block btn-rounded my-4" onClick={handleLogout}>Logout</button>
          {/* <FormControl type="text" placeholder="Search" className="" />  */}
      </Form>
    </Navbar>
  </Styles>
  )
}

export default NavigationBar
