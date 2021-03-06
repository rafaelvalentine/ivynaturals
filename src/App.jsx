import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/CustomNavbar'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import './App.css'

class App extends Component {
  render () {
    return (
      <Router>
        <div id='main'>
          <Navbar />
          <Route exact path='/' component={Home} />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
