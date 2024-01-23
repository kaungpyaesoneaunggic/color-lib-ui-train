import React from 'react'

export default function UserCard({image, text,job}) {
  return (
    <div style={{ width:'600px',display:'flex', direction:'column' }}>
      <img src={image} style={{ borderRadius:'50%',width:'50px',height:'50px' }}></img>
      <div style={{ marginLeft:'10px' }}>
        <p style={{ margin:'0px' ,color:'black'}}>{text}</p>
        <p  style={{ margin:'0px' }}>{job}</p>
      </div>
    </div>
  )
}
