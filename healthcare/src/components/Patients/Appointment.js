import {Container , Table, NavItem, Nav, Row, Col, Button, Form, FormGroup, Label, Input, FormText, Alert} from "reactstrap"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React from "react"
export default class Appointment extends React.Component{
    constructor(){
        super()
        //set state by fetching initial value
        this.state={
            upcoming:[{dept:"orth",doctor:"Dr.Doctor",date:"11/11/11",time:"someTime"},
                      {dept:"cardio",doctor:"Dr.NotDoctor",date:"12/12/12",time:"someOtherTime"}]
        }
    }
    handleCancel(e){
        //delete appointment
        console.log("cancel on ",e.target.id)
    }
    render(){
        var listOfAppointments = this.state.upcoming.map((appointment,index)=>
            <tr>
                <td>{index}</td>
                <td>{appointment.dept}</td>
                <td>{appointment.doctor}</td>
                <td>{appointment.date}</td>
                <td>{appointment.time}</td>
                <td><a id={index} onClick={this.handleCancel}>Cancel</a></td>
            </tr>
        )
        var Message=()=>{
            if(false){
                return(<Alert color="danger">Appointment not available at this time. Please try for some other date or time.</Alert>)
            }
            else
                return(<Alert  color="success">Appointment available.</Alert>)
        }
        var Appoint = ()=>{

            return(
            <Container>
                <h5 style={{"text-align":"center"}}>Patient's upcoming appointments</h5><hr/>
                <Link to="appointment/book"><Button style={{"margin":"auto","display":"block"}}>Book Appointment</Button></Link><br/>
                <Table size="sm" bordered >
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>department</th>
                        <th>Doctor</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {listOfAppointments}
                  
                    </tbody>
                </Table>
            </Container>
            )
        }
        var BookApp = () => {
            return(
            <Container>
                <h5 style={{"text-align":"center"}}>Book Appointment</h5>
                <Form>
                    <Label for="name">Patient's Name</Label>
                    <Input style= {{"maxWidth":"50%"}} type="text" name="name" id="name"/>
                    <br/>
                    <Input  style= {{"maxWidth":"50%"}} type="select" name="dept" id="dept">
                        <option>Select Department</option>
                        <option>Surgeon</option>
                        <option>Orthopedic</option>
                        <option>Cardiologist</option>
                        <option>Emergency</option>
                    </Input>
                    <br/>
                    <FormGroup>
                        <Row>
                        <Col>
                            <Label for="date">Date</Label>
                            <Input style= {{"maxWidth":"75%"}} type="date" name="date" id="date"/>
                        </Col>
                        <Col>
                            <Label for="time">Time</Label>
                            <Input style= {{"maxWidth":"75%"}} type="time" name="time" id="time"/>
                        </Col>
                        </Row>
                        <br/>
                        <Message/>
                    </FormGroup>
                    <Link to="/patient/appointment"><Button>Cancel</Button></Link>{"  "}
                    <Button>Confirm</Button>
                </Form>

            </Container>
            )
        }

        return(
            <div>
        
                <Route exact path={"/patient/appointment"} component={Appoint} />
                <Route path={"/patient/appointment/book"} component={BookApp} />
        
      </div>
        )
    }
} 