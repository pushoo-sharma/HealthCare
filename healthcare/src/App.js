import React from 'react';
import './App.css';
import {Route} from'react-router-dom';
import HomePage from './components/HomePage';
import PatientRegistration from './components/Patients/AddEditPatient';
import RegisterPatient from './components/Patients/RegisterPatient';
import SignIn from './components/SignIn/SignIn';
import ResultComponent from './components/ResultComponent';

import Nav from './components/Nav';
import {Row,Container,Col} from 'reactstrap';

import Patient from './components/Patients/Patient';
import Doctor from './components/Doctors/Doctor';
import Admin from './components/Admin/Admin';
import StoreKeeper from './components/StoreKeeper/StoreKeeperSideBar';

class App extends React.Component {

  // callNode(){

  //   fetch("http://localhost:1339")
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //       alert(result);
  //       },
       
  //       (error) => {
  //        alert(error);
  //       }
  //     )
  // }
 

  render(){

    return (
   
    <Container fluid>
     <div className="pagebody">
      <Row>
      <Col md="2"></Col>
        <Col> <Nav /></Col>
       </Row>
      <Row style={{"background-color":"#eeeeee"}}>
      
       
       
       
        
  <Route exact path="/" component={HomePage} ></Route>
  <Route exact path="/home" component={HomePage} ></Route>
    {/* <Route exact path="/registerPatient" component={PatientRegistration}></Route> */}
    <Route exact path="/registerPatient" component={RegisterPatient}></Route>
    
    {/* <Route exact path="/bookAppointment" component={BookAppointment}></Route> */}
    {/* <Route exact path="/result/:name" component={ResultComponent}></Route> */}
    <Route exact path="/signin/:id" component={SignIn} ></Route>
    <Route  path="/patient" component={Patient}></Route>
    <Route  path="/doctor" component={Doctor}></Route>
    <Route  path="/admin" component={Admin}></Route>
    <Route  path="/storeKeeper" component={StoreKeeper}></Route>
  
   
   
    </Row></div>
    </Container>
    );
  }
}

export default App;
