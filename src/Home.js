import React from 'react'
import marketlaunch from './images/market-launch-pana.svg'
import { primaryColor } from './constants/constant'
import Outlinebuttonbig from './components/OutlinebuttonBig'
import Primarybutton from './components/PrimarybuttonBig'
export default function Home() {
  return (
    <div style={{ display:'flex', justifyContent:'start', margin:'60px 0px 20px 0px'}}>
      <div  style={{width:'550px'}}>
        <p style={{ color:'black',fontWeight:'bold', fontSize:'55px' }}>Promote your Products with Colorlib</p>
        <p style={{fontSize:'23px' }}>Another cool free html css template by <span style={{ color:primaryColor }}>Colorlib</span>  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast</p>
        
        <div style={{ direction:'column', width:'500px'}}>
        <Primarybutton
        text={'See Features'}
        />
        <Outlinebuttonbig
        text={'Pricing'}/>
        </div>
      </div>
      <img src={marketlaunch} width={'650px'} height={'460px'} style={{ marginLeft:'120px' }}>
      </img>
    </div>
  )
}
