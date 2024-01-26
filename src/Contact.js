import React from "react";
import PrimarybuttonBig from "./components/PrimarybuttonBig";
import { lightText } from "./constants/constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <div>
      <div className="untree_co-section" id="contact-section">
        <div className="container py-5">
          <div className="row mb-4">
            <div className="col-12 text-center">
              <h2 className="heading">Get In Touch</h2>
              <p>Far from the countries Vokalia and Consonantia</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-7">
              <form className="contact-form">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="" for="fname">
                        First name
                      </label>
                      <input
                        type="text"
                        className="form-control-plaintext"
                        id="fname"
                        style={{
                          borderBottom: "1px solid #43434D",
                          borderRadius: "0px",
                          outline: "none",
                          boxShadow: "none",
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="" for="lname">
                        Last name
                      </label>
                      <input
                        type="text"
                        className="form-control-plaintext"
                        id="fname"
                        style={{
                          borderBottom: "1px solid #43434D",
                          borderRadius: "0px",
                          outline: "none",
                          boxShadow: "none",
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label className="" for="email">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control-plaintext"
                    id="email"
                    style={{
                      borderBottom: "1px solid #43434D",
                      borderRadius: "0px",
                      outline: "none",
                      boxShadow: "none",
                    }}
                  />
                </div>
                <div className="form-group">
                  <label className="" for="message">
                    Message
                  </label>
                  <textarea
                    name=""
                    className="form-control-plaintext"
                    id="message"
                    cols="30"
                    rows="5"
                    style={{
                      borderBottom: "1px solid #43434D",
                      borderRadius: "0px",
                      outline: "none",
                      boxShadow: "none",
                    }}
                  ></textarea>
                </div>
                <div className="my-4">
                  <PrimarybuttonBig text={"Send Message"} />
                </div>
              </form>
            </div>
            <div className="col-lg-4" style={{ marginLeft: "auto" }}>
              <h3 className="h5 mb-4">Contact Info</h3>
              <address className="text-black d-flex">
                <span className="mt-1 icon-room mr-2"></span>
                <span>43 Raymouth Rd. Baltemoer, London 3910</span>
              </address>
              <ul className="list-unstyled ul-links mb-4">
                <li>
                  <a style={{ textDecoration: "none", color: lightText }}>
                    <FontAwesomeIcon icon={faPhone} color="black" />{" "}
                    +1(123)-456-7890
                  </a>
                </li>
                <li>
                  <a style={{ textDecoration: "none", color: lightText }}>
                    <FontAwesomeIcon icon={faPhone} color="black" />{" "}
                    +1(123)-456-7890
                  </a>
                </li>
                <li>
                  <a
                    style={{ textDecoration: "none", color: lightText }}
                    href="mailto:info@mydomain.com"
                  >
                    <FontAwesomeIcon icon={faGlobe} color="black" />{" "}
                    info@mydomain.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
