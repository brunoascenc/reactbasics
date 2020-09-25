import React from "react";
import "../App.css";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { IconContext } from "react-icons";
import banner from "../img/iphones.png";

export default function LandingPage() {
  return (
    <div className="landing-page">
        <div className="bg-left">
          <div className="landing-txt">
            <h2>
              Iphone <span>11</span>
            </h2>
            <button>Compre ja</button>
          </div>
        </div>
        <div className="bg-right">
          <div className="socials">
            <ul>
              <IconContext.Provider
                value={{
                  style: { fontSize: "25px" },
                }}
              >
                <li>
                  <FaInstagram />
                </li>
                <li>
                  <FaFacebook />
                </li>
                <li>
                  <FaTwitter />
                </li>
              </IconContext.Provider>
            </ul>
          </div>
        </div>
        <div className="landing-img">
          <img src={banner} alt="iphones" />
        </div>
    </div>
  );
}
