import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from'@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import emailjs from 'emailjs-com';
import './Contact.css'


export default class Contact extends Component{
    constructor(props){
        super(props)
        this.state = {
            alert: null
        }
    }
    sendEmail=(e) =>{
        e.preventDefault();
        this.setState({ alert: null })
        var templateParams = {
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value
        }
    
        emailjs.send(process.env.REACT_APP_EMAIL_SERVICE_ID, process.env.REACT_APP_EMAIL_TEMPLATE, templateParams, process.env.REACT_APP_USER_ID)
          .then(result => {
              console.log(result.text);
              this.setState({alert: `${result.text}: email sent!` })
          })
          .catch(result => {
            this.setState({alert: result.error })
          })
          e.target.reset()
      }
    render(){
        const { alert } = this.state
        return(
            <div id="contact" className="contact">
                <div className="group1">
                    <h2>Contact Me</h2>
                    <div className="group">
                        <div className="item">
                            <p>I'd love to hear from you. Please feel free to contact or follow me:</p>
                            <ul>
                                <li><Link to="https://www.linkedin.com/in/lara-dei/" target="_blank"><FontAwesomeIcon icon={faLinkedin}/>LinkedIn</Link></li>
                                <li><Link to="https://github.com/LaraDei" target="_blank"><FontAwesomeIcon icon={faGithub}/>GitHub</Link></li>
                                <li> <FontAwesomeIcon icon={faEnvelope}/> lara.samuelson@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='parentForm'>
                    <h4>Send Me an Email</h4>
                    <div role='alert' className="alert">
                        {alert && <p >{alert}</p>}
                    </div>
                    <form className="contact-form" onSubmit={this.sendEmail}>
                            <label htmlFor="name">Name: </label>
                            <input type="text" name="name" placeholder="your name"/>
                            <label htmlFor="email">Email: </label>
                            <input type="email" name="email" placeholder="your email address"/>
                            <label html="message">Message: </label>
                            <textarea name="message"  placeholder="What would you like to say?"/>
                            <button type="submit" value="Send">Send</button>
                    </form>
                </div>
            </div>
        )
    }
}