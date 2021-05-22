import "./homepage.styles.scss";

import Header from "../../components/header/header.component";
import PhotosContainer from "../../components/photos-container/photosContainer.component";

const HomePage = () => (
  <div className="homepage">
    <Header />
    <div className="main-container">
      <div className="photos-section">
        <PhotosContainer />
      </div>
      <div>friends section</div>
    </div>
  </div>
);

export default HomePage;
