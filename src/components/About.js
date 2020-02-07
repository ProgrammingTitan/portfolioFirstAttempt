import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import {
    Container, Col,Row,
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import selfie from './../data/paulvalenzuela/linkedin.JPG';
import ContactInfo from './ContactInfo';


const About = (props) => 
{
    return(

        <div style={{backgroundColor:'rgb(43, 43, 43)'}}>
            <NavBar />
            
            <Container fluid>
                <Row >
                    <Col xs="0" lg="3" ></Col>
                    <Col xs="12" lg="6" >
            <Card center>
        <CardImg top width="100%" align="center" src={selfie} alt="Card image cap" />
        <CardBody>
          <CardTitle>Paul Anthony Valenzuela Jr</CardTitle>
          <CardSubtitle>Long Beach, CA</CardSubtitle>
          <CardText>Hello my name is Paul Valenzuela. I am 21 years old and I am currently studying at CSULB to become a computer engineer.</CardText>
          <ContactInfo />
        </CardBody>
      </Card>
      </Col>
      <Col xs="0" lg="3"  ></Col>
      </Row>
      </Container>
      <Footer />
        </div>
    )









}

export default About;