import React, { Component } from 'react';
import './App.css';
import { Form } from 'reactstrap';
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button} from 'reactstrap';
import StickyFooter from 'react-sticky-footer';
import PatientInfo from './PatientInfo';

class Patient extends Component {
	render(){
		return(
       <div className="backC">
        <Navbar style={styles.bdColor} light expand="md">
          <NavbarBrand href="/">Twobirds</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#">Welcome Back, Taylor Lee</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Sign Out</NavLink>
              </NavItem>
            </Nav>
        </Navbar>
        <PatientInfo />
        <StickyFooter
          bottomThreshold={50}
          normalStyles={{
          backgroundColor: "#50E3C2",
          padding: "1rem"
          }}
          stickyStyles={{
          backgroundColor: "rgba(255,255,255,.8)",
          padding: "2rem"
          }}
        >
        <Form onSubmit={this.onSubmit}>
         <Button outline className="submitButton" size="lg">Proceed</Button>
        </Form>
        </StickyFooter>
      </div>
	  );
	}
}

var styles = {
    bdColor: {
      backgroundColor: "#50E3C2"
    }
};


export default Patient;