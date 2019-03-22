import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
  render () {
    return (
      <div id='footer' className='footer'>
        <div className='footer-top'>
          <div className='top'>
            <img src='assets/img/ivy_logo-copy2.png' alt='ivy_logo' />
            <p className='text'>Ivy Natural</p>
          </div>
          <div className='middle'>
            <ul>
              {/* <li>
                <a href='javascript:void(0)'>
                the skin genome project
                </a>
              </li> */}
              <li>
                <a href='javascript:void(0)'>
                reviews
                </a>
              </li>
              <li>
                <a href='javascript:void(0)'>
                blogs
                </a>
              </li>
              <li>
                <a href='javascript:void(0)'>
                faqs
                </a>
              </li>
              <li>
                <a href='javascript:void(0)' >
                contact
                </a>
              </li>
            </ul>
          </div>
          <div className='bottom' >
            <p>follow us on:</p>
            <ul>
              <li>
                <img src='assets/img/facebook.svg' alt='facebook' />
              </li>
              <li>
                <img src='assets/img/twitter.svg' alt='twitter' />
              </li>
              <li>
                <img src='assets/img/instagram.svg' alt='instagram' />
              </li>
            </ul>
          </div>
        </div>
        <div className='footer-bottom'>
          <ul>
            <li> <small> &#169;</small> ivy natural { new Date().getUTCFullYear()} <span> | </span> </li>
            <li>  Terms and Conditions <span> | </span></li>
            <li>  privacy policy <span>  </span></li>
          </ul>
        </div>
      </div>
    )
  }
}
