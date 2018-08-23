import {Container , Table, NavItem, Nav, Row, Col, Button, Form, FormGroup, Label, Input, FormText, Alert} from "reactstrap"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React from "react"
export default class Appointment extends React.Component{
    render(){
        
        /* var inst = data.map(x=>{
            <tr>
                <td> x.n</td>
                <td>x.dept</td>
                <td>x.doc</td>
                <td>x.date</td>
                <td>x.time</td>
            </tr>
        }) */
        
        var Equipment = ()=>{

            return(
            <Container>
                <h5 style={{"text-align":"center"}}>Patient's equipments</h5><hr/>
                <Link to="equipments/request"><Button style={{"margin":"auto","display":"block"}}>Request Equipment</Button></Link><br/>
                <Table size="sm" bordered > 
                    <thead>
                    <tr>
                        <th>Request ID</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Date To</th>
                        <th>Date From</th>
                        <th>Returnable</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th ></th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        
                    </tr>
                  
                    </tbody>
                </Table>
            </Container>
            )
        }
        var Request = () => {
            return(
            <Container>
                <h5 style={{"text-align":"center"}}>Request</h5>
                <Form>
                    <Row>
                    <Col><Label for="date">Select Date for Equipment</Label>
                    <Input style={{"maxWidth":"75%"}} type="date" id="date" name="date"/></Col> 
                    <Col><Label for="equipment">Equipment Name</Label><Input style={{"maxWidth":"75%"}}type="select" name="equipment" id="equipment">
                    <option>Select Equipment</option>
                    <option>1</option>
                    </Input></Col>
                    </Row>
                    <br/>
                    <Table size="sm" bordered > 
                    <thead>
                    <tr>
                        <th>Equipment Name</th>
                        <th>Type</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        
                    </tr>
                  
                    </tbody>
                </Table>
                    <Link to="/patient/equipments"><Button>Cancel</Button></Link>{"  "}
                    <Button>Confirm</Button>
                </Form>

            </Container>
            )
        }

        return(
            <div>
        
                <Route exact path={"/patient/equipments"} component={Equipment} />
                <Route path={"/patient/equipments/request"} component={Request} />
        
      </div>
        )
    }
} 