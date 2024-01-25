import React, { useRef } from "react";
import { primaryColor } from "./constants/constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import CarouselSlick from "./components/CarouselSlick";

export default function Testimonials() {
  // const carouselRef = useRef();
  // const goToPrev = () => {
  //   if (carouselRef.current && carouselRef.current.goToPrev) {
  //     carouselRef.current.goToPrev();
  //   }
  // };
  // const goToNext = () => {
  //   if (carouselRef.current && carouselRef.current.goToNext) {
  //     carouselRef.current.goToNext();
  //   }
  // };
  return (
    <div
      style={{
        marginTop: "150px",
        marginBottom: "150px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "300px" }}>
        <p style={{ color: primaryColor }}>Testimonials</p>
        <p style={{ color: "black", fontSize: "35px" }}>
          Our Customers Feedbck
        </p>
        <div>
          <button className="btn btn-secondary" style={{ margin: "5px" }}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button className="btn btn-secondary" style={{ margin: "5px" }}>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
        <div style={{ width: "700px", margin: "10px" }}>
          <CarouselSlick
          // ref={carouselRef}
          />
        </div>
    </div>
  );
}
