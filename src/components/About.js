import React from 'react';
import '../styles/About.css'

const About = () => {
  return (
    <div className="About">
      <p>I'm a photographer, maker, and developer. I created this website
      using React. Currently I live in Brooklyn. Contact me using various social
      media.</p>
      <a href="https://www.instagram.com/harmony_dashut/">
        <i className="fa fa-instagram icon" aria-hidden="true"></i>
      </a>
      <a href="https://twitter.com/harmonydashut">
        <i className="fa fa-twitter-square icon" aria-hidden="true"></i>
      </a>
    </div>
  );
}

export default About;
