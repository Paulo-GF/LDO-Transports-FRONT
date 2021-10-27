// Import
// import axios from 'axios';
import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

// Import components
import Home from 'src/components/Home';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

// Import style
import './styles.scss';

// Composant
export default function App() {
  // fake data while we wait for the backend
  const [isLogged, setIsLogged] = useState(true);
  const adminInfo = 'Michel';
  const logOut = () => {
    console.log('admin logged out');
  };
  /*
  skeleton to implement/complete when the backend is ready
  const adminInfo = () => {
    axios.get('')
      .then((response) => {
        setIsLogged(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
*/

  return (
    <div className="app">
      <Header
        adminInfo={adminInfo}
        isLogged={isLogged}
        logOut={logOut}
      />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

/*
To add later on when all pages are ready

<Route exact path="/recrutement">
  <Recrutement />
</Route>
<Route exact path="/contact">
  <Contact />
</Route>

ternary expression to only allow access to the admin route if admin logged
{isLogged && (
  <Route exact path="/admin-logged">
    <AdminPage />
  </Route>
)}

<Route>
  <LegalNotices />
<Route >
  <404 />
</Route>
*/
