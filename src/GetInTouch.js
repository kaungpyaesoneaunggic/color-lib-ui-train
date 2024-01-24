import React from 'react'
import Primarybutton from './components/PrimarybuttonBig'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faGlobe, faLocation, faLocationDot, faMailBulk, faMapPin, faPhone } from '@fortawesome/free-solid-svg-icons'

export default function GetInTouch() {
  return (
      <div id='Contact' style={{paddingTop:'50px',paddingBottom:'130px' }}>
          <p style={{ fontSize:'35px', color:'black', textAlign:'center' }}>
            Get In Touch
          </p>
          <p  style={{ fontSize:'15px', textAlign:'center' }}>
            Far from the countries Vokalia and Consonantia
          </p>


        
        <div style={{ display:'flex', flexDirection:'row' }}>
          <div style={{display:'flex', flexDirection:'column', margin:'20px', width:'540px'}}>
          {/* input column start */}
          {/* fname lname start*/}
        <div style={{ display:'flex',flexDirection:'row' }}>
          <div style={{ direction:'row', margin:'10px'}}>
            <p style={{ width:'250px'}}>First Name</p>
            <input 
            style={{ border: 'none',
            borderBottom:'1px solid #43434D', /* Set the color for the bottom line */
            borderRadius: '0px', /* Remove border-radius if needed */
            outline: 'none', /* Remove the default focus outline */
           boxShadow: 'none',
           width:'250px'
           }}
           />
          </div>

          <div style={{ direction:'row', margin:'10px' }}>
            <p style={{ width:'300px'}}>Last Name</p>
            <input 
            style={{ border: 'none',
            borderBottom:'1px solid #43434D', /* Set the color for the bottom line */
            borderRadius: '0px', /* Remove border-radius if needed */
            outline: 'none', /* Remove the default focus outline */
           boxShadow: 'none',
           width:'250px'
           }}/>
          </div>
          {/* fname lname end */}
          
        </div>
        <div style={{ direction:'column', margin:'10px'}}>
            <p style={{ width:'300px'}}>Email</p>
            <input 
            style={{ border: 'none',
            borderBottom:'1px solid #43434D', /* Set the color for the bottom line */
            borderRadius: '0px', /* Remove border-radius if needed */
            outline: 'none', /* Remove the default focus outline */
           boxShadow: 'none',
           width:'520px'
           }}
           />
          </div>

          <div style={{ direction:'column', margin:'10px'}}>
            <p style={{ width:'300px'}}>Messages</p>
            <input 
            style={{ 
            type:'text',
            border: 'none',
            borderBottom:'1px solid #43434D', /* Set the color for the bottom line */
            borderRadius: '0px', /* Remove border-radius if needed */
            outline: 'none', /* Remove the default focus outline */
           boxShadow: 'none',
           width:'520px',
           height:'150px'
           }}
           />
          </div>
          
          <Primarybutton
          text={'Send Message'}/>

          
        </div>
          {/* input column end */}

           {/* contact column */}
          <div style={{display:'flex', flexDirection:'column', margin:'20px', paddingLeft:'30px'}}>
            <p style={{ color:'black', fontSize:'22px', marginBottom:'20px' }}>Contact Info</p>
            {/* text with ticks */}
            <div style={{display:'flex', flexDirection:'row',width:'400px',marginBottom:'15px', justifyContent:'start', alignItems:'center'}}>
              <FontAwesomeIcon icon={faLocationDot} style={{ color:'black', width:'20px', margin:'0px 15px 0px 0px' }}/>
              <p style={{ margin:'0', fontSize:'18px', color:'black' }}> 43 Raymouth Rd. Baltemoer, London 3910</p>
            </div>

           {/* text with ticks */}
           <div style={{display:'flex', flexDirection:'row',width:'400px',marginBottom:'15px', justifyContent:'start', alignItems:'center'}}>
              <FontAwesomeIcon icon={faPhone} style={{ color:'black', width:'20px', margin:'0px 15px 0px 0px' }}/>
              <p style={{ margin:'0', fontSize:'18px', color:'black' }}> +1(123)-456-7890</p>
            </div>

           {/* text with ticks */}
           <div style={{display:'flex', flexDirection:'row',width:'400px',marginBottom:'15px', justifyContent:'start', alignItems:'center'}}>
              <FontAwesomeIcon icon={faPhone} style={{ color:'black', width:'20px', margin:'0px 15px 0px 0px' }}/>
              <p style={{ margin:'0', fontSize:'18px', color:'black' }}>+1(123)-456-7890</p>
            </div>

          {/* text with ticks */}
          <div style={{display:'flex', flexDirection:'row',width:'400px',marginBottom:'15px', justifyContent:'start', alignItems:'center'}}>
              <FontAwesomeIcon icon={faEnvelope } style={{ color:'black', width:'20px', margin:'0px 15px 0px 0px' }}/>
              <p style={{ margin:'0', fontSize:'18px', color:'black' }}> info@mydomain</p>
            </div>

        {/* text with ticks */}
        <div style={{display:'flex', flexDirection:'row',width:'400px',marginBottom:'15px', justifyContent:'start', alignItems:'center'}}>
              <FontAwesomeIcon icon={faGlobe} style={{ color:'black', width:'20px', margin:'0px 15px 0px 0px' }}/>
              <p style={{ margin:'0', fontSize:'18px', color:'black' }}> https://Colorlib.com/</p>
            </div>
           </div>
        </div>
      </div>
  )
}
