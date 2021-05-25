import React from "react";
import { connect } from "react-redux";

import "./header.styles.scss";

import InstagramLogo from "../../Assets/instagram_logo.png";
import AbdoPhoto from "../../Assets/abdo_photo.jpeg";

class Header extends React.Component {
  render() {
    const { currentUser } = this.props;
    const profilImageUrl = currentUser ? currentUser.profil_image : null;
    return (
      <div className="header">
        <div className="logo-container">
          <img src={InstagramLogo} alt="insta logo" />
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
          <img src={profilImageUrl} alt="profil pic" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});
export default connect(mapStateToProps)(Header);
