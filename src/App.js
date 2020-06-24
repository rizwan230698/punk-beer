import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { BeerProvider } from './context/beerProvider';
import Home from './pages/home';
import Favourite from './pages/favourite';
import Layout from './components/layout';

const App = () => (
  <BeerProvider>
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/punk-beer/" component={Home} />
          <Route exact path="/punk-beer/favourite" component={Favourite} />
        </Switch>
      </Layout>
    </Router>
  </BeerProvider>
);

export default App;
