import React from 'react'
import UserPostCard from './components/UserPostCard'
import userone from './images/userone.jpg'
import usertwo from './images/usertwo.jpg'


export default function News() {
  return (
    <div style={{paddingTop:'50px',paddingBottom:'130px' }}>
      <p style={{ fontSize:'35px', color:'black', textAlign:'center' }}>
        Our News
      </p>
      <p  style={{ fontSize:'15px', textAlign:'center' }}>
        Far from the countries Vokalia and Consonantia
        </p>
      <br></br>
      <div style={{ display:'flex',flexDirection:'row', justifyContent:'space-around' }}>

        <UserPostCard
        user={'James'}
        date={'Jun 14 2020'}
        text={'Far far away behind the word mountains far from the countries'}
        image={userone}
        />

        <UserPostCard
        user={'Khan'}
        date={'Jun 14 2020'}
        text={'Far far away behind the word mountains far from the countries'}
        image={usertwo}
        />

        <UserPostCard
        user={'Rob'}
        date={'Jun 14 2020'}
        text={'Far far away behind the word mountains far from the countries'}
        image={userone}
        />
      </div>
      </div>
  )
}
