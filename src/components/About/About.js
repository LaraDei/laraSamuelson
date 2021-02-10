import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNodeJs, faJsSquare, faReact, faHtml5, faCss3Alt, faAws } from'@fortawesome/free-brands-svg-icons'
import { faDatabase, faServer } from'@fortawesome/free-solid-svg-icons'
import Lara from '../../images/lara-samuelson.jpg'
import './About.css'

export default function About(){
    return(
        <div id="about" className="about">
            <div className='first-group'>
                <h2>About Me</h2>
                <div className="bio">
                    <div className='text'>
                        <p>My name is Lara Samuelson, a software engineer based in Los Angeles. 
                            After graduating from college, I became a teacher. While I loved teaching, 
                            I found that I truly lost myself in the planning, researching, and creating 
                            side of my field. As a software developer, I get to focus on my strongest skills.
                        </p>
                        <p>In my free time I like to work with my hands. Whether 
                            it is my home, garden, or car, I love fixing and creating.</p>
                    </div>
                <div className="photo-self">
                    <img src={Lara} alt="head shot Lara Samuelson" class="image-self" />
                </div>
                </div>
            </div>
            <h2>Services and Skills</h2>
                <div className="second-group">
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
    )
}