import React from "react";

import "./storyItem.styles.scss";

class StoryItem extends React.Component {
  //   constructor(props) {
  //     super(this.props);
  //   }

  render() {
    const { username, imageUrl } = this.props;
    return (
      <div className="story-item ">
        <div className="story-border">
          <div className="inner-circle">
            <img src={imageUrl} alt={username} />
          </div>
        </div>
        <span>{username}</span>
      </div>
    );
  }
}
export default StoryItem;
