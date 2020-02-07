import React from 'react';
import ProjectNav from './ProjectNav';
import NavBar from './NavBar';
import Footer from './Footer';
import {Container} from 'reactstrap';

const CEProject = (props) => 
{
    return(

        <div>
            <NavBar />
            <Container>
            <ProjectNav 
            
            
                descriptionTitle = {props.descriptionTitle} 
                descriptionParagraph = {props.descriptionParagraph}
                descriptionPic = {props.descriptionPic}
                designBody = {props.designBody}
                topDiagram = {props.topDiagram}
                detailedDiagram = {props.detailedDiagram}
                outputBody = {props.outputBody}
                output = {props.output}
                verificationBody = {props.verificationBody}
                verification = {props.verification}
                sourceCode = {props.sourceCode}
                
            />
            </Container>
            <Footer />
        </div>
    )









}

export default CEProject;