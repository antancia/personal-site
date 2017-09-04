import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="Name-header">
        <h2>Harmony Dashut</h2>
      </div>
      <div>
        <Link to="/">
          Home
        </Link>
        <br />
        <Link to="/photos">
          Photos
        </Link>
        <br />
        <Link to="/about">
          About Me
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
