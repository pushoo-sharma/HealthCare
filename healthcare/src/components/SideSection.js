import React from 'react';
import './sideBar.scss';
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

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      shrink: false
    };
  }
  toggle() {
  console.log("in toggle");
    this.setState({
      shrink: !this.state.shrink
    });
  }
  
	getAnimation = () => {
		if (this.state.shrink == null) {
			return ''
		} else if (!this.state.shrink) {
			return { cls: 'expand', cls2: '', cls3: '', cls4: '' }
		} else {
			return { cls: 'shrink', cls2: 'collapsed', cls3: 'collapsed-child', cls4: 'rotate-btn' }
		}
	}
  render() {
    return (
      <div>

       <Navbar expand="md" expand  >
        <button type="button"><span className="navbar-toggler-icon"  onClick={this.toggle}></span></button> 
          <Collapse isOpen={this.state.shrink} navbar>
            <Nav className="ml-auto " tabs color="faded" light="true">
              <NavItem>
                <NavLink href="/registerPatient" className={"sidebar-menu " + this.getAnimation().cls2} >
                <Media left href="#">
							<Media object src="/Icon_assets/svg/user-plus-solid.svg" alt="sdc" style={{"height" : "20px", "color":"red"}}/>
						</Media>
                Register Patient</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/bookAppointment" className={"sidebar-menu " + this.getAnimation().cls2} >
                <Media left href="#">
							<Media object src="/Icon_assets/svg/user-plus-solid.svg" alt="sdc" style={{"height" : "20px", "color":"red"}}/>
						</Media>
                Book Appointment</NavLink>
              </NavItem>
              {/* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Daily Tasks
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}