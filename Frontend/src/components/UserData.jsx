
import ProfileData from "../components/ProfileData";

const UserData= () => {
 
  const user = {
    userName: 'John Doe',
    email: 'john.doe@example.com',
    moviePreferences: ['Action', 'Thriller'],
    movieRecommendation: 'Inception',
  };

  return (
    <div>
      <ProfileData user={user} />
    </div>
  );
};

export default UserData;
