import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Jumbotron, Container } from 'reactstrap';
import classnames from 'classnames';

const ProjectNav = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
              Description
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            Design
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}
          >
            Output
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '4' })}
            onClick={() => { toggle('4'); }}
          >
            Verification
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '5' })}
            onClick={() => { toggle('5'); }}
          >
            Appendix
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
            <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">{props.descriptionTitle}</h1>
          <p className="lead">{props.descriptionParagraph}</p>
          {props.descriptionPic}
        </Container>
      </Jumbotron>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
            <h2>Design</h2>
            {props.designBody}
        <iframe title="Top Level Block Diagram" src={props.topDiagram} width="100%" height="800px">
        </iframe>
        <iframe title="Detailed Block Diagram" src={props.detailedDiagram} width="100%" height="800px">
        </iframe>
        </TabPane>
        <TabPane tabId="3">
          <Row>
            <Col sm="12">
                <Container>
              <h4>Output</h4>
              {props.outputBody}
              {props.output} 
              </Container>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="4">
          <Row>
            <Col sm="12">
              <h2>Verification</h2> 
              {props.verificationBody}
              {props.verification} 
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="5">
          <Row>
            <Col sm="12">
              <h2>Source Code</h2>
              <iframe title="Source Code" src={props.sourceCode} width="100%" height="800px">
        </iframe>
            
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
}

export default ProjectNav;
