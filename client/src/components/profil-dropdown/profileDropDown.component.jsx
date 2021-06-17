import { connect } from "react-redux";

import { logoutStart } from "../../redux/user/user.actions";

import "./profileDropDown.styles.scss";

const ProfileDropDown = ({ logoutStart }) => (
  <div className="profile-drop-down-container">
    <div className="drop-down-element">
      <i class="far fa-user-circle"></i>
      <span>Profile</span>
    </div>

    <div className="drop-down-element">
      <i class="far fa-bookmark"></i>
      <span>Saved</span>
    </div>
    <div className="drop-down-element">
      <i class="fas fa-cog"></i>
      <span>Settings</span>
    </div>
    <div className="drop-down-element">
      <i class="fas fa-random"></i>
      <span>Switch Accounts</span>
    </div>
    <div className="drop-down-element" onClick={() => logoutStart()}>
      Logout
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  logoutStart: () => dispatch(logoutStart()),
});

export default connect(null, mapDispatchToProps)(ProfileDropDown);
