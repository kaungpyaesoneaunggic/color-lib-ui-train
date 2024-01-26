import React from "react";
import featuregraph from "./images/featuresgraph.png";
import featuregrahptwo from './images/celestial-1.png'
import { primaryColor } from "./constants/constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import UserCard from "./components/UserCard";
import user from "./images/userone.jpg";

export default function Features() {
  return (
    <div className="d-flex flex-column flex-lg-row py-5">
      <div
        id="Features"
        className="col-lg-6 d-flex flex-column justify-content-start align-items-start ml-2"
      >
        <p style={{ color: primaryColor, fontSize: "18px" }}>
          DIGITAL SERVICES
        </p>
        <p
          style={{
            textAlign: "start",
            color: "black",
            fontSize: "40px",
            width: "250px",
          }}
        >
          Selling Digital Services
        </p>
        <p style={{ textAlign: "start", fontSize: "18px" }}>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast
        </p>
        <p style={{ fontSize: "18px" }}>
          <FontAwesomeIcon icon={faCheck} color={primaryColor} /> There live the
          blind texts
        </p>
        <p style={{ fontSize: "18px" }}>
          <FontAwesomeIcon icon={faCheck} color={primaryColor} /> Far far away
          behind the word
        </p>
        <p style={{ textAlign: "start", fontStyle: "italic", color: "black" }}>
          “Separated they live in Bookmarksgrove right at the coast of the
          Semantics, a large language ocean. A small river named Duden flows by
          their place and supplies it with the necessary regelialia. ”
        </p>
        <UserCard
          image={user}
          job={"Facebook, Product lead"}
          text={"James Anderson"}
        />
      </div>

      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner col-sm-6 m-3">
          <div class="carousel-item active">
            <img class="d-block w-100" src={featuregraph} alt="First slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={featuregrahptwo} alt="Second slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={featuregraph} alt="Third slide" />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}
