import React from "react";

import "./commentInputContainer.styles.scss";

class CommentInputContainer extends React.Component {
  render() {
    return (
      <div className="comment-input-container">
        <form>
          <div>
            <i class="far fa-smile"></i>
            <input
              type="text"
              className="form-control the-input "
              placeholder="Add a comment..."
            />
          </div>
          <span className="post-comment-text">Post</span>
        </form>
      </div>
    );
  }
}

export default CommentInputContainer;
