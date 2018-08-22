import React from 'react';
import './patientRegister.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ActionCreator from '../../Actions/ActionCreator'
import { Form, FormGroup, Input, Label, FormText, Button, Col, Row, Container } from 'reactstrap';


import Nav from '../Nav';

class PatientRegistration extends React.Component {
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
alert(diffDays);
      //  alert(new Date(new Date(e.target.value)+"  ,  "+new Date( )).getFullYear());
      var newState = this.state.details;
      newState["age"] = diffDays;
      this.setState({ details: newState });
   //     this.setState({age:diffDays});
        
    }

    handleSubmit(e) {
        alert("sub");
        const data = new FormData(e.target);
        e.preventDefault();
        debugger
        //this.props.actions.actionFormSubmit(this.state.details);
     ///   this.props.history.push("/result/" + this.state.details.name)
    }

    handleChange(e, fieldName) {
        alert(fieldName);
        debugger
        var newState = this.state.details;
        newState[fieldName] = e.target.value;
        this.setState({ details: newState });
        


    }


    render() {

        let bloodG=["A+","B+"];

        let formInput =
        
            <Form id="patientDetails" onSubmit={(event) =>{this.handleSubmit(event)}}> 
       <div className="clearfix" style={{"background-color":"#d8d8d8"}}>Personal Details</div>
                <FormGroup>

                    <Row>
                    <Col ><Label for="firstName">FirstName</Label><Input type="firstName" name="firstName" id="firstName" onChange={(event)=>{this.handleChange(event,'firstName')}}/></Col>
                        <Col ><Label for="middleName">MiddleName</Label><Input type="middleName" name="middleName" id="middleName" onChange={(event)=>{this.handleChange(event,'middleName')}}/></Col>
                        <Col ><Label for="lastName">LastName</Label><Input type="lastName" name="lastName" id="lastName" onChange={(event)=>{this.handleChange(event,'lastName')}} /></Col>
                    </Row>

                </FormGroup>
                <FormGroup>
                    <Row>
                        <Col >
                            <Label for="birthDate">BirthDate</Label>

                            <Input type="date" name="birthDate" id="birthDate"
                             placeholder="password placeholder" onChange={(event)=>{this.calculateAge(event),
                             this.handleChange(event,"birthDate");
                             }}/>
                        </Col>
                        <Col >
                            <Label for="age">Age</Label>

                            <Input type="text" name="age" id="age" 
                            value={this.state.details.age} disabled />
                        </Col>
                    </Row>
                </FormGroup>
                <FormGroup>
                    <Container>
                        <Row>
                            <Col>
                                <Row>
                                    <Label for="gender">Gender</Label>
                                </Row>
                                <Row><Col float-right="true"><Label for="gender">Male</Label></Col><Col style={{"padding-top": 2}}> <Input type="radio" id="gender" /> </Col>
                                <Col className="float-right"> <Label for="gender">Female</Label></Col><Col style={{"padding-top": 2}}> <Input type="radio" id="gender" /></Col>
                                </Row>
                                
                            </Col>
                            <Col>
                                <Label for="bloodGroup">BloodGroup</Label>
                                <Input type="select" name="bloodGroup" id="bloodGroup" onChange={(event)=>{this.handleChange(event,"bloodGroup")}}>
                                {bloodG.map((bb)=>{
                                        return (<option>{bb}</option>);
                                })}
                                    {/* <option></option>
                                    <option>A+</option>
                                    <option>B+</option>
                                    <option>AB+</option>
                                    <option>O+</option>
                                    <option>A-</option>
                                    <option>B-</option>
                                    <option>AB-</option>
                                    <option>O-</option> */}
                                </Input>
                            </Col>
                        </Row>

                    </Container>
                </FormGroup>
               
                <FormGroup>
                    <Row>
                        <Col><Label for="address">Address</Label>
                            <Input type="textarea" name="address" id="address" onChange={(event)=>{this.handleChange(event,"address")}}/></Col>
                        <Col>

                            <Row><Label for="pincode">PinCode</Label>
                                <Input type="text" name="pincode" id="pincode" onChange={(event)=>{this.handleChange(event,"pincode")}}/></Row>
                        </Col>
                    </Row>
                </FormGroup>
                <FormGroup>
                    <Row><Col>
                        <Label for="emailid">Email Id</Label>
                        <Input type="text" name="emailid" id="emailid" onChange={(event)=>{this.handleChange(event,"emailId")}}/></Col>
                        <Col><Label for="contactno">Contact No</Label>
                            <Input type="text" name="contactno" id="contactno" onChange={(event)=>{this.handleChange(event,"contactno")}}/></Col></Row>
                </FormGroup>

                <FormGroup check><Row>
                    <Col>
                        <Row>
                            <Label>Is Chronic</Label></Row>
                        <Row><Col>
                            <Label check>
                                <Input type="checkbox" />{' '}
                                Diabetes
</Label>
                        </Col>
                            <Col><Label check>
                                <Input type="checkbox" />{' '}
                                Diabetes
</Label></Col>
                        </Row>
                    </Col><Col>
                        <Row>
                            <Label>Is Allergic</Label></Row>
                        <Row><Col>
                            <Label check>
                                <Input type="checkbox" />{' '}
                                Zink
</Label>
                        </Col>
                            <Col><Label check>
                                <Input type="checkbox" />{' '}
                                Paracetamol
</Label></Col>
                        </Row>
                    </Col>
                </Row>
                </FormGroup>
                <div className="ln_solid"></div>
                <FormGroup >
               
                    <Row>
                       
                    <Col>
                   
                        {/* <Button color="primary" type="button">Reset</Button> */}
                        <Button color="primary" type="submit" className="float-right" >Register</Button>
                      
                    </Col>
                    <Col>
                        
                    </Col></Row>
                </FormGroup>
               
            </Form>


        return (

            <Container>

                <Row>
                    <Col md="1"></Col>
                   
                    <Col md="6">
                        <div className="page-title">
                      
                           
                        <div className="title_left" style={{"text-align":"center"}} >
                                <h3>Patient Registration</h3>
                            </div>
                            <div className="title_right">
                            </div>
                        </div>
                 



                        {/* <div className="jumbotron bg-info"> */}
                            {formInput}
                     
                    </Col> <Col md="2"></Col><Col md="3"></Col>
                </Row>
            </Container>


        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(ActionCreator, dispatch)
    };
};
export default connect(null, mapDispatchToProps)(PatientRegistration);