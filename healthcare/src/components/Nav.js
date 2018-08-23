import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,Media } from 'reactstrap';
  import classnames from 'classnames';
  import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }
  toggle(tab) {

    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
    debugger
  //  this.props.history.push("/home");
  }
  render() {
    return (
      <div>
        <Navbar expand="md" >
          <NavbarBrand href="/"></NavbarBrand>
      
     
            <Nav  tabs>
              <NavItem color="grey">
                <Link to="/home"   className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}>                
                Home</Link>
              </NavItem>
              <NavItem>
                <Link to="/patient/bookAppointment"
                  className={classnames({ active: this.state.activeTab === '2' })}
                  onClick={() => { this.toggle('2'); }}
                >Departments</Link>
              </NavItem>
              <NavItem>
                <Link to="/patient/registerPatient"
                  className={classnames({ active: this.state.activeTab === '3' })}
                  onClick={() => { this.toggle('3'); }}
                >Facilities</Link>
              </NavItem>
              <NavItem>
                <Link to="#"
                  className={classnames({ active: this.state.activeTab === '4' })}
                  onClick={() => { this.toggle('4'); }}
                >Contacts</Link>
              </NavItem>
            </Nav>
        
        </Navbar>
      </div>
    );
  }
}