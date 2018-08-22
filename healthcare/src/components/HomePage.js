import React from 'react';
import {Button,Row,Col,Container} from 'reactstrap';
export default class HomePage extends React.Component{

    constructor(props){
        super(props);
        this.navigatePage = this.navigatePage.bind(this);
    }

    navigatePage(route){      
        this.props.history.push(""+route);
    }

    render(){

        const buttonStyles = {"borderRadius":"50%", width: 130,height : 130 };
        return(
            <Container>
                <Row style={{"height":"20vh"}}></Row>
                <Row >
                    <Col></Col>
                   
                    <Col> 
                  
                    <Button style={buttonStyles} onClick={()=>this.navigatePage("/patient")}>Patients</Button>
                                 
                   
                    </Col> 
                    <Col>              
                    <Button style={buttonStyles} onClick={()=>this.navigatePage("/doctor")}>Doctor</Button>
                    </Col> 
                    <Col>              
                    <Button style={buttonStyles} onClick={()=>this.navigatePage("/admin")}>Reception Staff</Button>
                    </Col> 
                    <Col>              
                    <Button style={buttonStyles} onClick={()=>this.navigatePage("/storeKeeper")}>Store Keeper</Button>
                    </Col>                     
                    <Col ></Col>
                </Row>
            </Container>



            
        );
    }
}