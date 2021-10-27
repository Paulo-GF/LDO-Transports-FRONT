// == Imports
import { useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import axios from 'axios';

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
  // == global state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const authenticateUser = () => {
    console.log('authenticate');
    // todo : waiting for the road from API
    // axios.post('http://localhost:port/admin-signin', {
    //   email,
    //   password,
    // })
    //   .then((response) => {
    //    console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  return (
    <div className="app">
      <Header />
      <Login
        emailValue={email}
        passwordValue={password}
        onChangeEmailValue={setEmail}
        onChangePasswordValue={setPassword}
        onSubmitForm={authenticateUser}
      />
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
