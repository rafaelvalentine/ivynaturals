import React, { Component } from 'react'
// import { ButtonToolbar, Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// import moduleName from 'react-router-dom'
import './CustomNavbar.css'

// const Tooltipz = (props) => {
//   return (
//     <ButtonToolbar>
//       <Dropdown>
//         <Dropdown.Toggle id='dropdown-custom-1'>

//         </Dropdown.Toggle>
//         <Dropdown.Menu className='super-colors'>
//           <Dropdown.Item eventKey='1'>Action</Dropdown.Item>
//           <Dropdown.Item eventKey='2'>Another action</Dropdown.Item>
//           <Dropdown.Item eventKey='3' active>
//         Active Item
//           </Dropdown.Item>
//           <Dropdown.Divider />
//           <Dropdown.Item eventKey='4'>Separated link</Dropdown.Item>
//         </Dropdown.Menu>
//       </Dropdown>
//     </ButtonToolbar>
//   )
// }
export default class CustomNavbar extends Component {
  constructor (props) {
    super(props)

    this.state = {

    }
    this.openNav = this.openNav.bind(this)
    this.closeNav = this.closeNav.bind(this)
  }

  /* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
  openNav () {
    let x = window.matchMedia('(min-width: 700px)')
    if (x.matches) {
      // If media query matches
      document.getElementById('mySidenav').style.width = '250px'
      document.getElementById('main').style.marginLeft = '250px'
      document.getElementById('main').style.overflow = 'hidden'
      document.body.style.backgroundColor = 'rgba(0,0,0, .5)'
      document.getElementById('mySidenav-list').style.opacity = '1'
      document.getElementById('copyright').style.opacity = '1'
      document.getElementById('mySidenav').style.opacity = '1'
    } else {
      document.getElementById('mySidenav').style.width = '100%'
      document.getElementById('closebtn').style.transform = 'rotate(0deg)'
      document.getElementById('copyright').style.opacity = '1'
      document.getElementById('mySidenav-list').style.opacity = '1'
      // document.getElementById('mySidenav').style.opacity = '1'
      document.getElementById('main').style.overflow = 'hidden'
     
    }

    document.body.style.backgroundColor = 'rgba(0,0,0,0.4)'
  }

  /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
  closeNav () {
    document.getElementById('mySidenav').style.width = '0'
    document.getElementById('main').style.marginLeft = '0'
    document.body.style.backgroundColor = 'white'
    document.getElementById('closebtn').style.transform = 'rotate(90deg)'
    document.getElementById('copyright').style.opacity = '0'
    document.getElementById('main').style.overflow = 'visible'
    // document.getElementById('mySidenav').style.opacity = '0'
    document.getElementById('mySidenav-list').style.opacity = '0'
  }
  render () {
    return (
      <div id='nav-div'>

        <aside id='mySidenav' className='sidenav'>
          <h4><Link onClick={this.closeNav} to='/'>ivy natural</Link></h4>
          <ul id='mySidenav-list'>
            {/* <li><a  href="javascript:void(0)" id='closebtn' className='closebtn' onClick={this.closeNav}>&times;</a></li> */}
            <li><button id='closebtn' className='closebtn' onClick={this.closeNav}>&times;</button></li>
            <li className='link' onClick={this.closeNav}><Link to='/about'>About Us</Link></li>
            <li className='link' onClick={this.closeNav}><Link to='/services'>Market</Link></li>
            <li className='link' onClick={this.closeNav}><Link to='/blog'>Blog</Link></li>
            <li className='link' onClick={this.closeNav}><Link to='/contact'>Contact</Link></li>
          </ul>
          <p id='copyright' className='copyright'><small> &#169;</small> ivy natural { new Date().getUTCFullYear()} All Right Reserved</p>
        </aside>

        {/* Add all page content inside this div if you want the side nav to push page content to the right (not used if you only want the sidenav to sit on top of the page  */}
        <div id='nav-main'>
          {/* Use any element to open the sidenav  */}
          <span className='nav-main-title'> <img src='assets/img/ivy_logo-copy2.png' alt='ivy_logo' /> ivy natural</span>
          <div>
            <ul id='nav-main-list' className='nav-main-list'>
              <li> <img src='assets/img/magnifying-glass.svg' alt='search' /> </li>
              <li> <img src='assets/img/facebook.svg' alt='search' /> </li>
              <li> <img src='assets/img/twitter.svg' alt='search' /> </li>
              <li> <img src='assets/img/google-plus.svg' alt='search' /> </li>
            </ul>

          </div>
          <div className='nav-main-button-div'>
            <span className='nav-main-button' onClick={this.openNav}> <img src='assets/img/menu.svg' alt='navbar-button' /></span>
          </div>
        </div>
      </div>
    )
  }
}
