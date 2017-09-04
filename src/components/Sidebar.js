import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="Name-header">
        <h2>Harmony Dashut</h2>
        <Link to={'/photos'}><p>Photos</p></Link>
      </div>
    </div>
  );
}

export default Sidebar;
