import React from 'react'

export default function UserCard({image, text,job}) {
  return (
    <div className='col-lg-12 d-flex flex-row pl-1 justify-content-start align-items-center'>
      <img src={image} style={{ borderRadius:'50%',width:'50px',height:'50px' }}></img>
      <div className='d-flex flex-column justify-content-center' style={{ marginLeft:'10px' }}>
        <p style={{ color:'black', marginBottom:'10px'}}>{text}</p>
        <p  style={{ margin:'0px' }}>{job}</p>
      </div>
    </div>
  )
}
