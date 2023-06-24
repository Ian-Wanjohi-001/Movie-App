import AppBar from '../components/Appbar';
import './profiledata.css';
import { RiUserFill, RiMailFill } from 'react-icons/ri';



const ProfileData = ({ user }) => {
  return (
    <>

    <div className="user-profile">
      <div className="avatar">
        <RiUserFill className="avatar-icon" />
      </div>
      <div className="user-info">
        <h2>{user.userName}</h2>
        <p>
          <RiMailFill className="info-icon" />
          {user.email}
        </p>
        <p>Movie Preferences: {user.moviePreferences.join(', ')}</p>
        <h3>Movie Recommendation:</h3>
        <p>{user.movieRecommendation}</p>
      </div>
    </div>
    </>
  );
};

export default ProfileData;
