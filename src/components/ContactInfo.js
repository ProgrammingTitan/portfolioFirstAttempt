import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import Resume from '../data/paulvalenzuela/Resume.pdf';

const ContactInfo = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Button color="dark" onClick={toggle} style={{ marginBottom: '1rem' }}>Contact Info</Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
            Email: Pavalenzuela428@gmail.com
            <br/><a href={Resume} target="_blank"  rel="noopener noreferrer">Resume</a>
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default ContactInfo;