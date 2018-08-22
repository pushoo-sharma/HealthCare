import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,Media } from 'reactstrap';
  import classnames from 'classnames';

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
                <NavLink href="/home"   className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}>                
                Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/patient/bookAppointment"
                  className={classnames({ active: this.state.activeTab === '2' })}
                  onClick={() => { this.toggle('2'); }}
                >Departments</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/patient/registerPatient"
                  className={classnames({ active: this.state.activeTab === '3' })}
                  onClick={() => { this.toggle('3'); }}
                >Facilities</NavLink>
              </NavItem>
              <NavItem>
                <NavLink 
                  className={classnames({ active: this.state.activeTab === '4' })}
                  onClick={() => { this.toggle('4'); }}
                >Contacts</NavLink>
              </NavItem>
            </Nav>
        
        </Navbar>
      </div>
    );
  }
}