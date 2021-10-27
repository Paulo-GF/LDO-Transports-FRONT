// import components
import Home from 'src/components/Home';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

// == Import
// import { Switch, Route } from 'react-router-dom';
import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Home />
    <Footer />
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
