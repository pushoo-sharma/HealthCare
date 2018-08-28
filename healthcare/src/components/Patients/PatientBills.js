import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ActionCreator from '../../Actions/ActionCreator'
import { Form, FormGroup, Input, Label, FormText, Button, Col, Row, Container, Table     } from 'reactstrap';


import Nav from '../Nav';

class Bills extends React.Component {
    

    constructor(){
        super()
        //fetch bills and put them into state
        this.state={
            bills:[{},{}]
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        console.log("hello")
    var data = new FormData(e.target)
    e.preventDefault()

    this.props.actions.FetchBills(data)
    }
    render() {
       // var listOfBills=this.state.bills.map()
        return (
            <Container style={{"font-size":"15px"}}>
                
                
                <Form onSubmit={this.handleSubmit}>
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
                        <Button type="submit">Submit</Button>
                    </Col>
                    </Row>
                </Form>
                     
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
          
        </tbody>
      </Table>
                </Row>
            </Container>

        );
    }
}
const mapStateToProps = (state, ownProps) => {
    debugger
    console.log(state)
	return {
		...ownProps,
        response: state.bills.response
        
       // errorMessage : state.signIn
	};
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(ActionCreator, dispatch)
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Bills);
