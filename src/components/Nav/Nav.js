import React, { Component } from 'react'
import {NavLink, Link} from 'react-router-dom'
import logo from '../../images/apple-touch-icon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from'@fortawesome/free-solid-svg-icons'
import './Nav.css';

export default class NavBar extends Component {

    handleNav() {
      var x = document.getElementById("menu");
      if (x.className === "menu") {
          x.className += " responsive";
      } else {
          x.className = "menu";
      }
    }

    render() {
        return(
            <div className="nav-bar">
                <div id='menu' className='menu'>
                    <div className="logo">
                        <Link  to='/'>
                        <img src={logo} alt='green square with L D' style={{width:"40px", height:"40px"}}/>
                        </Link>
                    </div>
                    <NavLink activeClassName="active" to='/contact'>Contact</NavLink>
                    <NavLink activeClassName="active" to='/about'>About</NavLink>
                    <NavLink activeClassName="active" to='/work'>Work</NavLink>
                    <div className='icon'>
                       {!document.getElementsByClassName('menu')
                        ? <button  id='menu-button' onClick={e => this.handleNav()}><FontAwesomeIcon icon={faTimes}/>{' '}</button>
                        : <button  id='menu-button' onClick={e => this.handleNav()}><FontAwesomeIcon icon={faBars}/>{' '}</button>
                        }
                    </div>
                </div>
            </div>
        )
    }
}