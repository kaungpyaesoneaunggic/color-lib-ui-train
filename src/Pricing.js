import React from 'react'
import { accentGrey, primaryColor } from './constants/constant'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import Outlinebuttonbig from './components/OutlinebuttonBig'
import Primarybutton from './components/PrimarybuttonBig'

export default function Pricing() {
  return (
    <div style={{backgroundColor:accentGrey , paddingTop:'50px', paddingBottom:'20px'}}>
      <p style={{ fontSize:'35px', color:'black', textAlign:'center', }}>
        Pricing
      </p>
      <p  style={{ fontSize:'15px', textAlign:'center' }}>Pricing for everyone. Choose your plan now!</p>
      <br></br>
    <div style={{width:'100%',display:'flex',justifyContent:'center' }}>


      
      {/* Column 1 start */}
      <div style={{display:'flex', alignItems:'center',flexDirection:'column' ,width:'300px', height:'550px', backgroundColor:'white', borderRadius:'40px',padding:'60px 20px 60px 20px',margin:'10px' }}>
        <p style={{ color:'black',fontSize:'30px' }}>Free</p>
        <p style={{ color:primaryColor,fontSize:'35px' }}>$0</p>

        {/* text with tick */}
        <div style={{display:'flex', flexDirection:'row',width:'250px' }}>
        <FontAwesomeIcon icon={faCheck} style={{ color:primaryColor, width:'50px', margin:'0' }}/>
        <p style={{ margin:'0', fontSize:'18px', width:'180px' }}> There live the blind texts</p>
        </div>

        {/* text with tick */}
        <div style={{display:'flex', flexDirection:'row',width:'250px' }}>
        <FontAwesomeIcon icon={faCheck} style={{ color:primaryColor, width:'50px', margin:'0' }}/>
        <p style={{ margin:'0', fontSize:'18px', width:'180px' }}> There live the blind texts</p>
        </div>

        {/* text with tick */}
        <div style={{display:'flex', flexDirection:'row',width:'250px', marginBottom:'40px' }}>
        <FontAwesomeIcon icon={faCheck} style={{ color:primaryColor, width:'50px', margin:'0' }}/>
        <p style={{ margin:'0', fontSize:'18px', width:'180px' }}> Far from the countries Vokalia and Consonantia</p>
        </div>
        <Outlinebuttonbig
        text={'Get Started'}
        />
      </div>
      {/* Column 1 End */}


      {/* Column 2 start */}
      <div style={{display:'flex', alignItems:'center',flexDirection:'column' ,width:'300px', height:'550px', backgroundColor:'white', borderRadius:'40px',padding:'60px 20px 60px 20px',margin:'10px' }}>
        <p style={{ color:'black',fontSize:'30px' }}>Standard</p>
        <p style={{ color:primaryColor,fontSize:'35px' }}>$19.99</p>

        {/* text with tick */}
        <div style={{display:'flex', flexDirection:'row',width:'250px' }}>
        <FontAwesomeIcon icon={faCheck} style={{ color:primaryColor, width:'50px', margin:'0' }}/>
        <p style={{ margin:'0', fontSize:'18px', width:'180px' }}> There live the blind texts</p>
        </div>

        {/* text with tick */}
        <div style={{display:'flex', flexDirection:'row',width:'250px' }}>
        <FontAwesomeIcon icon={faCheck} style={{ color:primaryColor, width:'50px', margin:'0' }}/>
        <p style={{ margin:'0', fontSize:'18px', width:'180px' }}> There live the blind texts</p>
        </div>

        {/* text with tick */}
        <div style={{display:'flex', flexDirection:'row',width:'250px' , marginBottom:'40px'}}>
        <FontAwesomeIcon icon={faCheck} style={{ color:primaryColor, width:'50px', margin:'0' }}/>
        <p style={{ margin:'0', fontSize:'18px', width:'180px' }}> Far from the countries Vokalia and Consonantia</p>
        </div>
        <Primarybutton
        text={'Get Started'}
        />
      </div>
      {/* Column 2 End */}

      {/* Column 3 start */}
      <div style={{display:'flex', alignItems:'center',flexDirection:'column' ,width:'300px', height:'550px', backgroundColor:'white', borderRadius:'40px',padding:'60px 20px 60px 20px',margin:'10px' }}>
        <p style={{ color:'black',fontSize:'30px' }}>Premium</p>
        <p style={{ color:primaryColor,fontSize:'35px' }}>$79.99</p>

        {/* text with tick */}
        <div style={{display:'flex', flexDirection:'row',width:'250px' }}>
        <FontAwesomeIcon icon={faCheck} style={{ color:primaryColor, width:'50px', margin:'0' }}/>
        <p style={{ margin:'0', fontSize:'18px', width:'180px' }}> There live the blind texts</p>
        </div>

        {/* text with tick */}
        <div style={{display:'flex', flexDirection:'row',width:'250px' }}>
        <FontAwesomeIcon icon={faCheck} style={{ color:primaryColor, width:'50px', margin:'0' }}/>
        <p style={{ margin:'0', fontSize:'18px', width:'180px' }}> There live the blind texts</p>
        </div>

        {/* text with tick */}
        <div style={{display:'flex', flexDirection:'row',width:'250px', marginBottom:'40px' }}>
        <FontAwesomeIcon icon={faCheck} style={{ color:primaryColor, width:'50px', margin:'0' }}/>
        <p style={{ margin:'0', fontSize:'18px', width:'180px' }}> Far from the countries Vokalia and Consonantia</p>
        </div>

        <Outlinebuttonbig
        text={'Get Started'}
        />
      </div>
      {/* Column 3 End */}

    </div>

    </div>
  )
}
