import React from "react";
import { connect } from "react-redux";

import "./header.styles.scss";

import { toggleDropDownProfile } from "../../redux/dropdown/dropdown.actions";

import InstagramLogo from "../../Assets/instagram_logo.png";

class Header extends React.Component {
  render() {
    const { currentUser } = this.props;
    const profilImageUrl = currentUser ? currentUser.profil_image : null;
    const { toggleDropDown } = this.props;
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
          <div>
            <img
              src={profilImageUrl}
              alt="profil pic"
              onClick={() => toggleDropDown()}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  toggleDropDown: () => dispatch(toggleDropDownProfile()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
