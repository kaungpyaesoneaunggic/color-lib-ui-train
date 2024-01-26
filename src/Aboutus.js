import React, { useEffect } from 'react'
import { primaryColor } from './constants/constant'
import aboutusimg from './images/about_us.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import CountUp from 'react-countup'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Aboutus() {
  useEffect(()=>{
    AOS.init( {duration:2000, once:'true',})
  },[])
  return (
    <div id='About' className='d-flex flex-wrap jusify-content-between' style={{marginTop:'150px', marginBottom:'150px',}}>
      <img src={aboutusimg} className='col-lg-6' style={{objectFit:'fill'}}>
      </img>
      <div className='d-flex flex-column justify-content-center col-lg-6'>
        <p style={{ color:primaryColor, fontSize:'25px' }}>About</p>
        <p style={{ color:'black', fontSize:'45px' }}>About Us</p>
        <p>
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast
        </p>
        <p>
        Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.
        </p>


        {/* text with ticks */}
        <div style={{display:'flex', flexDirection:'row',width:'300px', justifyContent:'start', alignItems:'center',marginTop:'20px'}}>
        <FontAwesomeIcon icon={faCheck} style={{ color:primaryColor, width:'20px', margin:'0' }}/>
        <p style={{ margin:'0', fontSize:'18px', width:'250px' }}> There live the blind texts</p>
        </div>
        {/* text with ticks */}
        <div style={{display:'flex', flexDirection:'row',width:'300px', justifyContent:'start', alignItems:'center',marginTop:'20px' }}>
        <FontAwesomeIcon icon={faCheck} style={{ color:primaryColor, width:'20px', margin:'0' }}/>
        <p style={{ margin:'0', fontSize:'18px', width:'250px' }}> Far far away behind the word</p>
        </div>
        {/* text with ticks */}
        <div style={{display:'flex', flexDirection:'row',width:'300px', justifyContent:'start', alignItems:'center',marginTop:'20px' }}>
        <FontAwesomeIcon icon={faCheck} style={{ color:primaryColor, width:'20px', margin:'0' }}/>
        <p style={{ margin:'0', fontSize:'18px', width:'250px' }}> Their place and supplies</p>
        </div>

        <div data-aos='fade-up' style={{display:'flex',flexDirection:'row',margin:'15px', width:'300px' }}>
          <div style={{ direction:'row',width:'180px'}}>
            <p style={{ color:'black', fontSize:'35px', marginBottom:'1px'}}><CountUp end={59} duration={5} delay={3} />M</p>
            <p>Members</p>
          </div>
          <div style={{ direction:'row' ,width:'180px'}}>
            <p style={{ color:'black', fontSize:'35px', marginBottom:'1px'}}><CountUp end={14} duration={5} delay={3}/></p>
            <p>Teams</p>
          </div>
        </div>

      </div>

    </div>
  )
}
