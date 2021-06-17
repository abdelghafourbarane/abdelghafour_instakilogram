import { connect } from "react-redux";
import { Redirect } from "react-router";

import SignInForm from "../../components/sign-in-form/signIn.component";
import PhoneImage from "../../Assets/phone_image.png";
import Footer from "../../components/footer/footer.component";

import "./signInPage.styles.scss";

const SignInPage = ({ currentUser }) =>
  currentUser ? (
    <Redirect to="/" />
  ) : (
    <div className="sign-in-page">
      <div className="main-container">
        <div className="sign-in-image">
          <img src={PhoneImage} alt="phones" />
        </div>
        <SignInForm />
      </div>
      <div className="footer-sign-in">
        <Footer />
      </div>
    </div>
  );

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUserDB,
});

export default connect(mapStateToProps)(SignInPage);
