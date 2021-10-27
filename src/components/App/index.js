// == Imports
import { useState, useEffect } from 'react';

// import components
import Home from 'src/components/Home';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Login from 'src/components/Login';

// import { Switch, Route } from 'react-router-dom';

// import styles
import './styles.scss';

// == Composant
export default function App() {
  return (
    <div className="app">
      <Header />
      <Login />
      <Home />
      <Footer />
    </div>
  );
}

/*
To add later on, freshly baked
<Switch>
  <Route exact path="/">
    <Home />
  </Route>
  <Route exact path="/recrutement">
    <Recrutement />
  </Route>
  <Route exact path="/contact">
    <Contact />
  </Route>
  {isLogged && (
    <Route exact path="/admin-logged">
      <AdminPage />
    </Route>
  )}
</Switch>
*/
