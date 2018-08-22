import React from 'react';
import './patientRegister.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ActionCreator from '../../Actions/ActionCreator'
import { Form, FormGroup, Input, Label, FormText, Button, Col, Row, Container, Table     } from 'reactstrap';


import Nav from '../Nav';

class Bills extends React.Component {
    


    render() {

                         

        return (
            <Container style={{"font-size":"15px", "margin-top":"50px"}}>
                <Row>
                    <Col xs="5">
                        <Row><Col xs="2"><Label for="fromDate">From</Label></Col>
                        <Col xs="10"><Input type="date" name="fromDate" id="fromDate" placeholder=""/></Col>
                        </Row>
                    </Col>

                    <Col xs="5">
                        <Row>
                        <Col xs="2"><Label for="toDate">To</Label></Col>
                        <Col xs="10"><Input type="date" name="toDate" id="toDate" placeholder=""/>  </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Button>Submit</Button>
                    </Col>
                </Row>     
                <Row style={{"margin-top":"30px"}}>
                <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>BillID</th>
            <th>BillDate</th>
            <th>Amount</th>
            <th>Bill Copy</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          
        </tbody>
      </Table>
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
export default connect(null, mapDispatchToProps)(Bills);