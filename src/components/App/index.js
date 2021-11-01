/* eslint-disable no-console */
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
import Joboffers from 'src/components/Joboffers';

// import styles
import './styles.scss';

// == Component
export default function App() {
  // == global state
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordConfirm, setNewpasswordConfirm] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  const [offers, setOffers] = useState([]);
  const [updateOffers, setUpdateOffers] = useState(false);
  const [userFirstName, setUserFirstName] = useState('');
  const [userId, setUserId] = useState(0);
  const [accessToken, setAccessToken] = useState('');

  // function to logout the user
  const logOut = () => {
    setIsLogged(false);
    setAccessToken('');
  };

  // request to get all the job offers
  const getOffers = () => {
    axios.get('https://ldo-transports.herokuapp.com/recrutement')
      .then((response) => {
        console.log(response);
        setOffers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // when app is mounted and when updateOffers changes : get all offers and update the app with them
  useEffect(getOffers, [updateOffers]);
  /*
  // request to add a job offer
  const createOffer = () => {
    axios.post('https://ldo-transports.herokuapp.com/recrutement/add-job')
      .then((response) => {

      })
      .catch((error) => {
        console.log(error);
      });
  };

  */
  // request to delete a job offer
  const deleteOffer = (event) => {
    const jobId = event.target.getAttribute('id');
    axios.delete(`https://ldo-transports.herokuapp.com/recrutement/${jobId}`, {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => {
        console.log(response);
        setUpdateOffers(!updateOffers);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // request to authenticate the user (admin)
  const authenticateUser = () => {
    axios.post('https://ldo-transports.herokuapp.com/admin-signin', {
      mail,
      password,
    })
      .then((response) => {
        setUserFirstName(response.data.userFirstName);
        setUserId(response.data.userId);
        setIsLogged(response.data.connected);
        setAccessToken(response.data.access_token);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // request to change the password when admin is connected
  const changePassword = () => {
    console.log('changePassword');
    console.log(accessToken);
    axios.patch(`https://ldo-transports.herokuapp.com/admin-logged/${userFirstName}`, {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
      userId,
      newPassword,
      newPasswordConfirm,
    })
      .then((response) => {
        console.log(response);
        logOut();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="app">
      <Header
        adminInfo={userFirstName}
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

        {/** ternary expression to only allow access to the admin route if admin logged */}
        {isLogged
        && (
        <Route path="/admin-logged">
          <Admin
            newPasswordValue={newPassword}
            confirmNewPasswordValue={newPasswordConfirm}
            onChangeNewPasswordValue={setNewPassword}
            onChangeConfirmNewPasswordValue={setNewpasswordConfirm}
            onSubmitForm={changePassword}
          />
        </Route>
        )}
        <Route exact path="/recrutement">
          <Joboffers
            isLogged={isLogged}
            offers={offers}
            deleteOffer={deleteOffer}
          />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

/*
To add later on when all pages are ready
<Route exact path="/contact">
  <Contact />
</Route>
<Route >
  <Createoffer
    createOffer={createOffer}
  />
</Route>

<Route>
  <Legalnotices />
<Route >
  <404 />
</Route>
*/
