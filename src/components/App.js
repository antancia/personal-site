import React from 'react';
import '../styles/App.css';
import SidebarContent from './SidebarContent';
import Sidebar from 'react-sidebar';

const mql = window.matchMedia(`(min-width: 800px)`);

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      mql: mql,
      docked: false,
      open: false,
    };

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.toggleOpen = this.toggleOpen.bind(this);
    this.onSetOpen = this.onSetOpen.bind(this);
  }

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
    this.setState({mql: mql, docked: mql.matches});
  }

  componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged);
  }

  onSetOpen(open) {
    this.setState({open: open});
  }

  mediaQueryChanged() {
    this.setState({
      mql: mql,
      docked: this.state.mql.matches,
    });
  }

  toggleOpen(ev) {
    this.setState({open: !this.state.open});

    if (ev) {
      ev.preventDefault();
    }
  }

  render() {
    const sidebar = <SidebarContent onSetOpen={this.onSetOpen} />;

    return (
      <div className="App">
        <Sidebar
          sidebar={sidebar}
          open={this.state.open}
          docked={this.state.docked}
          onSetOpen={this.onSetOpen}
          shadow={false}
        >
          {!this.state.docked &&
           <a onClick={this.toggleOpen} href="#">=</a>}
          { this.props.children }
        </Sidebar>
      </div>
  );
  }
}

export default App;
