import React from 'react';
import { Nav, NavItem, NavLink, Container, Table, Form, FormGroup, Label, Input, Button} from 'reactstrap';


import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export default class Example extends React.Component {
  render() {
    var VisitNotes = () => (
        <Container>
          <h6 style={{"text-align":"center"}}>Patient Visit Notes</h6>
        
        <Table size="sm" responsive>
        <thead>
          <tr>
            <th>Date</th>
            <th>Doctor</th>
            <th>Details</th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>11/11/11</td>
            <td>Otto</td>
            <td><a href="#">View Notes</a></td>
          </tr>
          
        </tbody>
      </Table>

      <div className="border" style={{"text-align":"center"}}>
          Disease:     <br/>
          Medication:  <br/>
          Precaution   <br/>
      </div>
        </Container>
      );
      
      const Hist = () => (
        <Container style={{ "padding":"30px 50px"}}className="border">
        <h4 style={{"text-align":"center"}}>Patient Medical History</h4>
        <Form>
            <FormGroup>
                <Label><strong>Alergies</strong><br/>
                <Input type="checkbox" id="zink" name="zink"/>{' '}
                Zink<br/>
                <Input type="checkbox" id="paracetamol" name="paracetamol"/>{' '}
                Paracetamol
                </Label>
            </FormGroup>
            <FormGroup>
                <Label><strong>Chronic Medical Problems</strong><br/>
                <Input type="checkbox" id="diabetes" name="diabetes"/>{' '}
                Diabetes<br/>
                <Input type="checkbox" id="thyroid" name="thyroid"/>{' '}
                Thyroid<br/>
                <Input type="checkbox" id="hbp" name="hbp"/>{' '}
                High Blood Pressure
                </Label>
            </FormGroup>
            <FormGroup>
            <Label for="family">Family Medical History</Label>
                <Input type="textarea" style={{"maxWidth":"70%","minHeight":"100px"}}name="family" id="family" />
            </FormGroup>
            <Label for="blood">Select</Label>
          <Input type="select" style={{"maxWidth":"20%"}} name="blood" id="blood">
            <option>A+</option>
            <option>A-</option>
            <option>B+</option>
            <option>B-</option>
            <option>AB+</option>
            <option>AB-</option>
            <option>O+</option>
            <option>O-</option>
          </Input>
          <br/>
            <Button>Submit</Button>
        </Form>
        </Container>
      );
    return (
      <div>
        <Nav>
          <NavItem>
            <Link exact to="/patient/health">Visit Notes</Link>
          </NavItem>
          <NavItem>
            <Link to="/patient/health/history">History</Link>
          </NavItem>
        </Nav>
        <Route exact path={"/patient/health"} component={VisitNotes} />
        <Route path={"/patient/health/history"} component={Hist} />
        
      </div>
    );
  }
}