import React from 'react';
import {Jumbotron, Button, Media} from 'reactstrap';

const MiniProject = (props) => 
{

  const imgStyle = {
    maxHeight: 200,
    maxWidth: 120,
    minWidth: 50,
    marginLeft: 5,
    
  }
  
  const divStyle = {
    marginTop: 5,
    border: '2px solid white',
    backgroundColor: 'white',
    borderRadius: '10px',
    minHeight: 220,
    paddingTop: 10,
    
    
    }

  const mediaStyle = {
    textDecoration: 'none'
  }


    return(

        <div style ={divStyle}>
            <Media light  style={mediaStyle}  href={props.link}>
      <Media  left>
        <img src={props.image} style={imgStyle} alt="project output" />
        
      </Media>
      <Media body>
        <Media heading>
          {props.title}
        </Media >
        <div style={{color:'rgb(43, 43, 43)'}}>
            {props.description}
            </div>
      </Media>
    </Media>

        </div>
    )









}

export default MiniProject;