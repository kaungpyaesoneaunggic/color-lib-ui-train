import React from 'react'

export default function Primarybutton({text}) {
  return (
    <button className='btn btn-primary p-0' style={{ borderRadius:'20px', width:'150px',height:'35px', fontSize:'20px', margin:'3px'}}>{text}</button>
  )
}
