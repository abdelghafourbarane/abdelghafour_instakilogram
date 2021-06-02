import React from "react";
import { connect } from "react-redux";

import "./followContainer.styles.scss";
import SuggestionContainer from "../suggestion-container/suggestionContainer.component";

import { fetchSuggestions } from "../../redux/suggestions/suggestions.actions";

class FollowContainer extends React.Component {
  componentDidMount() {
    const { fetchSuggesions } = this.props;
    fetchSuggesions();
  }

  render() {
    let [username, profilPhoto, fullName] = this.props.currentUser
      ? [
          this.props.currentUser.username,
          this.props.currentUser.profil_image,
          this.props.currentUser.fullName,
        ]
      : [null];
    const { suggestions } = this.props;

    return (
      <div className="follow-container">
        <div className="current-user-container">
          <div>
            <img src={profilPhoto} alt={username} />
            <div>
              <span className="username">{username}</span>
              <span className="fullName">{fullName}</span>
            </div>
          </div>
          <span className="switch-text">Switch</span>
        </div>
        <div className="suggestions-container">
          <div class="suggestions-header">
            <span> Suggestions For You</span>
            <span>See All</span>
          </div>

          <div className="suggestions-list-container">
            {suggestions.map((suggestion) => (
              <SuggestionContainer {...suggestion} />
            ))}
          </div>
        </div>
        <div className="footer">
          <div>
            <span>About</span>
            <span> . Help</span>
            <span> . Press</span>
            <span> . API</span>
            <span> . Jobs</span>
            <span> . Privacy</span>
            <span> . Terms</span>
            <span> . Locations</span>
            <span> . Top Accounts</span>
            <span> . Hashtags</span>
            <span> . Language</span>
          </div>
          <span>© 2021 INSTAGRAM FROM FACEBOOK</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  suggestions: state.suggestions.suggestions,
});

const mapDispatchToProps = (dispatch) => ({
  fetchSuggesions: () => dispatch(fetchSuggestions()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FollowContainer);
