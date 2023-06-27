import React from 'react';
import Theaters from '../components/Theaters';
import './TheatersPage.css';
// import Footer from "../components/Appfooter";

const TheatersPage = () => {
  return (
    <div className="theaters-page">
      {/* <h1>Theaters Page</h1> */}
      <Theaters />
      {/* <Footer message='Register  With US , I Hope You Have Fun !'/> */}
    </div>
  );
};

export default TheatersPage;
