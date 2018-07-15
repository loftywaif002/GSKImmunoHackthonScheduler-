import React, { Component } from 'react';
import './App.css';
import { Form } from 'reactstrap';
import FormCompoent from './Form';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import StickyFooter from 'react-sticky-footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.onSubmit=this.onSubmit.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  onSubmit(event) {
    event.preventDefault();
    console.log("submit clicked");
    this.props.history.push('/patient')
  }
  render() {
    return (
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
        <FormCompoent />
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
         <Button outline className="submitButton" size="lg">Submit</Button>
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

export default App;
