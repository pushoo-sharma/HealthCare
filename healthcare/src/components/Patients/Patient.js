import React from 'react';
import {Container,Row,Col} from 'reactstrap';

import BookAppointment from './BookAppointment';
import AddEditPatient from './AddEditPatient';
import {Route} from'react-router-dom';
import PatientProfile from "./PatientProfile"
import PatientSideBar from '../Patients/PatientSideBar';
import PatientHealth from "../Patients/PatientHealth";
import PatientEquipments from "../Patients/PatientEquipments";
import PatientBills from "../Patients/PatientBills";
export default class Patient extends React.Component{
    render(){
        return(
            <Container>
             
               <Row>
                <Col md="2"><  PatientSideBar /></Col> 
                <Col style={{"margin":"25px", "padding":"10px","background-color":"#cccccc"}}>
                
                <Route path={`/patient/bookAppointment`} component={BookAppointment} ></Route> 
                <Route path={`/patient/registerPatient`} component={AddEditPatient} ></Route> 
                <Route path={`/patient/profile`} component={PatientProfile} ></Route> 
                <Route path={'/patient/health'} component = {PatientHealth}/>
                <Route path={'/patient/equipments'} component = {PatientEquipments}/>
                <Route path={'/patient/bills'} component = {PatientBills}/>
                {/* <Route path="/patient2" component={Patient21} ></Route> */}
             </Col>
               
                </Row> 
            </Container>
        )
    }
}