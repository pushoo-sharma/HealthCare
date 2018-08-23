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
        const data = new FormData(e.target);
        e.preventDefault();
     
        this.props.actions.SignInRequest(this.state.details);
       
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
        
     
   <div className="clearfix" style={{"background-color":"#d8d8d8", "textAlign" :"center"}} >
      <Form id="signIn" onSubmit={(event) =>{this.handleSubmit(event)}}> 
   <FormGroup>
                <Row>
                <Col xs="4"><Label for="username">Username</Label></Col>
                <Col xs="6"> <Input type="text" name="username" id="username" onChange={(event)=>{this.handleChange(event,'username')}}/></Col>
                </Row>
            </FormGroup>
            <FormGroup>
                <Row>
                <Col xs="4"><Label for="password">Password</Label></Col>
                <Col xs="6"> <Input type="password" name="password" id="password" onChange={(event)=>{this.handleChange(event,'password')}} /></Col>
                </Row>
            </FormGroup>
            <FormGroup >
               
               <Row>
               <Col xs="4"></Col>
               <Col xs="6">
                   <Button color="primary" type="submit" >submit</Button>
                 
               </Col>
            </Row>

           </FormGroup>
           </Form>
   </div>
                    

        return(
            <Container>

            <Row>
                <Col md="3"></Col>
               
                <Col md="5">
                    <div className="page-title">
                  
                       
                    <div className="title_left" style={{"textAlign":"center"}} >
                            <h3>Sign In</h3>
                        </div>
                        <div className="title_right">
                        </div>
                    </div>
                    {formInput}
                    </Col> <Col md="2"></Col><Col md="2"></Col>
                </Row>
                <Row> <Col md="3"></Col><Col md="4"><div style ={{"textAlign" : "center"}}><a href="/">Forgot Password</a></div></Col><Col></Col></Row>
             
                <Row> <Col md="3"></Col><Col md="4"><div style ={{"textAlign" : "center"}}><a href="/registerPatient">New User ? Sign up here</a></div></Col><Col></Col></Row>
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