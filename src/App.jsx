import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Component from '~components/Component';
import ScrollToTop from "~components/ScrollToTop";

const App = () => (
    <div className="App">
        <Router>
            <ScrollToTop />

            <header className="App-header">
                <h1 className="App-title">Welcome to React</h1>
            </header>
            <Component />
        </Router>
    </div>
);

export default App;
