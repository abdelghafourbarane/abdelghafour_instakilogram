import React from "react";

import "./header.styles.scss";

import InstagramLogo from "../../Assets/instagram_logo.png";
import AbdoPhoto from "../../Assets/abdo_photo.jpeg";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="logo-container">
          <img src={InstagramLogo} />
        </div>
        <div className="search-container">
          <input
            type="text"
            className="form-control "
            placeholder="&#xf002;  Search"
          />
        </div>
        <div className="profile-container">
          <i class="fas fa-home"></i>
          <i class="fas fa-paper-plane"></i>
          <i class="far fa-compass"></i>
          <i class="far fa-heart"></i>
          <img src={AbdoPhoto} />
        </div>
      </div>
    );
  }
}
export default Header;
