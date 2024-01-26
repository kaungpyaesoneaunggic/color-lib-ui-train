import { faDribbble, faFacebook, faInstagram, faLinkedin, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { accentCyan, accentGrey, lightText, primaryColor } from './constants/constant'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import './Footer.css'


export default function Footer() {
  return (
    <footer>
<div className="site-footer">
<div className="footer-dots"></div> 
<div className="container">
<div className="row">
<div className="col-lg-4">
<div className="widget">
<h3 style={{ color:'black', fontSize:'18px' }}>About Launch<span className="text-primary">.</span> </h3>
<p style={{fontSize:'14px' }}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
</div> 
<div className="widget">
<h3 style={{ color:'black', fontSize:'18px' }}>Connect</h3>
<ul className="list-unstyled" style={{ display:'flex', flexDirection:'row'}}>
<li  className="social-icons"><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
<li  className="social-icons"><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
<li  className="social-icons"><a href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
<li  className="social-icons"><a href="#"><FontAwesomeIcon icon={faPinterest} /></a></li>
<li  className="social-icons"><a href="#"><FontAwesomeIcon icon={faLinkedin} /></a></li>
<li  className="social-icons"><a href="#"><FontAwesomeIcon icon={faDribbble}/></a></li>
</ul>
</div> 
</div> 
<div className="col-lg-2 ml-auto">
<div className="widget">
<h3 style={{ color:'black', fontSize:'18px' }}>Projects</h3>
<ul className="list-unstyled float-left links">
<li className='link-item'><a style={{ textDecoration:'none',color:lightText}} href="#">La Lega Stadium</a></li>
<li className='link-item'><a href="#">France Building</a></li>
<li className='link-item'><a href="#">22 New Homes</a></li>
<li className='link-item'><a href="#">Manage Center</a></li>
<li className='link-item'><a href="#">Sports Hall</a></li>
</ul>
</div> 
</div> 
<div className="col-lg-2">
<div className="widget">
<h3 style={{ color:'black', fontSize:'18px' }}>Services</h3>
<ul className="list-unstyled float-left links">
<li className='link-item'><a href="#">Architect</a></li>
<li className='link-item'><a href="#">Interior Design</a></li>
<li className='link-item'><a href="#">Landscape Design</a></li>
<li className='link-item'><a href="#">Consultancy</a></li>
</ul>
</div> 
</div> 
<div className="col-lg-3">
<div className="widget">
<h3 style={{ color:'black', fontSize:'18px' }}>Contact</h3>
<address>43 Raymouth Rd. Baltemoer, London 3910</address>
<ul className="list-unstyled links mb-4">
<li><a style={{ textDecoration:'none',color:lightText}} >+1(123)-456-7890</a></li>
<li><a style={{ textDecoration:'none',color:lightText}}>+1(123)-456-7890</a></li>
<li><a style={{ textDecoration:'none',color:lightText}} href="mailto:info@mydomain.com">info@mydomain.com</a></li>
</ul>
</div> 
</div> 
</div> 
<div className="row mt-5">
<div className="col-12 text-center">
<p>

Copyright &copy; 2024 All rights reserved | This template is made with <FontAwesomeIcon icon={faHeart} color='red'/> by <a href="https://colorlib.com" target="_blank" style={{ textDecoration:'none',color:primaryColor}}>Colorlib</a>
</p>
</div>
</div>
</div> 
</div>

    </footer>
  )
}
