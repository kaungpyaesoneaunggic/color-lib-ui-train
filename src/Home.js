import React, { useEffect } from "react";
import marketlaunch from "./images/market-launch-pana.svg";
import { primaryColor } from "./constants/constant";
import Outlinebuttonbig from "./components/OutlinebuttonBig";
import Primarybutton from "./components/PrimarybuttonBig";
import './Home.css'
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 2000, once: "true" });
  }, []);

  return (
    <div
      id="Home"
      className="d-flex flex-wrap flex-row justify-content-start col-lg-12"
      
    >
      <div
        data-aos="fade-up"
        className=" order-lg-1 order-2"
        style={{ flex: "1", minWidth: "300px", textAlign: "center" }}
      >
        <p id="top-label"
          className="col-lg-8"
          style={{
            color: "black",
            fontWeight: "bold",
            textAlign: "start",
            fontFamily: "sans-serif",
          }}
        >
          Promote Your Products by Colorlib
        </p>
        <p style={{ fontSize: "20px", textAlign: "start" }}>
          Another cool free html css template by{" "}
          <span style={{ color: primaryColor }}>Colorlib</span> Far far away,
          behind the word mountains, far from the countries Vokalia and
          Consonantia, there live the blind texts. Separated they live in
          Bookmarksgrove right at the coast
        </p>
        <div
          data-aos="fade-up"
          style={{ direction: "column", textAlign: "start" }}
        >
          <Primarybutton text={"See Features"} />
          <Outlinebuttonbig text={"Pricing"} />
        </div>
      </div>
      <img
      className="order-lg-2 order-1 "
        src={marketlaunch}
        data-aos="fade-right"
        width={"100%"}
        height={"auto"}
        style={{ margin: "20px 0", maxWidth: "650px" }}
        alt="Market Launch"
      />
    </div>
  );
}
