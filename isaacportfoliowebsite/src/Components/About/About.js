import React from 'react';
import ProfilePic from '../../isaac.jpg';

import './About.css';

export default class About extends React.Component {
  render() {
    return (
      <div className="AboutBG" id="About">
        <h1 className="AboutTitle">About Me</h1>
        <img src={ProfilePic} className="profilePic" alt='profile pic'/>
        <p className="AboutContent">I graduated from The College of Fine Arts (UNSW) with a Bachelor degree in Digital Media. I have a good eye for design and I aspire to be a front end web developer. For the past 2 years, I have been working alongside my wife and building our business: My Sister Bakes. </p>
        <p className="AboutContent">My work has given me experience and great exposure to lead a team of staff,  to communicate and work in teams, as well as being able to make independent business decisions as a boss. Now that the business is stable, I have decided to pursue my interest and venture into another industry (web development) that also requires the use of digital media.</p>
      </div>
    );
  }
}

About.propTypes = {
};
