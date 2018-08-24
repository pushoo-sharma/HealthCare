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
        this.calculateAge = this.calculateAge.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    calculateAge(event) {
        var date1 = new Date(event.target.value);;
        var date2 = new Date();;
        var timeDiff = Math.abs(date2.getTime() - date1.getTime());
        var diffDays = Math.floor(timeDiff / (1000 * 3600 * 24 * 30 * 12));
        var newState = this.state.details;
        newState["age"] = diffDays;
        this.setState({age:diffDays});
        this.setState({ details: newState });

    }

    handleSubmit(e) {
        alert("sub");
        const data = new FormData(e.target);
        e.preventDefault();
        var a= this.state.details;
        debugger

        this.props.actions.actionFormSubmit(this.state.details);
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
    return  <Container>

    <Row>
        <Col md="1"></Col>

        <Col md="6">
            <div className="page-title">


                <div className="title_left" style={{ "text-align": "center" }} >
                    <h3>Patient Registration</h3>
                </div>
                <div className="title_right">
                {this.props.successMessage}
                </div>
            </div>




            {/* <div className="jumbotron bg-info"> */}
         
           <Form id="patientDetails" onSubmit={(event) => { this.handleSubmit(event) }}>
           <LoginDetailsComponent handleChange = {this.handleChange}/>
           <UserProfile handleChange = {this.handleChange} calculateAge={this.calculateAge}
           age={this.state.age}
           />
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
        successMessage: state.signIn.response
       // errorMessage : state.signIn
	};
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(ActionCreator, dispatch)
    };
};
export default connect(null, mapDispatchToProps)(RegisterPatient);
