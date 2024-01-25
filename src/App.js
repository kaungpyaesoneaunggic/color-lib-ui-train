import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Home from './Home';
import Features from './Features';
import Featurestwo from './Featurestwo';
import Featuresthree from './Featuresthree';
import Pricing from './Pricing';
import Pricingtwo from './Pricingtwo';
import { accentGrey } from './constants/constant';
import Testimonials from './Testimonials';
import Aboutus from './Aboutus';
import News from './News';
import Footer from './Footer';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import Contact from './Contact';



function App() {
  useEffect(()=>{
    AOS.init( {duration:2000, once:'true',})
    
  },[])
  return (
    <div className="App">

      {/* white bg */}
      <div  style={{ padding:'0px 8% 0px 8%',overflow:'hidden'}}>
      <Header/>
      <Home/>
      <br></br>
      <div data-aos="fade-up">
      <Features/>
      </div>
      </div>
      
      {/* grey bg */}
      <div style={{ padding:'0px 8% 0px 8%',overflow:'hidden', backgroundColor:accentGrey}}>
      <div data-aos="fade-up">
      <Featurestwo/>
      </div>
      <br></br>
      </div>

      {/* white bg */}
      <div  style={{ padding:'0px 8% 0px 8%',overflow:'hidden'}}>
      <br></br>
      <div data-aos="fade-up">
      <Featuresthree/>
      </div>
      <br></br>      
      </div>
      {/* grey bg */}
      <div style={{ padding:'0px 8% 0px 8%',overflow:'hidden', backgroundColor:accentGrey}}>
      <div data-aos="fade-up">
      <Pricing/>
      </div>
      </div>
      {/* white bg */}
      <div  style={{ padding:'0px 8% 0px 8%',overflow:'hidden'}}>
      <div data-aos="fade-up">
        <Pricingtwo/>
        </div>
        <div data-aos="fade-up">
        <Testimonials/> 
        </div>
        <div data-aos="fade-up">
        <Aboutus/>
        </div>
      </div>

      {/* grey */}
      <div style={{padding:'0px 8% 0px 8%',overflow:'hidden', backgroundColor:accentGrey}}>
      <div data-aos="fade-up">
        <News/>
        </div>
      </div>

      {/* white */}
      <div style={{padding:'0px 8% 0px 8%',overflow:'hidden'}}>
      <div data-aos="fade-up">
        <Contact/>
        </div>
      </div>

      <div style={{padding:'5% 8% 5% 8%',overflow:'hidden', backgroundColor:'#EFEFEF', }}>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
