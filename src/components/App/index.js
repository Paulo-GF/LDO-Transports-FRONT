// == Imports
import { useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';

// Import components
import Home from 'src/components/Home';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Signin from 'src/components/Signin';
import Admin from 'src/components/Admin';

// import styles
import './styles.scss';

// == Composant
export default function App() {
  // == global state
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  // password modified: "passwordConfirm"
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

  const authenticateUser = () => {
    console.log('authenticate');
    // todo : waiting for the road from API
    // axios.post('http://localhost:5050/admin-signin', {
    //   mail,
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
      <Header
        adminInfo={adminInfo}
        isLogged={isLogged}
        logOut={logOut}
      />
      <Switch>
        <Route exact path="/admin-signin">
          <Signin
            emailValue={mail}
            passwordValue={password}
            onChangeEmailValue={setMail}
            onChangePasswordValue={setPassword}
            onSubmitForm={authenticateUser}
          />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        {isLogged
        && (
        <Route path="/admin-logged">
          <Admin />
        </Route>
        )}
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
