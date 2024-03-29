import React, { useState } from "react";
import {
  accentCyan,
  accentGrey,
  accentRed,
  accentYellow,
  primaryColor,
} from "./constants/constant";
import featuregraph from "./images/featuresgraph.png";
import MotoCard from "./components/MotoCard";
import {
  faCheck,
  faRefresh,
  faSuitcase,
  faTasks,
} from "@fortawesome/free-solid-svg-icons";
import { Carousel } from "react-bootstrap";

export default function Featurestwo() {
  const [selectedCard, setSelectedIndex] = useState(0);
  const handleCardClick = (index) => {
    setSelectedIndex(index);
    console.log('Selected card:', selectedCard);
  };
  return (
    <div
      className="d-flex flex-wrap flex-lg-nowrap justify-content-between py-5"
      style={{
        backgroundColor: accentGrey,
        margin: "20px 0px 20px 0px",
        padding: "30px 10px 50px 10px",
      }}
    >
      <div className="card col-lg-6 order-lg-1 order-2">
        <Carousel>
          {selectedCard === 0 && (
            <Carousel.Item>
              <img src={featuregraph} />
            </Carousel.Item>
          )}
          {selectedCard === 1 && (
            <Carousel.Item>
              <img src={featuregraph} />
            </Carousel.Item>
          )}
        </Carousel>
      </div>
      <div className="col-lg-5 order-lg-2 order-1 d-flex flex-column-reverse">
        <div onClick={()=>handleCardClick(0)}>
        <MotoCard
          color={accentCyan}
          icon={faRefresh}
          toptext={"Grow Your Business"}
        />
        </div>
        <div onClick={()=>handleCardClick(1)}>
        <MotoCard
          color={accentRed}
          icon={faSuitcase}
          toptext={"Build Products"}
        />
        </div>
        
        <MotoCard
          color={accentYellow}
          icon={faCheck}
          toptext={"Success Every Day"}
        />
        <MotoCard
          color={primaryColor}
          icon={faTasks}
          toptext={"Bring Ideas to Life"}
        />
      </div>
    </div>
  );
}
