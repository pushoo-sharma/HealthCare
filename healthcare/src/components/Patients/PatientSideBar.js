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

export default class PatientSideBar extends React.Component {
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
  // constructor(props) {
  //   super(props);

  //   this.toggle = this.toggle.bind(this);
  //   this.state = {
  //     shrink: false
  //   };
  // }
  // toggle() {
  // console.log("in toggle");
  //   this.setState({
  //     shrink: !this.state.shrink
  //   });
  // }
  
	// getAnimation = () => {
	// 	if (this.state.shrink == null) {
	// 		return ''
	// 	} else if (!this.state.shrink) {
	// 		return { cls: 'expand', cls2: '', cls3: '', cls4: '' }
	// 	} else {
	// 		return { cls: 'shrink', cls2: 'collapsed', cls3: 'collapsed-child', cls4: 'rotate-btn' }
	// 	}
	// }
  render() {
    return (
      // <div>

      //  <Navbar expand="md" expand  >
      //   <button type="button"><span className="navbar-toggler-icon"  onClick={this.toggle}></span></button> 
      //     <Collapse isOpen={this.state.shrink} navbar>
      //       <Nav className="ml-auto " tabs color="faded" light="true">
      //         <NavItem>
      //           <NavLink href="/registerPatient" className={"sidebar-menu " + this.getAnimation().cls2} >
      //           <Media left href="#">
			// 				<Media object src="/Icon_assets/svg/user-plus-solid.svg" alt="sdc" style={{"height" : "20px", "color":"red"}}/>
			// 			</Media>
      //           Register Patient</NavLink>
      //         </NavItem>
      //         <NavItem>
      //           <NavLink href="/bookAppointment" className={"sidebar-menu " + this.getAnimation().cls2} >
      //           <Media left href="#">
			// 				<Media object src="/Icon_assets/svg/user-plus-solid.svg" alt="sdc" style={{"height" : "20px", "color":"red"}}/>
			// 			</Media>
      //           Book Appointment</NavLink>
      //         </NavItem>
      //         {/* <UncontrolledDropdown nav inNavbar>
      //           <DropdownToggle nav caret>
      //             Daily Tasks
      //           </DropdownToggle>
      //           <DropdownMenu right>
      //             <DropdownItem>
      //               Option 1
      //             </DropdownItem>
      //             <DropdownItem>
      //               Option 2
      //             </DropdownItem>
      //             <DropdownItem divider />
      //             <DropdownItem>
      //               Reset
      //             </DropdownItem>
      //           </DropdownMenu>
      //         </UncontrolledDropdown> */}
      //       </Nav>
      //     </Collapse>
      //   </Navbar>
      // </div>
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
                <NavLink 
                  className={classnames({ active: this.state.activeTab === '2' })}
                  onClick={() => { this.toggle('2'); }}
                >My Health </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/patient/bookAppointment"
                  className={classnames({ active: this.state.activeTab === '3' })}
                  onClick={() => { this.toggle('3'); }}
                >Appointments </NavLink>
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