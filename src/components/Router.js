import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import CEProject from './CEProject';
import '../App.css';
import HomePage from './HomePage';
import About from './About';

import pongBlockDiagram from '../data/ponggame/blockdiagram.pdf';
import pongDetailedDiagram from '../data/ponggame/detaileddiagram.pdf';
import pongSourceCode from '../data/ponggame/sourcecode.pdf';
import pongVerification from '../data/ponggame/verification.pdf';
import pongOutput from '../data/ponggame/controller.jpg';
import pongVideo from '../data/ponggame/video.MOV';

import relayHardwareDiagram from '../data/relayracegame/HardwareDiagrams.pdf';
import relaySourceCode from '../data/relayracegame/SourceCode.pdf';
import relayStatePhotos from '../data/relayracegame/StatePhotos.pdf';
import relayPinsDiagram from '../data/relayracegame/Pins.pdf';
import relayOutput from '../data/relayracegame/output.jpg';
import relayVideo from '../data/relayracegame/video.MOV';


import carSourceCode from '../data/car/code.pdf';
import carOutput from '../data/car/picofcar.jpg';
import carVerification from '../data/car/video.MOV';
import labeledCar from '../data/car/labels.pdf';
import carTop from '../data/car/top.pdf';
import frontCar from '../data/car/frontpic.jpg';

import frontDCCar from '../data/DCcar/frontpic.jpg';
import labeledDCCar from '../data/DCcar/HardwareDesign1.pdf';
import HardwareDesignDC from '../data/DCcar/HardwareDesign2.pdf';
import carDCVerification from '../data/DCcar/video.mov';
import carDCSourceCode from '../data/DCcar/code.pdf';


class Router extends React.Component{



