import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import "./homepage.styles.scss";

import PhotosContainer from "../../components/photos-container/photosContainer.component";
import FollowContainer from "../../components/follow-container/followContainer.component";
import ProfileDropDown from "../../components/profil-dropdown/profileDropDown.component";

const HomePage = ({ currentUser, profileDropDownHidden }) =>
  currentUser ? (
    <div className="homepage">
      <div className="main-container">
        <div className="photos-section">
          <PhotosContainer />
        </div>
        <div className="follow-cont">
          <FollowContainer />
        </div>
        {profileDropDownHidden ? null : <ProfileDropDown />}
      </div>
    </div>
  ) : (
    <Redirect to="/signin" />
  );

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUserDB,
  profileDropDownHidden: state.dropdown.hiddenDropDownProfile,
});

export default connect(mapStateToProps)(HomePage);
