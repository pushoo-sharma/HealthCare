import React from  'react';
import { Form, FormGroup, Input, Label, FormText, Button, Col, Row, Container } from 'reactstrap';
export default class LoginDetailsComponent extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return  (
        <div>
        {/* <Form id="patientDetails" onSubmit={(event) => { this.handleSubmit(event) }}> */}

        <div >Login Details</div>
        <div className="clearfix" style={{ "background-color": "#d8d8d8" }}>
            <FormGroup>
                <Row ><Col><Label for="username">Username</Label><Input type="username" name="username" id="username" onChange={(event) => { this.props.handleChange(event, 'username') }} /></Col><Col></Col></Row>
                <Row ><Col><Label for="password">Create Password</Label><Input type="password" name="password" id="password" onChange={(event) => { this.props.handleChange(event, 'password') }} /></Col><Col></Col></Row>
                <Row ><Col><Label for="cpassword">Confirm Password</Label><Input type="cpassword" name="cpassword" id="cpassword" onChange={(event) => { this.props.handleChange(event, 'cpassword') }} /></Col><Col></Col></Row>
            </FormGroup>
        </div>
        {/* </Form> */}
        </div>
        );
    }
};