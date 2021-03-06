import React from 'react';
import '../Patients/patientRegister.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ActionCreator from '../../Actions/ActionCreator'
import { Form, FormGroup, Input, Label, FormText, Button, Col, Row, Container } from 'reactstrap';

import UserProfile from '../Patients/UserProfile';

class RegisterDoctor extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            details: {
                age: ''
            }

        };
        this.setAge = this.setAge.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    setAge(age){
        var newState = this.state.details;
        newState['age'] = age;
        this.setState({ details: newState });
    }

    handleSubmit(e) {
        alert("sub");
        const data = new FormData(e.target);
        e.preventDefault();
        var a= this.state.details;
        debugger

        this.props.actions.DoctorRegisterRequest(this.state.details);
        ///   this.props.history.push("/result/" + this.state.details.name)
    }

    handleReset(e) {
        e.preventDefault();
        document.getElementById("patientDetails").reset();
    }


    handleChange(e, fieldName) {
      //  alert(fieldName+" = "+e.target.value);
      
        var newState = this.state.details;
        newState[fieldName] = e.target.value;
        this.setState({ details: newState });



    }

render(){
    let success,error;
if(typeof(this.props.response)!="undefined" && this.props.response !== null){
    var response = this.props.response;
success = response.successMessage;
error = response.errorMessage;
debugger
}
    return  <Container>
{error}
    <Row>
        <Col md="1"></Col>

        <Col md="6">
            <div className="page-title">


                <div className="title_left" style={{ "text-align": "center" }} >
                    <h3>Doctor Registration</h3>
                </div>
                <div className="title_right">
                </div>
            </div>




            {/* <div className="jumbotron bg-info"> */}
         
           <Form id="patientDetails" onSubmit={(event) => { this.handleSubmit(event) }}>
       
           <UserProfile handleChange = {this.handleChange} setAge={this.setAge}/>
           <div className="ln_solid"></div>
                <FormGroup >

                    <Row>

                        <Col>

                            <Button color="primary" type="button" onClick={this.handleReset}>Reset</Button>
                            <Button color="primary" type="submit" className="float-right" >Register</Button>

                        </Col>
                        <Col>

                        </Col></Row>
                </FormGroup>
           </Form>
        </Col> <Col md="2"></Col><Col md="3"></Col>
    </Row>
</Container>

}
}


const mapStateToProps = (state, ownProps) => {
    debugger
	return {
		...ownProps,
        response: state.registerUser.response
        
       // errorMessage : state.signIn
	};
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(ActionCreator, dispatch)
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(RegisterDoctor);
