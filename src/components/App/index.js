
// == Imports
import { useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';

// Import components
import Home from 'src/components/Home';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Login from 'src/components/Login';

// import styles
import './styles.scss';

// == Composant
export default function App() {
  // == global state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
      <Header 
        adminInfo={adminInfo}
        isLogged={isLogged}
        logOut={logOut}
      />
      <Login
        emailValue={email}
        passwordValue={password}
        onChangeEmailValue={setEmail}
        onChangePasswordValue={setPassword}
        onSubmitForm={authenticateUser}
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
