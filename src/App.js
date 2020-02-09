import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './assets/style.scss';
import Navbar from './layout/Navbar';
import Home from './components/Home';
import QuestionList from './components/exam/QuestionList';

const App = () => {
  return (
    <div className="container-fluid">
        <Navbar />
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/exam" exact component={QuestionList} />
                </Switch>
            </Router>
    </div>
  );
}

export default App;
