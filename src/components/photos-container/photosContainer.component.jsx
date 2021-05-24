import React from "react";

import StoriesContainer from "../stories_container/storiesContainer.component";
import PhotoContainer from "../photo-container/photoContainer.component";

import "./photosContainer.styles.scss";

import PUBLICATIONS from "./photosContainer.data";

class PhotosContainer extends React.Component {
  render() {
    return (
      <div className="photos-container">
        <StoriesContainer />
        <div className="photos-list">
          {PUBLICATIONS.map((publication) => (
            <PhotoContainer {...publication} />
          ))}
        </div>
      </div>
    );
  }
}

export default PhotosContainer;
