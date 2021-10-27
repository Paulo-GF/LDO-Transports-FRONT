// == Import
// import { Switch, Route } from 'react-router-dom';
import './styles.scss';

import Header from 'src/components/Header';

// To add later on
// import Home from 'src/components/Home';
// import Recrutement from 'src/components/Recrutement';
// import Contact from 'src/components/Contact';

// == Composant
const App = () => (
  <div className="app">
    <Header />
  </div>
);

// == Export
export default App;

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
