import React from 'react'
import featuregraph from './images/featuresgraph.png'
import { primaryColor } from './constants/constant'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import UserCard from './components/UserCard'
import user from './images/userone.jpg'

export default function Features() {
  return (
    <div style={{display:'flex', justifyContent:'start',alignItems:'center', direction:'column', margin:'20px 0px 20px 0px'}}>
      <div style={{width:'480px'  }}>
        <p style={{ color:primaryColor, fontSize:'18px'}}>DIGITAL SERVICES</p>
        <p style={{ color:'black',fontSize:'40px', width:'250px'}}>Selling Digital Services</p>
        <p style={{ fontSize:'18px' }}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast</p>
        <p style={{ fontSize:'18px' }}><FontAwesomeIcon icon={faCheck} color={primaryColor}/> There live the blind texts</p>
        <p style={{ fontSize:'18px' }}><FontAwesomeIcon icon={faCheck} color={primaryColor}/> Far far away behind the word</p>
        <p style={{ fontStyle:'italic', color:'black' }}>“Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. ”</p>
        <div>
          <UserCard
          image={user}
          job={'Facebook, Product lead'}
          text={'James Anderson'}/>
        </div>
      </div>

      <div className='card' style={{ width:'600px', height:'400px', justifyContent:'center', alignItems:'center', marginLeft:'120px', zIndex:'-1'}} >
      <div className='card-container' >
      <img src={featuregraph} width={'580px'} height={'380px'}></img>
      </div>
      </div>
      
    </div>
  )
}
