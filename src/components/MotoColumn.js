import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function MotoColumn({toptext,color, icon}) {
  return (
    <div className='justify-content-start align-items-start col-sm-6 col-md-3'>
      <div className='d-flex flex-column'>
      <div className=' d-flex align-items-center justify-content-center' style={{ border:'1px', borderRadius:'10px', backgroundColor:color, width:'50px', height:'50px',}}>
        <FontAwesomeIcon icon={icon} style={{ color:'white', width:'25px', height:'25px'}}/>
      </div>
      <p style={{ color:'black', fontSize:'20px' }}>{toptext}</p>
      </div>
      
      <div style={{marginLeft:'10px'}}>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
      </div>

    </div>
  )
}
