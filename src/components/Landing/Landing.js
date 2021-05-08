import React from 'react'
import './Landing.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faTwitter } from'@fortawesome/free-brands-svg-icons'

export default function Landing(){
    return(
        <div className="LandingPage">
            <div className="intro">
                <h2 className="logo">Lara Samuelson</h2>
                <hr></hr>
                <h3>Hi, I'm a web developer based in Los Angeles. 
                     I bring new perspectives and enjoy the experience of learning. 
                </h3>
            </div>
            <div className="contact-links">
                <a href="https://www.linkedin.com/in/lara-dei/" rel='noreferrer' target="_blank"><FontAwesomeIcon icon={faLinkedin}/></a>
                <a href="https://github.com/LaraDei" rel='noreferrer' target="_blank"><FontAwesomeIcon icon={faGithub}/></a>
                <a href="https://twitter.com/LDei11" rel='noreferrer' target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
            </div>
        </div>
  
    )
}