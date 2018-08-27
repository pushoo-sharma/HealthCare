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
            }

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
        console.log(this.state)
        e.preventDefault();
        //this.props.actions.actionFormSubmit(this.state.details);
     ///   this.props.history.push("/result/" + this.state.details.name)
    }


    onTodoChange(value){
      this.setState({
           name: value
      });
  }

    handleChange(e) {
        var newState = this.state.details;
        newState[e.target.name] = e.target.value;
        this.setState({ details: newState });
    }
  render() {
    return (
        <Container style={{"margin-bottom":"100px"}}>
        <h3>Personal Details</h3><hr/>
      <Form id="patientDetails" onSubmit={(event) => { this.handleSubmit(event) }}>
        <FormGroup>
          
          <Row>
          <Col xs="2"><Label for="title">Title</Label><Input type="select" name="title" id="title" onChange={this.handleChange}>
            <option>Mr.</option>
            <option>Mrs.</option>
            <option>Ms.</option>
          </Input></Col>
          <Col>
            <Label for="fname">First Name</Label><Input type="text" name="fname" id="fname" value={this.state.  name} onChange={this.handleChange}/>
          </Col>
          <Col>
            <Label for="lname">Last Name</Label><Input type="text" name="lname" id="lname" placeholder="Last" onChange={this.handleChange}/>
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
            <Row><Col xs="7"><Label for="DOB">BirthDate*</Label>
            <Input type="date" name="DOB" id="DOB"
                placeholder="password placeholder" onChange={(event)=>{this.calculateAge(event),
                this.handleChange(event);
            }}/></Col>
            <Col xs="2"><Label for="age">Age</Label>
            <Input type="text" name="age" id="age" value={this.state.details.age} disabled /></Col>
            
            </Row>
        </FormGroup>
        <Row><Col xs="4">
            <Label for="gender">Gender*</Label>
            <Input type="select" name="gender" id="gender" onChange={this.handleChange}>
            <option>Select Gender</option>
            <option>Male</option>
            <option>Female</option>
          </Input>
            </Col>
            </Row>
        <br/><hr/><br/> 
        <FormGroup>
          <Label for="mobile">Mobile Number</Label>
          <Input type="text" name="mobile" id="mobile" placeholder="Mobile Number" onChange={this.handleChange}/>
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="email" placeholder="abc@xyz.com" onChange={this.handleChange}/>
        </FormGroup>
        <FormGroup>
          <Label for="address">Mailing Address</Label>
          <Input type="textarea" name="address" id="address" onChange={this.handleChange}/>
        </FormGroup>
        <FormGroup>
          <Row>
          <Col><Label for="city">City</Label>
          <Input type="text" name="city" id="city" placeholder="" onChange={this.handleChange}/></Col>
          <Col>
          <Label for="state">Select</Label>
          <Input type="select" name="state" id="state" onChange={this.handleChange}>
            <option>Gujarat</option>
            <option>Maharashtra</option>
            <option>Rajasthan</option>
            <option>Madhya Pradesh</option>
            <option>Delhi</option>
          </Input>
          </Col>
          <Col>
          <Label for="pincode">Pincode</Label>
          <Input type="text" name="pincode" id="pincode" placeholder="" onChange={this.handleChange}/>
            
          </Col>
          </Row>
        </FormGroup>
        
          
        
      <Link to="/patient/profile"><Button>Cancel</Button></Link>{"  "}
      
      <Button type="submit">Submit</Button>
      </Form>
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