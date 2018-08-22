import React from 'react';
import './patientRegister.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ActionCreator from '../../Actions/ActionCreator'
import { Form, FormGroup, Input, Label, FormText, Button, Col, Row, Container } from 'reactstrap';



import Nav from '../Nav';

class BookAppointment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            details: {
                name: '',
                city: ''
            }

        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.actions.actionFormSubmit(this.state.details);
        this.props.history.push("/result/" + this.state.details.name)
    }

    handleChange(e, fieldName) {
        var newState = this.state.details;
        newState[fieldName] = e.target.value;
        this.setState({ details: newState });
        


    }


    render() {
        let formInput =
            <Form>
                <FormGroup>
                <Row>
                    <Col>
                                <Label for="patient">Select Patient</Label>
                                <Input type="select" name="patient" id="patient">
                                    <option></option>
                                    <option>Patient1</option>
                                    <option>Patient2</option>
                                    
                                </Input>
                                </Col>
                                <Col></Col>
                      </Row>      
                </FormGroup>
                <FormGroup>
                    <Row>
                        <Col>
                                <Label for="age">Select Department</Label>
                                <Input type="select" name="department" id="department">
                                    <option></option>
                                    <option>Medicine</option>
                                    <option>Orthopedics</option>
                                    
                                </Input>
                            </Col>
                            <Col></Col>
                            </Row>
                            </FormGroup>
                   
                    <FormGroup>
                    <Row>
                            <Col>
                                <Label for="age">Select Doctor</Label>
                                <Input type="select" name="department" id="department">
                                    <option></option>
                                    <option>Dr1</option>
                                    <option>Dr2</option>
                                    
                                </Input>
                            </Col>
                            <Col></Col>
                    </Row>
                    </FormGroup>
                <FormGroup>
                    <Row>
                        <Col >
                            <Label for="appointmentdt">Appointment Date</Label>

                            <Input type="date" name="appointmentdt" id="appointmentdt" placeholder="password placeholder" />
                        </Col><Col></Col>
                        </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                        <Col >
                        <Label for="appointmenttime">Appointment Time</Label>

<Input type="Time" name="appointmenttime" id="appointmenttime" placeholder="password placeholder" />

                            </Col><Col></Col>
                    </Row>
                </FormGroup>
                
               
                
                <div className="ln_solid"></div>
                <FormGroup >
               
                    <Row>
                       
                    <Col>
                   
                        <Button color="primary" type="submit">Cancel</Button>
                        <Button color="primary" type="submit" className="float-right" >Book</Button>
                      
                    </Col>
                    <Col>
                        
                    </Col></Row>
                </FormGroup>
                {/* <div className="dropdown" id="valueItemDrop">
                                                        <button className="selectbox" id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            Select
                                                        </button>
                                                        <ul className="dropdown-menu" aria-labelledby="dLabel">
                                                            <li className="checkbox form-group">
                                                                <input type="checkbox" id="valuePot" value="Value Pot" name="Value Pot" />
                                                                <label htmlFor="valuePot">Value Pot</label>
                                                            </li>
                                                            <li className="checkbox form-group">
                                                                <input type="checkbox" id="payback" value="Payback" name="Payback" />
                                                                <label htmlFor="payback">Payback</label>
                                                            </li>
                                                            <li className="checkbox form-group">
                                                                <input type="checkbox" id="writeOff" value="Write-off" name="Write-off" />
                                                                <label htmlFor="writeOff">Write-off</label>
                                                            </li>
                                                            <li className="checkbox form-group">
                                                                <input type="checkbox" id="offset" value="Offset" name="Offset" />
                                                                <label htmlFor="offset">Offset</label>
                                                            </li>
                                                            <li className="checkbox form-group">
                                                                <input type="checkbox" id="genValuePot" value="Gen Value Pot" name="Gen Value Pot" />
                                                                <label htmlFor="genValuePot">Gen Value Pot</label>
                                                            </li>
                                                            <li className="checkbox form-group">
                                                                <input type="checkbox" id="mancValuePot" value="Manc Value Pot" name="Manc Value Pot" />
                                                                <label htmlFor="mancValuePot">Manc Value Pot</label>
                                                            </li>
                                                        </ul>
                                                    </div> */}
            </Form>


        return (

            <Container>

                <Row>
                {/* <Col md="2"><  SideSection /></Col> */}
                    <Col md="7">
                        <div className="page-title">
                            <div className="title_left">
                                <h3>Book Appointment</h3>
                            </div>

                            <div className="title_right">
                            </div>
                        </div>



                        <div className="jumbotron bg-info">
                            {formInput}
                        </div>
                    </Col>
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
export default connect(null, mapDispatchToProps)(BookAppointment);