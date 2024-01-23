import React from 'react'

export default function Outlinebuttonbig({text}) {
  return (
    <button className='btn btn-outline-primary p-0' style={{ borderRadius:'25px', width:'180px',height:'45px', fontSize:'18px', margin:'5px'}}>{text}</button>
  )
}
