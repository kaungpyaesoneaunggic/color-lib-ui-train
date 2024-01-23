import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function MotoColumn({toptext,color, icon}) {
  return (
    <div style={{height:'300px', justifyContent:'start', alignItems:'start' }}>
      <div className=' d-flex align-items-center justify-content-center' style={{ border:'1px', borderRadius:'10px', backgroundColor:color, width:'50px', height:'50px', margin:'10px 15px 30px 10px'}}>
        <FontAwesomeIcon icon={icon} style={{ color:'white', width:'25px', height:'25px'}}/>
      </div>
      <div style={{ width:'250px', marginLeft:'10px'}}>
        <p style={{ color:'black', fontSize:'20px' }}>{toptext}</p>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
      </div>

    </div>
  )
}
