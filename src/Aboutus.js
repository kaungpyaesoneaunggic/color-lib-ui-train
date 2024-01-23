import React from 'react'
import { primaryColor } from './constants/constant'
import aboutusimg from './images/about_us.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export default function Aboutus() {
  return (
    <div style={{marginTop:'150px', marginBottom:'150px', display:'flex',  flexDirection:'row', justifyContent:'space-between', }}>
      <img src={aboutusimg} className='img-fluid' style={{ width:'609px', objectFit:'fill'}}>
      </img>
      <div style={{ width:'300px', }}>
        <p style={{ color:primaryColor }}>About</p>
        <p style={{ color:'black', fontSize:'35px' }}>About Us</p>
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

        <div style={{display:'flex',flexDirection:'row',margin:'15px', width:'300px' }}>
          <div style={{ direction:'row',width:'180px'}}>
            <p style={{ color:'black', fontSize:'35px', marginBottom:'1px'}}>59M</p>
            <p>Members</p>
          </div>
          <div style={{ direction:'row' ,width:'180px'}}>
            <p style={{ color:'black', fontSize:'35px', marginBottom:'1px'}}>14</p>
            <p>Teams</p>
          </div>
        </div>

      </div>

    </div>
  )
}
