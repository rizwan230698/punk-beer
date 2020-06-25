import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { BeerProvider } from './context/beerProvider';
import { AuthProvider, AuthContext } from './context/authProvider';
import Home from './pages/home';
import Favourite from './pages/favourite';
import Layout from './components/layout';

const App = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <BeerProvider>
      <Router basename={`${process.env.PUBLIC_URL}/`}>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/favourite"
              render={() =>
                !currentUser ? <Redirect to="/" /> : <Favourite />
              }
            />
          </Switch>
        </Layout>
      </Router>
    </BeerProvider>
  );
};

export default () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);
