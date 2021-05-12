import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Nav from './components/Nav/Nav'
import Landing from './components/Landing/Landing'
import Work from './components/Work/Work'
import logo from './images/apple-touch-icon.png'
import './App.css';
//<footer><img src={logo} alt='green square with L D' style={{width:"20px", height:"20px"}}/>{' '}Lara Samuelson</footer>
export default class App extends Component {

  renderMainRoutes(){
    return(
      <>
        <Route
            exact
            path='/'
            component={Landing}
        />
        <Route
            path='/about'
            component={About}
        />
        <Route
            path='/contact'
            component={Contact}
        />
        <Route
            path='/work'
            component={Work}
        />
      </>
    )
  }
  render(){
    return (
      <div className="App">
      <Nav/>
      <main className="app-main">
          {this.renderMainRoutes()}
      </main>
      <footer id="footer"></footer>
      </div>
    );
  }
}

