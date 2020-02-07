import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

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
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default ContactInfo;