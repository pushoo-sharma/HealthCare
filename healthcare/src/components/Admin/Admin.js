import React from 'react';
import {Container,Row,Col} from 'reactstrap';

import Appointment from '../Patients/Appointment';
import AddEditPatient from '../Patients/AddEditPatient';
import {Route} from'react-router-dom';

import AdminSideBar from './AdminSideBar';
export default class Admin extends React.Component{
    render(){
        return(
            <Container>
             
               <Row>
                <Col md="2"><  AdminSideBar /></Col> 
                <Col>
                
                <Route path={`/patient/appointment`} component={Appointment} ></Route> 
                <Route path={`/patient/registerPatient`} component={AddEditPatient} ></Route> 
                {/* <Route path="/patient2" component={Patient21} ></Route> */}
             </Col>
               
                </Row> 
            </Container>
        )
    }
}