    render(){

        const imgStyle = {
            //maxHeight: 600,
            align: 'center',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            // minWidth: 400
          }

        return(
    <BrowserRouter>
            <Switch>
            <Route path="/" component ={HomePage} exact></Route>
            <Route path="/About" component = {About} exact></Route>
            <Route 
            path= '/Projects/PongGame'
            render={ (match) => 
                <CEProject 
                descriptionTitle = "Verilog Pong Game"
                descriptionParagraph = "This project recreated a 1-Player Pong Game using Verilog programming and an FPGA Board. 12 switches on the board coordinate the color of the paddle. Two buttons on the board function as an up and down button for the paddle. "
                descriptionPic = {<img src= {pongOutput} alt="output" width="50%" style={imgStyle} /> } 
                designBody = {
                    <div>
                        <h3>Design Description</h3>
                        <p>This lab was the final step in programming for VGA output in CECS 361. This project added on to the previous VGA lab by animating objects on the monitor, creating a pong game in the process.  This circuit used pixel specific configuration to create the three walls, a paddle, and one ball in a pong game on the monitor. The paddle and ball were animated using register values to create a pong game on the monitor</p>
                        <p>This lab used several components including some created from previous assignments. For example, it used the AISO module which creates a synchronized reset for all the other modules in the design. In addition, a 25MHz clock wide signal was created, which is the speed at which the pixels will refresh. This clock wide signal was sent to the remaining blocks in the design to make sure that the pixels all refreshed at the same rate. </p>
                        <p>The VGA Connect block was composed of an instantiation of two separate blocks. The inner modules were hSync and vSync. The hSync module incremented pixels along a horizontal line at 25MHz. Once the end of the horizonal line was reached, the vSync block would increment at 25MHz. This ensured that the pixels would move fast enough so that to the human eye it appears as if all the pixels on a screen are on. In reality, the pixels were refreshing at a rate of 25MHz. Both hSync and vSync modules were implemented using 10-Bit counters. Also, this module output a signal video_on that would only be “1” when the pixels on the screen were being refreshed. This signal is used in the Pixel Generator block. </p>
                        <p>The Pixel Generator block took input from the 12 switches on the board, the 1-bit wide input “video_on”, 10-bit “pixel_x” and “pixel_y” signals. This block would output the RGB signals to the board, indicating which colors to use. When video_on was active, pixel_x and pixel_y were the appropriate values, the module would grab RGB input from the board. If video_on was active, but pixel_x and pixel_y were values not planned on being used, the module output 0. It was important to use specific pixel values so that the shapes could be created on the monitor. This lab used pixel configuration to output the shapes in a pong game. This means we created 3 walls, a paddle, and a ball in the center. 4 switches were used to output red, green, and blue. This capability allowed the Nexys A7 to output 212 different color combinations. Although the walls and ball were hardcoded RGB values, the paddle took the 212  color combinations to display its color. </p>
                        <p>Animating the components meant that instead of using hard-coded values to dictate where to add color, registers were required instead. Local variable values were used to display the static components on the screen such as the top, bottom, and right walls. The paddle however, was animated using a register that held its current value, and its next value. A combinational block decided what its next value would be. The objects on the screen animated at the same rate that the monitor refreshed all of its pixels. This rate was represented with the variable “refresh”. At every instance that refresh was active, the module checked to see if either of the debounced button signals were active. If the top button was active, the paddle’s next register value was decreased by 2. If the bottom button was active, the paddle’s next register value was increased by 2.  At the rising clock edge, the current paddle register values refreshed. A multiplexor was also added in case the paddle reached the boundaries of the walls. If the paddle register values did reach the values of the walls, the paddle stayed there and could not go any farther. A combinational block then checked to see if the pixels were within the paddle register values, if they were, the pixels received the switches input from the board which translated to RGB. </p>
                        <p>In order to animate the ball, several other components were required. The ball needed registers for its vertical and horizontal position, as well as its horizontal and vertical velocity. At every instance of refresh, the ball’s next register value was the current register value plus the current velocity value. This was the logic for both the horizontal and vertical dimensions. A combinational block was added to decide what the ball’s next velocity will be. If the ball’s upper border value reached the value of the upper wall, the balls velocity was assigned to go down. If the ball’s lower border value reached the value of the lower wall, the balls vertical velocity was assigned to go up. If the ball’s right border value reached the value of the right wall, the ball’s horizontal velocity was assigned to go left. In addition, if the balls vertical dimensions were within the paddle’s vertical dimensions, and the ball’s left border reached the paddle’s right border, the ball would continue on the same vertical velocity but the horizontal velocity was assigned to go right. This meant the ball would “bounce” off the paddle. If the ball passed the border of the paddle but never touched the paddle, it reset. This is how the objects were animated and operated in “pong game” logic.</p>
                        <p>Finally, all these modules were connected in a top module. The instantiations were created, and the top-level output was hSync, vSync, and rgb. hSync and vSync told the board at what rate to refresh the pixels. RGB told the board where to grab the color signals from and when to grab these signals. The output was demonstrated on a VGA monitor, where 212 different colors could output to the screen, depending on what combination was made with the switches. The elements combined to create an animated pong game on the monitor. The walls and ball were hard-coded values. The ball was white and the walls were purple, but the paddle grabbed input from the board to indicated what color it would display. </p>
                        <h3>Design Diagrams</h3> 
                    </div>
                }
                topDiagram = {pongBlockDiagram}
                detailedDiagram = {pongDetailedDiagram}
                verificationBody = { 
                    <div>
                    <h3>Verification Description</h3>
                    <p>In order to test this lab test fixtures were required. For each module, a specific test fixture was made that would test the capabilities of that module. The display operator was used to displayed the result of each test to the console. </p>
                    <p>The topLevelModule was tested to see if the reset button set all output values to “0”. For the pixelPulse module, the clock-wide frequency was tested to ensure it was 25MHz. The hSync module was tested to ensure that it had an hCount that increment at 25MHz, remained low active when hCount 656-751, had hOn high active when hCount was 0-639, and made sure hCount only ranged from 0-799. The vSync module was tested to ensure that vCount increment at 25MHz and hMax, vSync remained low active when vCount 490-491, had vOn high active when vCount was 0-479, and made sure vCount  only ranged from 0-524. The vgaConnect module was tested so that video_on only remained active when hOn and vOn were active.</p>
                    <p>For the pixelGeneratorModule, pixel_x and pixel_y cycled through every possibility on the screen. When the pixels were in appropriate places to put color, the values of rgb were to see if they were assigned to the switch configuration or ‘0’. If the rgb values were assigned to ‘0’, the console displayed an error and indicated where that error came from. However, my module worked as expected, so no errors were output to the screen. Every time that the rgb values needed to be assigned values to map out the objects, they did so accordingly. </p>
                    <h3>Verification Requirements</h3>
                    <ul>
                        <li>Top Level Module Verification
                              <ol>
                                  <li>Reset shall Bring The VGA Synchronization Circuit to a known state with all outputs inactive. </li>
                              </ol>
                        </li>
                        <li>Pixel Pulse Module Verification
                              <ol>
                                  <li>The VGA Synchronization Logic shall be updated at a 25 MHz rate. </li>
                              </ol>
                        </li>
                        <li>HSync Module Verification
                              <ol>
                                  <li>The Horizontal Scan Count shall be updated at the 25MHz rate. </li>
                                  <li>The Horizontal Count shall range from 0 to 799. </li>
                                  <li>The Horizontal Sync signal shall be LOW ACTIVE and shall be active from Horizontal Scan Count 656 through 751. </li>
                                  <li>The Horizontal Video On signal shall be HIGH ACTIVE and shall be active from Horizontal Scan Count 0 through 639. </li>
                              </ol>
                        </li>
                        <li>VSync Module Verification
                              <ol>
                                  <li>The Vertical Scan Count shall be updated at the completion of Horizontal Scan. </li>
                                  <li>The Vertical Scan Count shall range from 0 to 524. </li>
                                  <li>The Vertical Sync signal shall be LOW ACTIVE and shall be active from Vertical Scan Count 490 through 491. </li>
                                  <li>The Vertical Video On signal shall be HIGH ACTIVE and shall be active from Vertical Scan Count 0 through 479. </li>
                              </ol>
                        </li>
                        <li>VGA vgaConnect Module Verification
                              <ol>
                                  <li>The Video On signal shall be HIGH ACTIVE when Horizontal Video On and Vertical Video On Are Active at the same time. </li>
                              </ol>
                        </li>
                    </ul>
                    <h3>Verification Code and Simulation</h3>
                    </div>
                }
                outputBody = {
                    <div>
                        <p>The output worked as expected, with the circuit behaving as a 1-player Pong game. The user used buttons on the board to move the left paddle and bounce the ball off the walls. If the ball got past the paddle, the ball reset. </p>
                    </div>
                }
                output =  {<video  width="40%"  muted style={imgStyle} src={pongVideo}controls>
                {/* <source src={carVerification} type="video/MOV"/> */}
              Your browser does not support the video tag.
              </video>}
                verification = {<iframe title="Verification" src = {pongVerification} width="100%" height="800px">
                </iframe>}
                sourceCode = {pongSourceCode}
                
                
                />
                }
            ></Route>
            <Route 
            path= '/Projects/RelayRaceGame'
            render={ (match) => 
                <CEProject 
                descriptionTitle = "Relay Race Game"
                descriptionParagraph = "This project created a Relay Race Game using two buttons and 8 LEDs on a breadboard.  The game has two players hold down their button until the green lights indicate the race has started. After this occurs, whoever lets go of the button first wins. The green LED that remains on indicates which player won."
                descriptionPic = {<img src= {relayOutput} alt="output" width="50%" style={imgStyle}/> } 
                designBody = {
                    <div>
                        <h3>Design Description</h3>
                        <p>For this project, a state machine was implemented using C programming to activate certain LEDS at certain times. The machine was supposed to operate as a relay race game, giving 2-players time to get ready. Initially, two rows of yellow LEDs will light up, then the two green LEDs will illuminate. Once the green LEDs are on, whoever lets go of their corresponding button first wins. The winner is indicated by which side still has the green LED on.</p>
                        <h3>Pin Layout and Design Diagrams</h3> 
                    </div>
                }
                topDiagram = {relayPinsDiagram}
                detailedDiagram = {relayHardwareDiagram}
                verificationBody = { 
                    <div>
                    <h3>Verification Description</h3>
                    <p>In order to verify the machine worked properly, each state was tested. Below is a photograph of each state and a caption indicating which state the machine is in. </p>
                   </div>
                }
                outputBody = {
                    <div>
                        <p>The video demonstrates the capabilities of the circuit. The lights ready up, and the winner is identified by who lets go of their button first. </p>
                    </div>
                }
                output = {<video width="40%"  muted style={imgStyle} src={relayVideo}controls>
                {/* <source src={carVerification} type="video/MOV"/> */}
              Your browser does not support the video tag.
              </video>}
                verification = {<iframe title="Verification" src = {relayStatePhotos} width="100%" height="800px">
                </iframe> }
                sourceCode = {relaySourceCode}
                
                
                />
                }
            ></Route>
            <Route 
            path= '/Projects/Car'
            render={ (match) => 
                <CEProject 
                descriptionTitle = "Obstacle Avoiding Car"
                descriptionParagraph = "For this project a robotic car was built that had infrared transmitters and sensors that stopped when it began to approach an obstacle. The robot was programmed in C using a 32-Bit ARM Cortex Processor in Keil ISE. A button was assigned to allow the car to go forward or backwards until the device reached an obstacle."
                descriptionPic = {<img src= {frontCar} alt="output" width="50%" style={imgStyle}/> } 
                designBody = {
                    <div>
                        <h3>Design Description</h3>
                       <p>This project was built in C programming using a state machine approach. Each state corresponded to the direction which the motors were turning the wheels. The requirements of the car was that it would be able to go forward for 36 inches and reverse for 3. When the car was going forward however, if it began to approach an obstacle, it would hault. The machine was able to tell if it would approach an obstacle using IR sensors. </p>
                        <h3>Pin Layout and Design Diagrams</h3> 
                    </div>
                }
                topDiagram = {carTop}
                detailedDiagram = {labeledCar}
                verificationBody = { 
                    <div>
                    <h3>Car in Action</h3>
                    <p> As the video demonstrates, the car goes forward until it approaches an obstacle. When button 2 is pressed, it reverses 3 inches and resets so that it can go forward again. </p>
                   </div>
                }
                outputBody = {
                    <div>
                        <p>The final product </p>
                    </div>
                }
                output = {<img src= {carOutput} alt="output" width="50%" style={imgStyle}/> }
                verification = 
                {<video  width="40%"  muted style={imgStyle} src={carVerification}controls>
                {/* <source src={carVerification} type="video/MOV"/> */}
              Your browser does not support the video tag.
              </video>}
                sourceCode = {carSourceCode}
                
                
                />
                }
            ></Route>
            <Route 
            path= '/Projects/CarDCMotor'
            render={ (match) => 
                <CEProject 
                descriptionTitle = "DC Motor Car"
                descriptionParagraph = "This project had us implement pulse-width modulation to control the speed of DC motors on a car chassis. We also were able to control the direction that the wheels were rotating by choosing which way the current flows through the H-bridge for each wheel. The PWM alternated between a 0%, 30%, 60%, 80%, and 98% duty cycle. The duty cycle directly correlates with the speed of the DC motors. "
                descriptionPic = {<img src= {frontDCCar} alt="output" width="50%" style={imgStyle}/> } 
                designBody = {
                    <div>
                        <h3>Design Description</h3>
                       <p>In order to regulate the duty cycle, we used a global variable as well as an interrupt
handler. The global variable duty was initialized to 300 which indicates a 30% duty cycle due to
the frequency. The interrupt handler worked for PF4, which was switch 1. Every time that the
interrupt handler noticed a falling edge detection on PF4, it incremented duty to the next
indicated value. In our case, duty cycled through 0, 300, 600, 800, and 980. These values
translated to 0%, 30%, 60%, 80%, and 98% respectively. The way the duty cycle worked, was
that every time the PWM timer was in the high section, current was sent to the DC motor. The
amount of time that the DC motor received current in the cycle directly translated to how fast the
motor was going. Also, when the duty cycle was 0%, the LEDs on the TM4C displayed red,
which indicated that the motors were not spinning the wheels.
We also had to have control over the direction of the motors. To control the direction of
the motors, a state machine had to be implemented. The state machine held 3 states: stop,
forward, reverse. Each state held 4 32_uint variables: pb6, pb7, direction, and light. The pb6
variable told the PWM how to behave when the timer reached CMPA. For instance, if we want
to go reverse, the motor needs to have the opposite behavior, so the low and high duty cycle must
be switched. In order to do that, we held the behavior switches in variables known as pb6 and
pb7. For the direction variable, no PWM was necessary so the variable switched between high
and low for PA4 and PA3, depending on which state it was in. Finally, the light variable
indicated which state the machine was in. If the car was stopped, the LEDs appeared red. If the
car was moving forward, the LEDs appeared green. If the car was moving in reverse, the LEDs
appeared blue. 
</p>
                        <h3>Software Design</h3> 
                        <h4>void PWM0A_Init(uint16_t period, uint16_t duty):</h4>
<p>Initializes PWM0 with parameters period and duty. Assigns PB6 as the output pin. Sets
the behavior of PB6 depending on the count.</p>
<h4>void PWM0A_Duty(uint16_t duty, uint16_t output);</h4>
<p>Sets new duty cycle for PB6 in PWM0.</p>
<h4>void PWM0B_Init(uint16_t period, uint16_t duty);</h4>
<p>Initializes PWM0 with parameters period and duty. Assigns PB7 as the output pin. Sets
the behavior of PB7m depending on the count.</p>
<h4>void PWM0B_Duty(uint16_t duty, uint32_t output);</h4>
<p>Sets new duty cycle for PB7 in PWM0.</p>
<h4>struct State 
uint32_t pb6;
uint32_t pb7;
uint32_t direction;
uint32_t light;
;</h4>
<p>State machine implemented as a C programming struct. Holds variables for the behavior
of PB6, PB7, the output for pins PA4 PA3, and the light indicator for each state.</p>
<h4>void Motor_Init(void)</h4>
<p>Initializes the DC motors.</p>
<h4>void Switch_Init(void)</h4>
<p>Initializes the PF4 and PF0 switches to cause interrupt everytime they are pressed. Also
initializes LEDs PF3 PF2 PF1 which will be used for the current state indicator light.</p>
<h4>void GPIOPortF_Handler(void)</h4>
<p>This method is called every time PF4 or PF0 are pressed. It will either change the speed
or direction of the motor.</p>
<h4>int main(void)</h4>
<p>Where all the components are initialized. Including super-loop where we wait for
interrupts to occur.</p>
                    </div>
                }
                topDiagram = {labeledDCCar}
                detailedDiagram = {HardwareDesignDC}
                verificationBody = { 
                    <div>
                    <h3>Car in Action</h3>
                    <p> The hardest part for our group was understanding how hardware pulse width modulation
worked. After we were able to understand the concept, it all went well from there. We have
implemented state machines in previous projects. DC motors were a new tool to learn to use in
software implementation, but it was the least convoluted out of all the other motors we have
worked with. In the end, each component worked as it needed to. Switch 1 cycled through speeds
and switch 2 changed the direction of the car. Overall, it was a challenging yet rewarding project
and it helped our group to better grasp the ideas behind the project. </p>
                   </div>
                }
                outputBody = {
                    <div>
                        <p>The major concepts that needed to be understood in order to implement this project were
PWM and how a state machine worked. In addition, it was helpful to understand how H-bridges
worked with a DC motor. H-bridges are circuits that allow current to be passed through a load in
either direction. By changing the direction that current passes through the H-bridge, we can
change the direction that the motor spins the wheel. The PWM concepts help to understand how
to speed up and slow down the DC motors. The state machine was essential in understanding
which direction the car was supposed to go in. </p>
                    </div>
                }
                output = {<img src= {frontDCCar} alt="output" width="50%" style={imgStyle}/> }
                verification = 
                {<video  width="40%"  muted style={imgStyle} src={carDCVerification}controls>
                {/* <source src={carVerification} type="video/MOV"/> */}
              Your browser does not support the video tag.
              </video>}
                sourceCode = {carDCSourceCode}
                
                
                />
                }
            ></Route>
            </Switch>

    
    </BrowserRouter>
        );
    }
}

export default Router; 