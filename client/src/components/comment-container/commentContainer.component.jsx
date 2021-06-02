import "./commentContainer.styles.scss";

const CommentContainer = ({ user_name, content }) => (
  <div className="comment-container">
    <span className="user-name">{`${user_name} `}</span>
    <span className="content">{content}</span>
  </div>
);

export default CommentContainer;
