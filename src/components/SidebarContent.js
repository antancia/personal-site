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
        {
          props.sidebarDocked &&
          <h2 className="SidebarContent-header">HARMONY DASHUT</h2>
        }
      </div>
      <div>
        <Link
          to="/"
          onClick={closeSidebar}
          className="SidebarContent-link"
        >home</Link>
        <br />
        <Link
          to="/photos"
          onClick={closeSidebar}
          className="SidebarContent-link"
        >photos</Link>
        <br />
        <Link
          to="/about"
          onClick={closeSidebar}
          className="SidebarContent-link"
        >about me</Link>
      </div>
    </div>
  );
}

export default SidebarContent;
