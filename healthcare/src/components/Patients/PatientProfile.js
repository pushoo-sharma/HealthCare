import React from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import * as ActionCreator from '../../Actions/ActionCreator'
class PatientProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            details: {
                age:''
            },


        };
        this.calculateAge=this.calculateAge.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    calculateAge(event){
        var app = new Date(event.target.value);
        var today = new Date();
    //    alert(today);

        var date1 = app;
var date2 = today;
var timeDiff = Math.abs(date2.getTime() - date1.getTime());
var diffDays = Math.floor(timeDiff / (1000 * 3600 * 24*30*12)); 
      //  alert(new Date(new Date(e.target.value)+"  ,  "+new Date( )).getFullYear());
      var newState = this.state.details;
      newState["age"] = diffDays;
      this.setState({ details: newState });
   //     this.setState({age:diffDays});
        
    }

    handleSubmit(e) {
        const data = new FormData(e.target);
        e.preventDefault();
        debugger
        //this.props.actions.actionFormSubmit(this.state.details);
     ///   this.props.history.push("/result/" + this.state.details.name)
    }




    handleChange(e, fieldName) {
        debugger
        var newState = this.state.details;
        newState[fieldName] = e.target.value;
        this.setState({ details: newState });
    }
  render() {
      console.log(this.state)
    return (
        <Container style={{"margin-bottom":"100px"}}>
        <h3>Personal Details</h3><hr/>
      <Form>
        <FormGroup>
          
          <Row>
          <Col xs="2"><Label for="title">Title</Label><Input type="select" name="title" id="title" onChange={(event)=>{this.handleChange(event,"title");
          }}disabled>
            <option>Mr.</option>
            <option>Mrs.</option>
            <option>Ms.</option>
          </Input></Col>
          <Col><Label for="fname">First Name</Label><Input type="text" name="fname" id="fname" placeholder="First" disabled/></Col>
          <Col><Label for="lname">Last Name</Label><Input type="text" name="lname" id="lname" placeholder="Last" disabled /></Col>
          </Row>
        </FormGroup>
        <FormGroup>
            <Row><Col xs="7"><Label for="DOB">BirthDate*</Label>
            <Input type="date" name="DOB" id="DOB"
                placeholder="password placeholder" onChange={(event)=>{this.calculateAge(event),
                this.handleChange(event,"DOB");
            }} disabled/></Col>
            <Col xs="2"><Label for="age">Age</Label>
            <Input type="text" name="age" id="age" value={this.state.details.age} disabled /></Col>
            
            </Row>
        </FormGroup>
        <Row><Col xs="4">
            <Label for="gender">Gender*</Label>
            <Input type="select" name="gender" id="gender" disabled>
            <option>Select Gender</option>
            <option>Male</option>
            <option>Female</option>
          </Input>
            </Col>
            </Row>
        <br/><hr/><br/> 
        <FormGroup>
          <Label for="mobile">Mobile Number</Label>
          <Input type="text" name="mobile" id="mobile" placeholder="Mobile Number" disabled/>
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="email" placeholder="abc@xyz.com" disabled/>
        </FormGroup>
        <FormGroup>
          <Label for="address">Mailing Address</Label>
          <Input type="textarea" name="address" id="address" disabled/>
        </FormGroup>
        <FormGroup>
          <Row>
          <Col><Label for="city">City</Label>
          <Input type="text" name="city" id="city" placeholder="" disabled/></Col>
          <Col>
          <Label for="state">Select</Label>
          <Input type="select" name="state" id="state" disabled>
            <option>Gujarat</option>
            <option>Maharashtra</option>
            <option>Rajasthan</option>
            <option>Madhya Pradesh</option>
            <option>Delhi</option>
          </Input>
          </Col>
          <Col>
          <Label for="pincode">City</Label>
          <Input type="text" name="pincode" id="pincode" placeholder="" disabled/>
            
          </Col>
          </Row>
        </FormGroup>
        
          
       
      </Form>
      <Link to={"/patient/edit"}> <Button >Edit</Button></Link>
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(ActionCreator, dispatch)
    };
};
export default connect(null, mapDispatchToProps)(PatientProfile);