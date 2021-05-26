import "./homepage.styles.scss";

import Header from "../../components/header/header.component";
import PhotosContainer from "../../components/photos-container/photosContainer.component";
import FollowContainer from "../../components/follow-container/followContainer.component";

const HomePage = () => (
  <div className="homepage">
    <Header />

    <div className="main-container">
      <div className="photos-section">
        <PhotosContainer />
      </div>
      <div className="follow-cont">
        <FollowContainer />
      </div>
    </div>
  </div>
);

export default HomePage;
