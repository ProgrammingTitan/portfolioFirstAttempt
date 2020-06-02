import React from 'react';
import { Container } from 'reactstrap';
import NavBar from './NavBar';
import MiniProject from './MiniProject';
import Welcome from './Welcome';
import Footer from './Footer';

import relayOutput from '../data/relayracegame/output.jpg';
import carOutput from '../data/car/picofcar.jpg';
import websiteOutput from '../data/razteca/avengerspillow.jpg';
import pongOutput from '../data/ponggame/output.jpg';
import carDCOutput from '../data/DCcar/frontpic.jpg';
import socOutput from '../data/soc/TransmitVerification.PNG';

const HomePage = (props) => 
{
    const projects = [
        {
            image : pongOutput,
            title : "Verilog Pong Game",
            description : "This project recreated a 1-Player Pong Game using Verilog programming and an FPGA Board. 12 switches on the board coordinate the color of the paddle. Two buttons on the board function as an up and down button for the paddle.",
            link: "/Projects/PongGame"

        },
        {
            image : socOutput,
            title : "System on a Chip",
            description : "The Chip Specification document explains the Universal Asynchronous Receiver Transmitter (UART) data transmission module and Memory Interface Block (MIB) memory manager module as used in a terminal communication project. The transmit engine and receive engine work together to communicate the SOPC with the terminal. ASCII values are output to the terminal, and sent from the terminal to be interpreted by the TramelBlaze. These engines combined form the UART engine. In addition, A Memory Interface Block gives the TramelBlaze the ability to access Micron Memory from the Nexys A7. ",
            link: "https://www.slideshare.net/PaulValenzuela17/chip-specification"

        },
        {
            image : relayOutput,
            title : "Relay Race Game",
            description : "This project created a Relay Race Game using two buttons and 4 LEDs on a breadboard. The game has two players hold down their button until the green lights indicate the race has started. After this occurs, whoever lets go of the button first wins. The green LED that remains on indicates which player won.",
            link: "/Projects/RelayRaceGame"

        },
        {
            image : carOutput,
            title : "Obstacle Avoiding Car",
            description : "For this project a robotic car was built that had infrared transmitters and sensors that stopped when it began to approach an obstacle. The robot was programmed in C using a 32-Bit ARM Cortex Processor in Keil ISE. A button was assigned to allow the car to go forward or backwards until the device reached an obstacle.",
            link: "/Projects/Car"

        },
        {
            image : websiteOutput,
            title : "E-Commerce Website",
            description : "This project created a website with hyperlinks to amazon products to help promote a small business. This was built using ReactJS and Reactstrap.",
            link: "https://raztecagoods.herokuapp.com/"

        },
        {
            image : carDCOutput,
            title : "DC Motor Car",
            description : "This project had us implement pulse-width modulation to control the speed of DC motors on a car chassis. We also were able to control the direction that the wheels were rotating by choosing which way the current flows through the H-bridge for each wheel.  The PWM alternated between a 0%, 30%, 60%, 80%, and 98% duty cycle. The duty cycle directly correlates with the speed of the DC motors.",
            link: "/Projects/CarDCMotor"

        }




    ]
    
    return(


    

        <div style={{backgroundColor:'rgb(43, 43, 43)'}}>
            <NavBar />
            
            <Welcome align="center" />
            <Container fluid>
            {projects.map((child,index) => {
                return (
            <MiniProject
                    title = {child.title}
                    image = {child.image}
                    description = {child.description}
                    link = {child.link}
            /> 
                );
            })}
            </Container>
            <Footer />
        </div>
    )









}

export default HomePage;