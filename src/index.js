import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Features from "./Features";
import Header from "./Header";
import Footer from "./Footer";
import Featurestwo from "./Featurestwo";
import Featuresthree from "./Featuresthree";
import Pricing from "./Pricing";
import Pricingtwo from "./Pricingtwo";
import Testimonials from "./Testimonials";
import Aboutus from "./Aboutus";
import News from "./News";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/features",
    element: <><Features/><Featurestwo/><Featuresthree/></>,
  },
  {
    path: "/pricing",
    element: <><Pricing/><Pricingtwo/></>,
  },
  {
    path: "/features",
    element: <><Testimonials/></>,
  },
  {
    path: "/features",
    element: <><Aboutus/></>,
  },
  {
    path: "/features",
    element: <><News/></>,
  },
  {
    path: "/features",
    element: <><News/></>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
      <Header/>
      <div className="my-5 py-5" style={{ padding:'0px 8% 0px 8%',overflow:'hidden'}}>
        <RouterProvider router={router}/>
      </div>
      <div style={{padding:'5% 8% 2% 8%',overflow:'hidden', backgroundColor:'#EFEFEF', }}>
        <Footer/>
      </div>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
