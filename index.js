import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// pages
import NoteApp from './assets/components/NoteApp'
import ShareNote from './assets/components/ShareNote'
// css
import './assets/css/style.sass';
import 'element-theme-default';
// icon
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import {
  faStar,
  faFileAlt,
  faTrash,
  faPlus,
  faUser,
  faSortAlphaDownAlt,
  faEllipsisV,
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from '@fortawesome/free-solid-svg-icons';

library.add(fas, faStar, faFileAlt, faTrash, faPlus, faUser, faSortAlphaDownAlt, faEllipsisV, faAngleDoubleLeft, faAngleDoubleRight)
library.add(far, faStar)

ReactDOM.render((
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={NoteApp} />
        <Route exact path="/share-note" component={ShareNote} />
      </Switch>
    </Router>
  </Provider>
), document.getElementById('root'));
