import React from "react";
import PropTypes from "prop-types";

const Profile = ({ host }) => {
  return (
    <div className="Profile">
      <span className="profile-name">{host.name}</span>

      <img
        src={host.picture}
        alt={`Photo de ${host.name}`}
        className="profile-picture"
      />
    </div>
  );
};
Profile.propTypes = {
  host: PropTypes.shape({
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }).isRequired,
};
export default Profile;
