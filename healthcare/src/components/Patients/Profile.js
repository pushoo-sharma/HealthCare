import React from 'react';
import { Button, Form, FormGroup, Label, Input, Container, FormText } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
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
      console.log("hello")
    return (
        <Container style={{"margin-bottom":"100px"}}>
      <Form>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" name="name" id="name" placeholder="Name" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="Password" />
        </FormGroup>

        <FormGroup>
            <Label for="birthDate">BirthDate</Label>
            <Input type="date" name="birthDate" id="birthDate"
                placeholder="password placeholder" onChange={(event)=>{this.calculateAge(event),
                this.handleChange(event,"birthDate");
            }}/>
            <Label for="age">Age</Label>
            <Input type="text" name="age" id="age" value={this.state.details.age} disabled />
        </FormGroup>

        <FormGroup>
          <Label for="exampleMobile">Mobile Number</Label>
          <Input type="text" name="mobile" id="mobile" placeholder="Mobile Number" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="email" placeholder="abc@xyz.com" />
        </FormGroup>
        <FormGroup tag="fieldset">
          <legend>Gender</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="female" />{' '}
              Female
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="male" />{' '}
              Male
            </Label>
          </FormGroup>
          
        </FormGroup>
        
        <Button>Submit</Button>
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