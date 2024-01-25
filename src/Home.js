import React from 'react'
import marketlaunch from './images/market-launch-pana.svg'
import { primaryColor } from './constants/constant'
import Outlinebuttonbig from './components/OutlinebuttonBig'
import Primarybutton from './components/PrimarybuttonBig'
export default function Home() {
  return (
    <div id='Home' className='d-flex flex-wrap flex-row justify-content-start py-5 col-lg-12' style={{ margin: '60px 0px 20px 0px'}}>
      <div className='' style={{ flex: '1', minWidth: '300px', textAlign:'center' }}>
        <p className='col-md-8' style={{ color: 'black', fontWeight: 'bold',fontSize: '49px' ,textAlign:'start', fontFamily:'sans-serif' }}>Promote Your Products by Colorlib</p>
        <p style={{ fontSize: '20px' , textAlign:'start'}}>
          Another cool free html css template by <span style={{ color: primaryColor }}>Colorlib</span> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast
        </p>
        <div style={{ direction: 'column',textAlign:'start' }}>
          <Primarybutton text={'See Features'} />
          <Outlinebuttonbig text={'Pricing'} />
        </div>
      </div>
      <img src={marketlaunch} width={'100%'} height={'auto'} style={{ margin: '20px 0', maxWidth: '650px' }} alt="Market Launch" />
    </div>
  );
  
}
