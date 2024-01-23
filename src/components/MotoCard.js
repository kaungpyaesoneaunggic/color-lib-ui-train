import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function MotoCard({toptext,color, icon}) {
  return (
    <div style={{ display:'flex', direction:'row',width:'520px', justifyContent:'center', alignItems:'start' }}>
      <div className=' d-flex align-items-center justify-content-center' style={{ border:'1px', borderRadius:'10px', backgroundColor:color, width:'40px', height:'40px', margin:'10px 15px 0px 10px'}}>
        <FontAwesomeIcon icon={icon} style={{ color:'white', width:'25px', height:'25px'}}/>
      </div>
      <div style={{ width:'300px' }}>
        <p style={{ color:'black', fontSize:'20px', margin:'0' }}>{toptext}</p>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
      </div>

    </div>
  )
}
