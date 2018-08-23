import React from 'react';
import {Container,Row,Col} from 'reactstrap';

import Appointment from '../Patients/Appointment';
import AddEditPatient from '../Patients/AddEditPatient';
import {Route} from'react-router-dom';

import DoctorSideBar from './DoctorSideBar';
export default class Doctor extends React.Component{
    render(){
        return(
            <Container>
             
               <Row>
                <Col md="2"><  DoctorSideBar /></Col> 
                <Col>
                
                <Route path={`/doctor/Appointment`} component={Appointment} ></Route> 
                <Route path={`/doctor/registerPatient`} component={AddEditPatient} ></Route> 
                {/* <Route path="/patient2" component={Patient21} ></Route> */}
             </Col>
               
                </Row> 
            </Container>
        )
    }
}