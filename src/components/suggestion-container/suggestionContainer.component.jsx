import "./suggestionContainer.styles.scss";

const SuggestionContainer = ({ username, profil_image }) => (
  <div className="suggestion-container">
    <div>
      <img src={profil_image} />
      <div>
        <span className="username">{username}</span>
        <span>Follows you</span>
      </div>
    </div>
    <span className="follow-link">Follow</span>
  </div>
);

export default SuggestionContainer;
