import React from  'react';
import { Form, FormGroup, Input, Label, FormText, Button, Col, Row, Container } from 'reactstrap';
export default class UserProfile extends React.Component{
    constructor(props){
        super(props);
        this.state={
            age : ''
        }
    }

    calculateAge(event) {
        var date1 = new Date(event.target.value);;
        var date2 = new Date();;
        var timeDiff = Math.abs(date2.getTime() - date1.getTime());
        var diffDays = Math.floor(timeDiff / (1000 * 3600 * 24 * 30 * 12));
       
        this.setState({age:diffDays});
        this.props.setAge(diffDays);
    }

    render(){
     
        return  (
        <div>
        {/* <Form id="patientDetails" onSubmit={(event) => { this.handleSubmit(event) }}> */}

         
         <div >Personal Details</div>
                <div className="clearfix" style={{ "backgroundColor": "#d8d8d8" }}>

                   
                        <Row> <Col ><Label for="firstName">FirstName</Label><Input type="firstName" name="firstName" id="firstName" onChange={(event) => { this. props.handleChange(event, 'firstName') }} /></Col><Col></Col></Row>
                        <Row><Col><Label for="lastName">LastName</Label><Input type="lastName" name="lastName" id="lastName" onChange={(event) => { this. props.handleChange(event, 'lastName') }} /></Col><Col></Col></Row>
                    
                    {/* <FormGroup>
             <Row>
                    <Col ><Label for="firstName">FirstName</Label><Input type="firstName" name="firstName" id="firstName" onChange={(event)=>{this. props.handleChange(event,'firstName')}}/></Col>
                        <Col ><Label for="middleName">MiddleName</Label><Input type="middleName" name="middleName" id="middleName" onChange={(event)=>{this. props.handleChange(event,'middleName')}}/></Col>
                        <Col ><Label for="lastName">LastName</Label><Input type="lastName" name="lastName" id="lastName" onChange={(event)=>{this. props.handleChange(event,'lastName')}} /></Col>
                    </Row>

                 */}

                   
                        <Row>
                            <Col md="6">
                                <Label for="birthDate">BirthDate</Label>
                                <Input type="date" name="birthDate" id="birthDate"
                                    placeholder="password placeholder" onChange={(event) => {
                                        this.calculateAge(event),
                                            this. props.handleChange(event, "birthDate");
                                    }} />
                            </Col>
                            <Col md="4"><Label for="age">Age</Label><Input type="text" name="age" id="age" value={this.state.age} disabled onBlur={(event) =>{ this.props.handleChange(event,'age')}} /></Col>
                        </Row>
                    

                   
                        <Row> <Col ><Label for="gender">Gender</Label><Input type="select" name="gender" id="gender" onChange={(event) => { this. props.handleChange(event, 'gender') }}>
                            <option>Select Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Trans Gender</option>
                        </Input>
                        </Col><Col></Col></Row>
                    
                </div>
                <br/>
                <div >Contact Details</div>
                <div className="clearfix" style={{ "backgroundColor": "#d8d8d8" }}>

                   
                        <Row> <Col ><Label for="contactno">Contact No</Label>
                            <Input type="text" name="contactno" id="contactno" onChange={(event) => { this. props.handleChange(event, "contactno") }} /></Col><Col></Col></Row>
                    

                   
                        <Row> <Col ><Label for="emailid">Email Id</Label>
                            <Input type="text" name="emailid" id="emailid" onChange={(event) => { this. props.handleChange(event, "emailId") }} /></Col><Col></Col></Row>
                    

                   
                        <Row> <Col ><Label for="address">Address</Label>
                            <Input type="textarea" name="address" id="address" onChange={(event) => { this. props.handleChange(event, "address") }} /></Col><Col></Col></Row>
                    
                   
                        <Row> <Col ><Label for="city">city</Label>
                            <Input type="text" name="city" id="city" onChange={(event) => { this. props.handleChange(event, "city") }} /></Col>
                            <Col>
                                <Col><Label for="state">State</Label>
                                    <Input type="select" name="state" id="state" onChange={(event) => { this. props.handleChange(event, "state") }}>
                                        <option>Select State</option>
                                        <option>Maharashtra</option>
                                        <option>Gujrat</option>
                                        <option>Rajasthan</option>
                                    </Input></Col></Col>
                            <Col><Label for="pincode">PinCode</Label>
                                <Input type="text" name="pincode" id="pincode" onChange={(event) => { this. props.handleChange(event, "pincode") }} /></Col>
                        </Row>
                    
                           {/* </Form> */}
        </div>
        </div>
        );
    }
};