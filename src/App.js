import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from './routing/PrivateRoute';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import Header from './components/layout/Header';

function App() {
  return (
    <Fragment>
        <BrowserRouter>
          <Header />
          <main className="container mx-auto mt-2">
            <Switch>
              <PrivateRoute exact path="/" component={IndexPage} >
              </PrivateRoute>
              <Route exact path="/login" component={LoginPage} />
            </Switch>
          </main>
        </BrowserRouter>
    </Fragment>
  );
}

export default App;
