import React from 'react'
import Primarybutton from './components/Primarybutton';
import Outlinebutton from './components/Outlinebutton';
import Launchio from './components/Launchio';

export default function Header() {
  return (
    <header className="navbar">
      <nav style={{ position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        padding:'10px 80px 0px 80px',
        backgroundColor:'white',
        zIndex:'10'
        }}>
        <ul style={{ listStyle:'none', display:'flex', alignItems:'center',justifyContent:'space-between' }}>
          <li>
          <div style={{ fontSize:'18px', display:'flex',justifyContent:'space-between',alignItems:'center ', width:'700px'}}>
          <Launchio/>
          <div style={{ marginLeft:'35px', display:'flex',justifyContent:'space-between',alignItems:'center ',width:'500px' }}>
          <li>Home</li>
            <li>Dropdown</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </div>
          </div>  
          </li>
          <li>
            <div style={{ display:'flex',justifyContent:'space-between',width:'300px' }}>
              <Outlinebutton
              text={'Sign in'}
              />
              <Primarybutton
              text={'Register'}
              />
            </div>
            </li>         
        </ul>
      </nav>
    </header>
  )
}
