import React from "react";
import './homepage.styles.scss';

const Homepage = () => (
  <div className="homepage">
    <div className="directory-menu">
      <div className="menu-item">
          <div className="content">
              <h1 className="title">AMERICAN FOOTBALL</h1>
              <span className="subtitle">SHOP NOW</span>
          </div>
      </div>
      <div className="menu-item">
          <div className="content">
              <h1 className="title">SOCCER</h1>
              <span className="subtitle">SHOP NOW</span>
          </div>
      </div>
      <div className="menu-item">
          <div className="content">
              <h1 className="title">ICE HOCKEY</h1>
              <span className="subtitle">SHOP NOW</span>
          </div>
      </div>
      <div className="menu-item">
          <div className="content">
              <h1 className="title">RUGBY</h1>
              <span className="subtitle">SHOP NOW</span>
          </div>
      </div>
      <div className="menu-item">
          <div className="content">
              <h1 className="title">CRICKET</h1>
              <span className="subtitle">SHOP NOW</span>
          </div>
      </div>
    </div>
  </div>
);

export default Homepage;
