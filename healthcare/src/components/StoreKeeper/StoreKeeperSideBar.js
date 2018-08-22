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

export default class StoreKeeperSideBar extends React.Component {
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
                <NavLink 
                  className={classnames({ active: this.state.activeTab === '4' })}
                  onClick={() => { this.toggle('4'); }}
                >Equipments</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <span>DROPDOWN LINK</span>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    DROPDOWN ITEM
                  </DropdownItem>
                  <DropdownItem>
                    DROPDOWN ITEM 2
                  </DropdownItem>
                  <DropdownItem>
                    DROPDOWN ITEM 3
                  </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
             
            </Nav>
        
        </Navbar>
      </div>
    );
  }
}