import React, { useRef } from "react";
import { primaryColor } from "./constants/constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import UserCard from './components/UserCard';
import usertwo from "./images/usertwo.jpg";
import userone from "./images/userone.jpg";
import rick from './images/rick.png'
import Slider from "react-slick";

export default function Testimonials() {
  const sliderRef = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  }
  const goToNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const goToPrevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <div
      className="d-flex flex-wrap justify-content-center col-lg-12"
      style={{
        marginTop: "150px",
        marginBottom: "150px",
      }}
    >
      <div className="col-lg-5">
        <p style={{ color: primaryColor }}>Testimonials</p>
        <p style={{ color: "black", fontSize: "35px" }}>
          Our Customers Feedbck
        </p>
        <div>
          <button className="btn btn-secondary" style={{ margin: "5px" }}  onClick={goToPrevSlide}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button className="btn btn-secondary" style={{ margin: "5px" }}  onClick={goToNextSlide}>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
        <div className="col-lg-6" style={{ margin: "10px" }}>
        <Slider className='col-lg-12'  {...settings} ref={sliderRef}>
        <div className='col-lg-3' style={{margin: "10px" }}>
          <p style={{ fontStyle: "italic", color: "black" }}>
              “Separated they live in Bookmarksgrove right at the coast of the
              Semantics, a large language ocean. A small river named Duden flows
              by their place and supplies it with the necessary regelialia. ”
            </p>
            <UserCard
              image={usertwo}
              job={"CEO | Meta"}
              text={"Mark Zuckerberg"}
            />
          </div>
  
          <div className='col-lg-3' style={{ margin: "10px" }}>
          <p style={{ fontStyle: "italic", color: "black" }}>
              “Separated they live in Bookmarksgrove right at the coast of the
              Semantics, a large language ocean. A small river named Duden flows
              by their place and supplies it with the necessary regelialia. ”
            </p>
            <UserCard
              image={userone}
              job={"Assistant | X"}
              text={"Elon Musk"}
            />
          </div>
  
  
          <div className='col-lg-3' style={{ margin: "10px" }}>
          <p style={{ fontStyle: "italic", color: "black" }}>
              “Separated they live in Bookmarksgrove right at the coast of the
              Semantics, a large language ocean. A small river named Duden flows
              by their place and supplies it with the necessary regelialia. ”
            </p>
            <UserCard
              image={rick}
              job={"Mad Scientist | Jobless"}
              text={"Rick Sanchez"}
            />
          </div>
  
        </Slider>
        </div>
    </div>
  );
}
