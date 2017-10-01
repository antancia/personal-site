import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/SidebarContent.css';

const SidebarContent = (props) => {
  function closeSidebar() {
    props.onSetOpen(false);
  }

  return (
    <div className="SidebarContent">
      <div>
        <h2 className="SidebarContent-header">Harmony Dashut</h2>
      </div>
      <div>
        <Link to="/" onClick={closeSidebar}>Home</Link>
        <br />
        <Link to="/photos" onClick={closeSidebar}>Photos</Link>
        <br />
        <Link to="/about" onClick={closeSidebar}>About Me</Link>
      </div>
    </div>
  );
}

export default SidebarContent;
