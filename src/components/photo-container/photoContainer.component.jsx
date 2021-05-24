import React from "react";

import CommentContainer from "../comment-container/commentContainer.component";
import CommentInputContainer from "../comment-input-container/commentInputContainer.component";

import "./photoContainer.styles.scss";

class PhotoContainer extends React.Component {
  render() {
    const { id, content, published_by, photo_url, comments, liked_by } =
      this.props;
    return (
      <div className="photo-container">
        <div className="photo-header">
          <div className="photo-owner-container">
            <img
              src={published_by.user_profil_photo_url}
              alt={published_by.user_name}
            />
            <span>{published_by.user_name}</span>
          </div>
          <i class="fas fa-ellipsis-h"></i>
        </div>
        <img src={photo_url} alt={published_by.user_name} />
        <div className="reactions-container">
          <div>
            <i className="far fa-heart"></i>
            <i className="far fa-comment"></i>
            <i className="far fa-paper-plane"></i>
          </div>
          <i className="far fa-bookmark"></i>
        </div>
        <span className="likes-number">{`${liked_by.length} likes`}</span>
        <div className="photo-content-container">
          <span>
            <span
              style={{ fontWeight: "600" }}
            >{`${published_by.user_name} `}</span>
            {content}
          </span>
        </div>
        <div className="comments-container">
          {comments.map(({ comment_content, commented_by }) => (
            <CommentContainer
              content={comment_content}
              user_name={commented_by}
            />
          ))}
        </div>
        <span className="comment-date">3 HOURS AGO</span>
        <CommentInputContainer />
      </div>
    );
  }
}

export default PhotoContainer;
