import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';
import {
  App,
  Home,
  Sidebar,
  Carousel
} from './components';

ReactDOM.render((
  <HashRouter>
  <App>
    <Sidebar />
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/photos" component={Carousel} />
    </Switch>
  </App>
  </HashRouter>
), document.getElementById('root'));
registerServiceWorker();
