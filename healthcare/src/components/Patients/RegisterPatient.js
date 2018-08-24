import React from 'react';
import './patientRegister.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ActionCreator from '../../Actions/ActionCreator'
import { Form, FormGroup, Input, Label, FormText, Button, Col, Row, Container } from 'reactstrap';
import LoginDetailsComponent from './LoginDetailsComponent';
import UserProfile from './UserProfile';

class RegisterPatient extends React.Component{
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

    // calculateAge(event) {
    //     var date1 = new Date(event.target.value);;
    //     var date2 = new Date();;
    //     var timeDiff = Math.abs(date2.getTime() - date1.getTime());
    //     var diffDays = Math.floor(timeDiff / (1000 * 3600 * 24 * 30 * 12));
    //     var newState = this.state.details;
    //     newState["age"] = diffDays;
    //     this.setState({age:diffDays});
    //     this.setState({ details: newState });

    // }

    handleSubmit(e) {
        alert("sub");
   
        e.preventDefault();
        var a= this.state.details;
     

        this.props.actions.PatientRegisterRequest(this.state.details);
        var a=this.props;
     
        ///   this.props.history.push("/result/" + this.state.details.name)
    }

    handleReset(e) {
        e.preventDefault();
        document.getElementById("patientDetails").reset();
    }


    handleChange(e, fieldName) {
     
        var newState = this.state.details;
        newState[fieldName] = e.target.value;
        this.setState({ details: newState });
    }

    setAge(age){
        var newState = this.state.details;
        newState['age'] = age;
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
debugger

    return  <Container>

    <Row>
        <Col md="1"></Col>

        <Col md="6">
            <div className="page-title">


                <div className="title_left" style={{ "textAlign": "center" }} >
                    <h3>Patient Registration</h3>
                </div>
                <div className="title_right">
                {this.props.successMessage}
                </div>
            </div>



{error}
            {/* <div className="jumbotron bg-info"> */}
         
           <Form id="patientDetails" onSubmit={(event) => { this.handleSubmit(event) }}>
           <LoginDetailsComponent handleChange = {this.handleChange}/>
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
export default connect(mapStateToProps, mapDispatchToProps)(RegisterPatient);
