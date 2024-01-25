import React from 'react'

export default function PrimarybuttonBig({text}) {
  return (
    <button className='btn btn-primary p-0' style={{ borderRadius:'25px', width:'150px',height:'50px', fontSize:'18px', margin:'5px'}}>{text}</button>
  )
}
