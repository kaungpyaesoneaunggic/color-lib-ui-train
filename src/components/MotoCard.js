import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

export default function MotoCard({toptext,color, icon}) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };


  return (
    <div className='d-flex flex-row col-md-12  justify-content-center align-items-start' style={{margin:'10px',borderRadius:'10px',backgroundColor: isHovered ? 'white' : 'transparent'}}
    onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className=' d-flex align-items-center justify-content-center' style={{ border:'1px', borderRadius:'10px', backgroundColor:color, width:'40px', height:'40px', margin:'10px 15px 0px 10px',padding:'10px'}}>
        <FontAwesomeIcon icon={icon} style={{ color:'white', width:'25px', height:'25px'}}/>
      </div>
      <div style={{ width:'300px'}}>
        <p style={{ color:'black', fontSize:'20px', margin:'0' , textAlign:'start'}}>{toptext}</p>
        <p style={{ textAlign:'start' }}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
      </div>
      

    </div>
  )
}
