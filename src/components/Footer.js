import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const Footer = (props) => {
  return (
    <ListGroup  flush>
        <p></p>
      <ListGroupItem color="light" style={{backgroundColor:'rgb(43, 43, 43)'}}>&copy; Paul Anthony Valenzuela Jr 2020</ListGroupItem>
    </ListGroup>
  );

}

export default Footer;