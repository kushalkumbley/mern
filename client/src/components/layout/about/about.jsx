import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="aboutContainer">
      <div className="row1">
        <h1>About Us</h1>
        <p>
          “VisArt: Visual Art Market” is a web application platform with an
          objective to provide a wide range of
        </p>
        <p>
          high-quality photographs, pictures, drawings, sculptures and crafts
          that meet the needs of a diverse audience
        </p>
      </div>

      <div className="row2">
        <h1>Our Mission</h1>
        <p>
          Our mission is to create a web platform where visual artists can
          showcase their work and monetize their content
        </p>
        <p>
          and also to make it possible for the users to browse the available
          artworks, pay and download or order the artwork.
        </p>
        <p>
          Our mission is to create a web platform where visual artists can
          showcase their work and monetize their content
        </p>
        <p>
          and also to make it possible for the users to browse the available
          artworks, pay and download or order the artwork.
        </p>
      </div>

      <div className="row3">
        <h1>Our Services</h1>
        <div className="services">
          <div>
            <i className="fa-solid fa-dolly"></i>
            <h1>Free Shipping</h1>
            <p>on orders above NRs. 5000</p>
          </div>

          <div>
            <i className="fa-solid fa-arrow-right-arrow-left"></i>
            <h1>Return Guarantee</h1>
            <p>within 30 days</p>
          </div>

          <div>
            <i className="fa-solid fa-phone-volume"></i>
            <h1>24/7 Support</h1>
            <p>anytime you need</p>
          </div>

          <div>
            <i class="fa-solid fa-file-shield"></i>
            <h1>Secure Payment</h1>
            <p>fast & safe checkout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
