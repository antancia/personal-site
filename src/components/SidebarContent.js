import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  sidebar: {
    width: 256,
    height: '100%',
  },
  sidebarLink: {
    display: 'block',
    padding: '16px 0px',
    color: '#757575',
    textDecoration: 'none',
  },
  divider: {
    margin: '8px 0',
    height: 1,
    backgroundColor: '#757575',
  },
  content: {
    padding: '16px',
    height: '100%',
    backgroundColor: 'white',
  },
};

const SidebarContent = () => {
  return (
    <div className="SidebarContent" style={styles.content}>
      <p>Sidebar stuff is here</p>
    </div>
  );
}

export default SidebarContent;
