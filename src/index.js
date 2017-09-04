import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';
import {
  App,
  Home,
  Carousel,
  About,
} from './components';

ReactDOM.render((
  <HashRouter>
  <App>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/photos" component={Carousel} />
      <Route path="/about" component={About} />
    </Switch>
  </App>
  </HashRouter>
), document.getElementById('root'));
registerServiceWorker();
