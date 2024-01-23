import React from 'react'
import { primaryColor } from './constants/constant'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import UserCard from './components/UserCard'
import usertwo from './images/usertwo.jpg'
import userone from './images/userone.jpg'

export default function Testimonials() {
  return (
    <div style={{marginTop:'150px', marginBottom:'150px', display:'flex',  flexDirection:'row', justifyContent:'center', }}>

      <div style={{ width:'300px' }}>
        <p style={{ color:primaryColor }}>Testimonials</p>
        <p style={{ color:'black', fontSize:'35px' }}>Our Customers Feedbck</p>
        <div>
          <button className='btn btn-secondary' style={{ margin:'5px' }}>
            <FontAwesomeIcon icon={faArrowLeft}/>
          </button>
          <button className='btn btn-secondary' style={{ margin:'5px' }}>
          <FontAwesomeIcon icon={faArrowRight}/>
          </button>
        </div>
      </div>
      <div style={{ display:'flex', flexDirection:'row'}}>
        <div style={{ width:'300px', margin:'10px' }}>
          <p style={{ fontStyle:'italic', color:'black' }}>“Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. ”</p>
          <UserCard
          image={usertwo}
          job={'CEO | Meta'}
          text={'Mark Zuckerberg'}/>
        </div>
        <div style={{ width:'300px', margin:'10px'}}>
          <p style={{ fontStyle:'italic',color:'black' }}>“Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. ”</p>
          <UserCard
          image={userone}
          job={'CEO | Meta'}
          text={'Mark Zuckerberg'}/>
        </div>
      </div>
    </div>
  )
}
