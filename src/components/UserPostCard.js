import React from 'react'
import UserCard from './UserCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function UserPostCard({user,date,image,text}) {
  return (
    <div className='col-md-3 row-md-6 m-2' style={{ backgroundColor:'white', padding:'25px' }}>
      <UserCard
      image={image}
      job={date}
      text={'Posted by'+user}
      />
      <br></br>
      <p>Digital Services 4 min read</p>
      <p style={{ color:'black', fontSize:'25px' }}>{text}</p>
      <button><FontAwesomeIcon icon={faArrowRight}/></button>
    </div>
  )
}
