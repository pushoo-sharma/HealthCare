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
            disabled:true,
            details: {
                age:''
            },


        };
        this.calculateAge=this.calculateAge.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this)
    }
    componentDidMount(){
        //action to fetch data
        this.props.actions.FetchProfileRequest(/*user id?*/);
        
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
        e.preventDefault();
        const data = new FormData(e.target);
        
        this.props.actions.SubmitProfileRequest(data);
     ///   this.props.history.push("/result/" + this.state.details.name)
    }
    toggleEdit(e){
        console.log(this.state.disabled)
        if( this.state.disabled===false )
            this.setState({disabled:true})
        else
            this.setState({disabled:false})
    }



    handleChange(e, fieldName) {
        debugger
        var newState = this.state.details;
        newState[fieldName] = e.target.value;
        this.setState({ details: newState });
    }
  render() {
      console.log(this.props)
    return (
        <Container style={{"margin-bottom":"100px"}}>
        <h3>Personal Details</h3><hr/>
      <Form>
        <FormGroup>
          
          <Row>
          <Col xs="2"><Label for="title">Title</Label><Input type="select" name="title" id="title" onChange={(event)=>{this.handleChange(event,"title");
          }} disabled={this.state.disabled}>
            <option>Mr.</option>
            <option>Mrs.</option>
            <option>Ms.</option>
          </Input></Col>
          <Col><Label for="fname">First Name</Label><Input type="text" name="fname" id="fname" placeholder="First" value={this.props.response?this.props.response.fname:null}disabled={this.state.disabled}/></Col>
          <Col><Label for="lname">Last Name</Label><Input type="text" name="lname" id="lname" placeholder="Last" value={this.props.response?this.props.response.lname:null}disabled={this.state.disabled} /></Col>
          </Row>
        </FormGroup>
        <FormGroup>
            <Row><Col xs="7"><Label for="DOB">BirthDate*</Label>
            <Input type="date" name="DOB" id="DOB"
                placeholder="password placeholder" onChange={(event)=>{this.calculateAge(event),
                this.handleChange(event,"DOB");
            }} disabled={this.state.disabled}/></Col>
            <Col xs="2"><Label for="age">Age</Label>
            <Input type="text" name="age" id="age" value={this.state.details.age} disabled={this.state.disabled} /></Col>
            
            </Row>
        </FormGroup>
        <Row><Col xs="4">
            <Label for="gender">Gender*</Label>
            <Input type="select" name="gender" id="gender" disabled={this.state.disabled}>
            <option>Select Gender</option>
            <option>Male</option>
            <option>Female</option>
          </Input>
            </Col>
            </Row>
        <br/><hr/><br/> 
        <FormGroup>
          <Label for="mobile">Mobile Number</Label>
          <Input type="text" name="mobile" id="mobile" placeholder="Mobile Number" disabled={this.state.disabled}/>
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="email" placeholder="abc@xyz.com" disabled={this.state.disabled}/>
        </FormGroup>
        <FormGroup>
          <Label for="address">Mailing Address</Label>
          <Input type="textarea" name="address" id="address" disabled={this.state.disabled}/>
        </FormGroup>
        <FormGroup>
          <Row>
          <Col><Label for="city">City</Label>
          <Input type="text" name="city" id="city" placeholder="" disabled={this.state.disabled}/></Col>
          <Col>
          <Label for="state">Select</Label>
          <Input type="select" name="state" id="state" disabled={this.state.disabled}>
            <option>Gujarat</option>
            <option>Maharashtra</option>
            <option>Rajasthan</option>
            <option>Madhya Pradesh</option>
            <option>Delhi</option>
          </Input>
          </Col>
          <Col>
          <Label for="pincode">City</Label>
          <Input type="text" name="pincode" id="pincode" placeholder="" disabled={this.state.disabled}/>
            
          </Col>
          </Row>
        </FormGroup>
        
        {this.state.disabled? <Button onClick={this.toggleEdit}>Edit</Button>:<div><Button onClick={this.toggleEdit}>Cancel</Button>
      
      <Button  onClick={this.handleSubmit}>Submit</Button></div>}
          
       
      </Form>
      </Container>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
    debugger
    console.log(state)
	return {
		...ownProps,
        response: state.profile.response
        
       // errorMessage : state.signIn
	};
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(ActionCreator, dispatch)
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(PatientProfile);
