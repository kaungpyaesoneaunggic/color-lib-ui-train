import React from 'react'

export default function Outlinebutton({text}) {
  return (
    <button className='btn btn-outline-secondary p-0' style={{ borderRadius:'20px', width:'120px',height:'30px', fontSize:'20px', margin:'3px'}}>{text}</button>
  )
}
