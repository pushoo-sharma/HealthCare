import React from 'react';
import classnames from 'classnames';
import '../sideBar.scss';
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
  DropdownItem ,Media} from 'reactstrap';

export default class AdminSideBar extends React.Component {
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
  //  this.props.history.push("/home");
  }
  
  render() {
    return (
      
      <div>
        <Navbar expand="md" >
          <NavbarBrand href="/"></NavbarBrand>
      
     
            <Nav  tabs vertical>
              <NavItem color="grey">
                <NavLink href="/home"   className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}>                
                My Profile </NavLink>
              </NavItem>
              
              <NavItem>
                <NavLink href="/patient/bookAppointment"
                  className={classnames({ active: this.state.activeTab === '3' })}
                  onClick={() => { this.toggle('3'); }}
                >Patients </NavLink>
              </NavItem>
              <NavItem>
                <NavLink 
                  className={classnames({ active: this.state.activeTab === '4' })}
                  onClick={() => { this.toggle('4'); }}
                >Doctors</NavLink>
              </NavItem>
              <NavItem>
                <NavLink 
                  className={classnames({ active: this.state.activeTab === '4' })}
                  onClick={() => { this.toggle('4'); }}
                >Appointments</NavLink>
              </NavItem>
              <NavItem>
                <NavLink 
                  className={classnames({ active: this.state.activeTab === '4' })}
                  onClick={() => { this.toggle('4'); }}
                >Equipments</NavLink>
              </NavItem>
              <NavItem>
                <NavLink 
                  className={classnames({ active: this.state.activeTab === '4' })}
                  onClick={() => { this.toggle('4'); }}
                >Bills</NavLink>
              </NavItem>
            </Nav>
        
        </Navbar>
      </div>
    );
  }
}