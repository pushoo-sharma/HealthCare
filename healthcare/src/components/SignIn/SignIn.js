import React from 'react';
import {Container,Row,Col,Form,FormGroup,Input,Button,Label} from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ActionCreator from '../../Actions/ActionCreator';

class SignIn extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            details: {
            }

        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e, fieldName) {
   
        var newState = this.state.details;
        newState[fieldName] = e.target.value;
        this.setState({ details: newState });
    }
    handleSubmit(e) {
        alert("sub");
        const data = new FormData(e.target);
        e.preventDefault();
     
        this.props.actions.SignInRequest(this.state.details);
        debugger
        alert(this.props.successMessage);
     ///   this.props.history.push("/result/" + this.state.details.name)
    }

    render(){
        if((this.props.successMessage) != undefined && (this.props.successMessage) == "success"){
            this.props.history.push("/patient");
        }
        var aa = this.props;
        var id = this.props.match.params.id;
        var fp ;
        debugger
        if(id == 1){
            fp =<div>forrgot password</div>
        }



        let formInput =
        
        <Form id="signIn" onSubmit={(event) =>{this.handleSubmit(event)}}> 
   <div className="clearfix" style={{"background-color":"#d8d8d8"}}>SignIn Details</div>
            <FormGroup>
                <Row>
                <Col ><Label for="username">Username</Label></Col>
                <Col> <Input type="text" name="username" id="username" onChange={(event)=>{this.handleChange(event,'username')}}/></Col>
                </Row>
            </FormGroup>
            <FormGroup>
                <Row>
                <Col ><Label for="password">Password</Label></Col>
                <Col> <Input type="password" name="password" id="password" onChange={(event)=>{this.handleChange(event,'password')}} /></Col>
                </Row>
            </FormGroup>
            <FormGroup >
               
               <Row>
                  
               <Col>
                   <Button color="primary" type="submit" className="float-right" >submit</Button>
                 
               </Col>
               <Col>
                   
               </Col></Row>

           </FormGroup>
            </Form>

        return(
            <Container>

            <Row>
                <Col md="1"></Col>
               
                <Col md="6">
                    <div className="page-title">
                  
                       
                    <div className="title_left" style={{"text-align":"center"}} >
                            <h3>Sign In</h3>
                        </div>
                        <div className="title_right">
                        </div>
                    </div>
                    {formInput}
                    </Col> <Col md="2"></Col><Col md="3"></Col>
                </Row>
            </Container>
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    debugger
	return {
		...ownProps,
        successMessage: state.signIn.response
        
	};
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(ActionCreator, dispatch)
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);