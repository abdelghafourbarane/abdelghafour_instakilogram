import React from "react";

import InstagramLogo from "../../Assets/instagram_logo.png";
import GooglePlayDownloadImage from "../../Assets/google_play_download_image.png";
import AppStoreDownloadImage from "../../Assets/appstore_download_image.png";

import "./signIn.styles.scss";

class SignInForm extends React.Component {
  render() {
    return (
      <div className="sign-container">
        <div className="sign-in-form-container">
          <div className="logo-container">
            <img className="logo-image" src={InstagramLogo} alt="insta logo" />
          </div>
          <form>
            <div className="inputs-container">
              <input
                type="text"
                className="form-control"
                placeholder="Phone number,username,or email"
              />
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              />
            </div>
            <button className="btn btn-primary btn-block">Log In</button>
          </form>
          <div className="or-lines-group">
            <div className="or-line"></div>
            <span>OR</span>
            <div className="or-line"></div>
          </div>
          <a href="/#">
            <span>
              <i class="fab fa-facebook-square"></i>{" "}
              <a href="/login/facebook">Login with facebook</a>
            </span>
          </a>
          <div style={{ marginTop: "24px", fontSize: "12px" }}>
            <a href="/#">Forgot password?</a>
          </div>
        </div>
        <div className="sign-up-container">
          <span>
            Don't have an acount? <a href="/#">Sign up</a>
          </span>
        </div>
        <span>Get the app.</span>
        <div className="download-container">
          <div>
            <img src={AppStoreDownloadImage} alt="appstore download pic" />
          </div>
          <div>
            <img src={GooglePlayDownloadImage} alt="google play download pic" />
          </div>
        </div>
      </div>
    );
  }
}

export default SignInForm;
