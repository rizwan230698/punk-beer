import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import Favourite from './pages/favourite';
import Layout from './components/layout';

const App = () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/favourite" component={Favourite} />
      </Switch>
    </Layout>
  </Router>
);

export default App;
