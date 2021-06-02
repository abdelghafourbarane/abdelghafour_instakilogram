import React from "react";

import "./storiesContainer.styles.scss";

import StoryItem from "../story-item/storyItem.component";

const storiesList = [
  {
    username: "Ronaldo",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg",
  },
  {
    username: "Messi",
    imageUrl:
      "https://images.beinsports.com/vz3DCYWzYzffDUa8YKznpFZ2d4g=/full-fit-in/1000x0/3796001-panoramic_PANOFCBCLVPL16052021_072.jpg",
  },
  {
    username: "Benzema",
    imageUrl:
      "https://s.france24.com/media/display/f3fe4c24-50e1-11eb-af10-005056a964fe/w:1280/p:1x1/BenZema%200701.jpg",
  },
  {
    username: "Lewandowski",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/7/7c/JAP-POL_%286%29_%28cropped%29.jpg",
  },
  {
    username: "Modric",
    imageUrl:
      "https://acefootball.com/wp-content/uploads/2020/10/Luka-Modric-Real-Madrid.jpg",
  },
  {
    username: "Kroos",
    imageUrl:
      "https://images.daznservices.com/di/library/GOAL/f2/b6/toni-kroos-alemania_161h509ihxni61dfkz2jjqxgqd.jpg?t=-2073460248&quality=60&w=1200&h=800",
  },
  {
    username: "mo_salah",
    imageUrl:
      "https://www.africatopsports.com/wp-content/uploads/2021/04/Mohamed-Salah.jpg",
  },
];

class StoriesContainer extends React.Component {
  render() {
    return (
      <div className="stories-container">
        {storiesList.map((item) => (
          <StoryItem username={item.username} imageUrl={item.imageUrl} />
        ))}
      </div>
    );
  }
}

export default StoriesContainer;
