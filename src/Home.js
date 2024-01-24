import React from 'react'
import marketlaunch from './images/market-launch-pana.svg'
import { primaryColor } from './constants/constant'
import Outlinebuttonbig from './components/OutlinebuttonBig'
import Primarybutton from './components/PrimarybuttonBig'
export default function Home() {
  return (
    <div id='Home' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'start', margin: '60px 0px 20px 0px', flexWrap: 'wrap' }}>
      <div style={{ flex: '1', minWidth: '300px', maxWidth: '80vw', margin: '0 20px', textAlign:'center' }}>
        <p style={{ color: 'black', fontWeight: 'bold', fontSize: '55px' }}>Promote your Products with Colorlib</p>
        <p style={{ fontSize: '23px' }}>
          Another cool free html css template by <span style={{ color: primaryColor }}>Colorlib</span> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast
        </p>
        <div style={{ direction: 'column', width: '400px' }}>
          <Primarybutton text={'See Features'} />
          <Outlinebuttonbig text={'Pricing'} />
        </div>
      </div>
      <img src={marketlaunch} width={'100%'} height={'auto'} style={{ margin: '20px 0', maxWidth: '650px' }} alt="Market Launch" />
    </div>
  );
  
}
