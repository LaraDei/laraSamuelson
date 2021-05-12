import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNodeJs, faJsSquare, faReact, faHtml5, faCss3Alt, faAws } from'@fortawesome/free-brands-svg-icons'
import { faDatabase, faServer } from'@fortawesome/free-solid-svg-icons'
import Lara from '../../images/LaraSamuelson.jpeg'
import './About.css'

export default function About(){
    return(
        <div id="about" className="about">
            <h3 className="title">About</h3>
            <hr className="title-line"></hr>
            <div className="about wrapper">
                <div className='first-group'>
                    <div className="intro">
                        <div className="hi"><h3 className="header2 top">Hi, I'm Lara!</h3></div>
                        {/* <div id="triangle-down"></div>     */}
                    </div>
                    <div className="photo-self">
                        <img src={Lara} alt="head shot Lara Samuelson" className="image-self" />
                    </div>
                    <div className='text'>
                        <p>I'm a software engineer based in Los Angeles. 
                            After graduating from college, I became a teacher. While I loved teaching, 
                            I found that I truly lost myself in the planning, researching, and creating 
                            side of my field. As a software developer, I get to focus on my strongest skills.
                        </p>
                        <p>I enjoy working in a team. I believe building a great team takes great communication, 
                            a skill I have used in all my endeavors. I am a customizer and bring an understanding 
                            of people and where they fit best. 
                        </p>
                        <p>In my free time I like to work with my hands. Whether 
                            it is my home, garden, or car, I love fixing and creating.</p>
                    </div>
                </div>

                <div className="second-group">
                    <h3 className="header2" >Services and Skills</h3>
                    <div className="skills-list">
                        <ul>
                            <li>Frontend and Backend Development.</li>
                            <li><FontAwesomeIcon icon={faJsSquare}/> JavaScript-ES6, jQuery, JSX</li>
                            <li>Responsive Design</li>
                            <li><FontAwesomeIcon icon={faReact}/> React, <FontAwesomeIcon icon={faNodeJs}/> Node</li>
                        </ul>
                        <ul>
                            <li><FontAwesomeIcon icon={faHtml5}/> HTML & <FontAwesomeIcon icon={faCss3Alt}/> CSS</li>
                            <li><FontAwesomeIcon icon={faServer}/> API Design, </li>
                            <li><FontAwesomeIcon icon={faDatabase}/> SQL, PostgreSQL</li>
                            <li><FontAwesomeIcon icon={faAws}/> AWS</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}