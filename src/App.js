import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Routes} from './routes/Routes';

import './assets/style.scss';
import Navbar from './layout/Navbar';

const App = () => {
  return (
    <div className="container-fluid">
        
        <Router>
          <Navbar />
            <Switch>
              {
                Routes.map(r => <Route path={r.path} exact={r.exact} component={r.component} />)
              }
            </Switch>
        </Router>
    </div>
  );
}

export default App;
