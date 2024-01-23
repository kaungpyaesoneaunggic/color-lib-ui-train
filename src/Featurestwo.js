import React from 'react'
import { accentCyan, accentGrey, accentRed, accentYellow, primaryColor } from './constants/constant'
import featuregraph from './images/featuresgraph.png'
import MotoCard from './components/MotoCard'
import { faCheck, faRefresh, faSuitcase, faTasks } from '@fortawesome/free-solid-svg-icons'
import MotoColumn from './components/MotoColumn'

export default function Featurestwo() {
  return (
    <div style={{ backgroundColor:accentGrey, display:'flex',justifyContent:'space-between', width:'100%', margin:'20px 0px 20px 0px', padding:'30px 10px 50px 10px'}}>
      <div className='card' style={{ width:'600px', height:'400px', }} >
        <img src={featuregraph} width={'580px'} height={'380px'}></img>
      </div>
      <div>
        <MotoCard 
        color={accentCyan}
        icon={faRefresh}
        toptext={'Grow Your Business'}
        />
        <MotoCard 
        color={accentRed}
        icon={faSuitcase}
        toptext={'Build Products'}
        />
        <MotoCard 
        color={accentYellow}
        icon={faCheck}
        toptext={'Success Every Day'}
        />
        <MotoCard 
        color={primaryColor}
        icon={faTasks}
        toptext={'Bring Ideas to Life'}
        />
      </div>
    </div>
  )
}
