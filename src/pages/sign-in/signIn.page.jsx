import SignInForm from "../../components/sign-in-form/signIn.component";
import PhoneImage from "../../Assets/phone_image.png";
import Footer from "../../components/footer/footer.component";

import "./signInPage.styles.scss";

const SignInPage = () => (
  <div className="sign-in-page">
    <div className="main-container">
      <div className="sign-in-image">
        <img src={PhoneImage} />
      </div>
      <SignInForm />
    </div>
    <div className="footer-sign-in">
      <Footer />
    </div>
  </div>
);

export default SignInPage;
