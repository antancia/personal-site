import React from 'react';
import '../styles/App.css';
import Sidebar from './Sidebar';

const App = props => {
  return (
    <div className="App">
      <Sidebar />
      { props.children }
    </div>
  );
}

export default App;
