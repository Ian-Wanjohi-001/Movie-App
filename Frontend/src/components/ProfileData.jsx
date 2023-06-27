import { useContext } from 'react';
import { Context } from '../context/userContext/context';
import AppBar from '../components/Appbar';
import './profiledata.css';
import { RiUserFill, RiMailFill } from 'react-icons/ri';



const ProfileData = () => {

const {user} = useContext(Context);


  
  return (
    <>

    <div className="user-profile">
      <div className="avatar">
        <RiUserFill className="avatar-icon" />
      </div>
      <div className="user-info">
        <h2>{user.username}</h2>
        <p>
          <RiMailFill className="info-icon" />
          {user.email}
        </p>
        <p>Movie Preferences: {user.preferences}</p>
        <h3>Movie Recommendation:</h3>
        <p></p>
      </div>
    </div>
    </>
  );
};

export default ProfileData;
