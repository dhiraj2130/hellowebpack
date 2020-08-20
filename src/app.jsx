import { hot } from 'react-hot-loader/root';
import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './counter.jsx';

const App = () => <Counter />;

const HotReloadingApp = hot(App);
ReactDOM.render(<HotReloadingApp />, document.getElementById('root'));
