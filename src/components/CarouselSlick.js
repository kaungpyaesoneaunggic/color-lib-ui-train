import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import UserCard from './UserCard';
import usertwo from "../images/usertwo.jpg";
import userone from "../images/userone.jpg";
import rick from '../images/rick.png'

export default function CarouselSlick() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  }
  return (
      <div>
        <Slider  {...settings}>
        <div style={{ width: "300px", margin: "10px" }}>
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
  
          <div style={{ width: "300px", margin: "10px" }}>
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
  
  
          <div style={{ width: "300px", margin: "10px" }}>
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
    )
}

