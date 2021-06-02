import React from "react";
import { connect } from "react-redux";

import StoriesContainer from "../stories_container/storiesContainer.component";
import PhotoContainer from "../photo-container/photoContainer.component";

import { fetchPhotos } from "../../redux/photos/photos.actions";

import "./photosContainer.styles.scss";

class PhotosContainer extends React.Component {
  componentDidMount() {
    const { fetchPhotos } = this.props;
    fetchPhotos();
  }
  render() {
    const publications = this.props.photos ? this.props.photos.photos : [];
    return (
      <div className="photos-container">
        <StoriesContainer />
        <div className="photos-list">
          {publications.map((publication) => (
            <PhotoContainer {...publication} />
          ))}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchPhotos: () => dispatch(fetchPhotos()),
});

const mapStateToProps = (state) => ({
  photos: state.photos,
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotosContainer);
