import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import './index.css';
import App from './App';
import songReducer from './redux/reducers/songReducer';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css';

const store = createStore(songReducer);

ReactDOM.render(<App store={store} />, document.getElementById('root'));
serviceWorker.unregister();
