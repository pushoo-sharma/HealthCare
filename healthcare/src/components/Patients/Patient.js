import React from 'react';
import {Container,Row,Col} from 'reactstrap';

import BookAppointment from './BookAppointment';
import AddEditPatient from './AddEditPatient';
import {Route} from'react-router-dom';

import PatientSideBar from '../Patients/PatientSideBar';
export default class Patient extends React.Component{
    render(){
        return(
            <Container>
             
               <Row>
                <Col md="2"><  PatientSideBar /></Col> 
                <Col>
                
                <Route path={`/patient/bookAppointment`} component={BookAppointment} ></Route> 
                <Route path={`/patient/registerPatient`} component={AddEditPatient} ></Route> 
                {/* <Route path="/patient2" component={Patient21} ></Route> */}
             </Col>
               
                </Row> 
            </Container>
        )
    }
}