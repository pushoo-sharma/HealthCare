import React from 'react';
import { Nav, NavItem, NavLink, Container, Table, Form, FormGroup, Label, Input, Button} from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ActionCreator from '../../Actions/ActionCreator'


import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class PatientHealth extends React.Component {

  constructor(){
    super();
    this.state={
      notes:[]  
    }
    //call api to get info and set it to state
    this.handleNotes = this.handleNotes.bind(this)
  }
  handleNotes(e){
    this.setState({
      Disease:this.props.notes[e.target.id].Disease,
      Medication:this.props.notes[e.target.id].Medication,
      Precaution:this.props.notes[e.target.id].Precaution,
    })
  }
  componentDidMount(){
    this.props.actions.FetchVisitNotes(/*user id*/)
    this.props.actions.FetchMedicalHistory(/*userid*/)
  }
  render() {
    console.log("props",this.props)
    console.log("state",this.state)
    //this.setState({notes:this.props.notes})
    if(this.props.notes)
    {
      var listOfNotes = this.props.notes.map((note,index)=>
        <tr>
          <td>{note.date}</td>
          <td>{note.doctor}</td>
          <td><a id={index} onClick={this.handleNotes}>ViewNotes</a></td>
        </tr>
      )
    }
    else
      var listOfNotes=<tr></tr>
    console.log("listOfNotes",listOfNotes)
    var VisitNotes = () => (
        <Container>
          <h6 style={{"text-align":"center"}}>Patient Visit Notes</h6>
        
        <Table size="sm" responsive>
        <thead>
          <tr>
            <th>Date</th>
            <th>Doctor</th>
            <th>Details</th>
            
          </tr>
        </thead>
        <tbody>
          {listOfNotes}
          
        </tbody>
      </Table>

      <div className="border" style={{"text-align":"center"}}>
          Disease:     {this.state.Disease}<br/>
          Medication:  {this.state.Medication}<br/>
          Precaution   {this.state.Precaution}<br/>
      </div>
        </Container>
      );
      
      const Hist = () => (
        <Container style={{ "padding":"30px 50px"}}className="border">
        <h4 style={{"text-align":"center"}}>Patient Medical History</h4>
        <Form>
            <FormGroup>
                <Label><strong>Alergies</strong><br/>
                <Input type="checkbox" id="zink" name="zink"/>{' '}
                Zink<br/>
                <Input type="checkbox" id="paracetamol" name="paracetamol"/>{' '}
                Paracetamol
                </Label>
            </FormGroup>
            <FormGroup>
                <Label><strong>Chronic Medical Problems</strong><br/>
                <Input type="checkbox" id="diabetes" name="diabetes"/>{' '}
                Diabetes<br/>
                <Input type="checkbox" id="thyroid" name="thyroid"/>{' '}
                Thyroid<br/>
                <Input type="checkbox" id="hbp" name="hbp"/>{' '}
                High Blood Pressure
                </Label>
            </FormGroup>
            <FormGroup>
            <Label for="family">Family Medical History</Label>
                <Input type="textarea" style={{"maxWidth":"70%","minHeight":"100px"}}name="family" id="family" />
            </FormGroup>
            <Label for="blood">Select</Label>
          <Input type="select" style={{"maxWidth":"20%"}} name="blood" id="blood">
            <option>A+</option>
            <option>A-</option>
            <option>B+</option>
            <option>B-</option>
            <option>AB+</option>
            <option>AB-</option>
            <option>O+</option>
            <option>O-</option>
          </Input>
          <br/>
            <Button>Submit</Button>
        </Form>
        </Container>
      );
    return (
      <div>
        <Nav>
          <NavItem>
            <Link exact to="/patient/health">Visit Notes</Link>
          </NavItem>
          <NavItem>
            <Link to="/patient/health/history">History</Link>
          </NavItem>
        </Nav>
        <Route exact path={"/patient/health"} component={VisitNotes} />
        <Route path={"/patient/health/history"} component={Hist} />
        
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  debugger
  console.log(state)
return {
  ...ownProps,
      notes: state.health.notes
      
     // errorMessage : state.signIn
};
};

const mapDispatchToProps = (dispatch) => {
  return {
      actions: bindActionCreators(ActionCreator, dispatch)
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PatientHealth);
