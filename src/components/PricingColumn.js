import React from 'react'
import Outlinebuttonbig from './OutlinebuttonBig'
import { primaryColor } from '../constants/constant'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export default function PricingColumn() {
  return (
    <div style={{display:'flex', alignItems:'center',flexDirection:'column' ,width:'300px', height:'550px', backgroundColor:'white', borderRadius:'40px',padding:'60px 20px 60px 20px' }}>
        <p style={{ color:'black',fontSize:'30px' }}>Free</p>
        <p style={{ color:primaryColor,fontSize:'35px' }}>$0</p>

        {/* text with tick */}
        <div style={{display:'flex', flexDirection:'row',width:'250px' }}>
        <FontAwesomeIcon icon={faCheck} style={{ color:primaryColor, width:'50px', margin:'0' }}/>
        <p style={{ margin:'0', fontSize:'18px', width:'180px' }}> There live the blind texts</p>
        </div>

        {/* text with tick */}
        <div style={{display:'flex', flexDirection:'row',width:'250px' }}>
        <FontAwesomeIcon icon={faCheck} style={{ color:primaryColor, width:'50px', margin:'0' }}/>
        <p style={{ margin:'0', fontSize:'18px', width:'180px' }}> There live the blind texts</p>
        </div>

        {/* text with tick */}
        <div style={{display:'flex', flexDirection:'row',width:'250px' }}>
        <FontAwesomeIcon icon={faCheck} style={{ color:primaryColor, width:'50px', margin:'0' }}/>
        <p style={{ margin:'0', fontSize:'18px', width:'180px' }}> Far from the countries Vokalia and Consonantia</p>
        </div>
        <Outlinebuttonbig
        text={'Get Started'}
        />
      </div>
  )
}
