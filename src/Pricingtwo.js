import React from 'react'
import MotoCard from './components/MotoCard'
import { accentCyan, accentGrey, accentRed, accentYellow, primaryColor } from './constants/constant'
import { faCode, faRefresh, faSuitcase, faTasks } from '@fortawesome/free-solid-svg-icons'

export default function Pricingtwo() {
  return (
    <div style={{paddingTop:'50px',paddingBottom:'20px' }}>
      <p style={{ fontSize:'35px', color:'black', textAlign:'center' }}>
        Advantages of using our products
      </p>
      <p  style={{ fontSize:'15px', textAlign:'center' }}>Far from the countries Vokalia and Consonantia</p>
      <br></br>

    {/* card 1 &2 contaner */}
    <div style={{ display:'flex',direction:'column', justifyContent:'center',margin:'10px' }}>
        {/* Card 1 */}
      <div style={{width:'500px',display:'flex', justifyContent:'start', flexDirection:'column'}}>
          <MotoCard
          color={accentRed}
          icon={faRefresh}
          toptext={'Grow Your Business'}/>
          <p style={{ color:primaryColor, margin:'0px' , marginLeft:'140px'}}>Learn More</p>
       </div>

       {/* card 2 */}
       <div style={{width:'500px',display:'flex', justifyContent:'start', flexDirection:'column'}}>
          <MotoCard
          color={accentYellow}
          icon={faCode}
          toptext={'Build Products'}/>
          <p style={{ color:primaryColor, margin:'0px' , marginLeft:'140px'}}>Learn More</p>
       </div>
    </div>
    <br></br>
    {/* card 3 &4 contaner */}
    <div style={{ display:'flex',direction:'column', justifyContent:'center', margin:'10px' }}>
        {/* Card 3 */}
      <div style={{width:'500px',display:'flex', justifyContent:'start', flexDirection:'column'}}>
          <MotoCard
          color={accentCyan}
          icon={faTasks}
          toptext={'Grow Your Business'}/>
          <p style={{ color:primaryColor, margin:'0px' , marginLeft:'140px'}}>Learn More</p>
       </div>

       {/* card 4 */}
       <div style={{width:'500px',display:'flex', justifyContent:'start', flexDirection:'column'}}>
          <MotoCard
          color={primaryColor}
          icon={faSuitcase}
          toptext={'Build Products'}/>
          <p style={{ color:primaryColor, margin:'0px' , marginLeft:'140px'}}>Learn More</p>
       </div>
    </div>

    </div>
  )
}
