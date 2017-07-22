import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components';
import PersonalInfo from './containers/PersonalInfo';
import Location from './containers/Location';
import SocialNetworks from './containers/SocialNetworks';
import PictureChecking from './containers/PictureChecking';
import Profile from './containers/Profile';

import reducers from './reducers';

import './theme/bundle.scss';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
    <Provider store={store}>
        <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={PersonalInfo} />;
                <Route path="/location" component={Location} />
                <Route path="/networks" component={SocialNetworks} />
                <Route path="/checking" component={PictureChecking} />
                <Route path="/profile" component={Profile} />
            </Route>
        </Router>
    </Provider>
  , document.getElementById('react-root'));
