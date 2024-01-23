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

function App() {
  return (
    <div className="App">

      {/* white bg */}
      <div  style={{ padding:'0px 110px 0px 110px',overflow:'hidden'}}>
      <Header/>
      <Home/>
      <br></br>
      <Features/>
      </div>
      
      {/* grey bg */}
      <div style={{ padding:'0px 110px 0px 110px',overflow:'hidden', backgroundColor:accentGrey}}>
      <Featurestwo/>
      <br></br>
      </div>

      {/* white bg */}
      <div  style={{ padding:'0px 110px 0px 110px',overflow:'hidden'}}>
      <br></br>
      <Featuresthree/>
      <br></br>      
      </div>
      {/* grey bg */}
      <div style={{ padding:'0px 110px 0px 110px',overflow:'hidden', backgroundColor:accentGrey}}>
      <Pricing/>
      </div>
      {/* white bg */}
      <div  style={{ padding:'0px 110px 0px 110px',overflow:'hidden'}}>
        <Pricingtwo/>
        <Testimonials/> 
        <Aboutus/>
      </div>
    </div>
  );
}

export default App;
