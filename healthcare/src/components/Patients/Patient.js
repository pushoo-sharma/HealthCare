import React from 'react';
import {Container,Row,Col} from 'reactstrap';
import PatientProfileEdit from "./PatientProfileEdit"
import Appointment from './Appointment';
import AddEditPatient from './AddEditPatient';
import {Route} from 'react-router-dom';
import PatientProfile from "./PatientProfile"
import PatientSideBar from './PatientSideBar';
import PatientHealth from "./PatientHealth";
import PatientEquipments from "./PatientEquipments";
import PatientBills from "./PatientBills";
export default class Patient extends React.Component{
    render(){
        return(
            <Container>
             
               <Row>
                <Col md="2"><  PatientSideBar /></Col> 
                <Col style={{"margin":"25px", "padding":"10px","background-color":"#cccccc"}}>
                
                <Route path={`/patient/appointment`} component={Appointment} ></Route> 
                <Route path={`/patient/registerPatient`} component={AddEditPatient} ></Route> 
                <Route path={`/patient/profile`} component={PatientProfile} ></Route> 
                <Route path={`/patient/edit`} component={PatientProfileEdit} ></Route> 
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