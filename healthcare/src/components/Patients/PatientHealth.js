import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Container, Nav, NavItem, NavLink} from "reactstrap";
export default class PatientHealth extends React.Component{
    
    
    render(){
        const Home = () => (
            <div>
              <h2>Home</h2>
            </div>
          );
          
          const About = () => (
            <div>
              <h2>About</h2>
            </div>
          );
        
        return(
            <Container>
                <Nav>
          <NavItem>
            <NavLink href="/patient/health/">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink ><Link to="/patient/health/about">Home</Link></NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Another Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">Disabled Link</NavLink>
          </NavItem>
        </Nav>
              <Router>
                <div>
                <ul>
                    <li>
                    <Link to="/patient/health/">Home</Link>
                    </li>
                    <li>
                    <Link to="/patient/health/about">About</Link>
                    </li>
                    
                </ul>

                <hr />

                <Route exact path="/patient/health/" component={Home} />
                <Route path="/patient/health/about" component={About} />
                </div>
              </Router>
            </Container>
        );
    }

}