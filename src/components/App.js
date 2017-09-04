import React from 'react';
import '../styles/App.css';

const App = props => {
  return (
    <div className="App">
      { props.children }
    </div>
  );
}

export default App;
