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
import Legalnotices from 'src/components/Legalnotices';

import data from 'src/data';

// import styles
import './styles.scss';

// == Composant
export default function App() {
  // == global state
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordConfirm, setNewpasswordConfirm] = useState('');

  // fake data while we wait for the backend
  const [isLogged, setIsLogged] = useState(false);
  const [offers, setOffers] = useState([]);
  const [adminInfo, setAdminInfo] = useState('');

  const getIsLogged = () => {
    setIsLogged(false);
    /*
    axios.get('https://ldo-transports.herokuapp.com/:adminId')
      .then((response) => {
        setIsLogged(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    */
  };
  useEffect(getIsLogged);

  const logOut = () => {
    console.log('admin logged out');
    setIsLogged(false);
  };

  const getAdminInfo = () => {
    setAdminInfo('Michel');
    /*
    axios.get('https://ldo-transports.herokuapp.com/:adminId')
      .then((response) => {
        setAdminInfo(response.data.firstname);
      })
      .catch((error) => {
        console.log(error);
      });
    */
  };
  useEffect(getAdminInfo);

  const getOffers = () => {
    setOffers(data);
    /*
    axios.get('https://ldo-transports.herokuapp.com/recrutement')
      .then((response) => {
        setOffers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    */
  };

  useEffect(getOffers, []);
  /*
  const createOffer = () => {
    axios.post('https://ldo-transports.herokuapp.com/recrutement/add-job')
      .then((response) => {

      })
      .catch((error) => {
        console.log(error);
      });
  };

  */
  const deleteOffer = (event) => {
    const jobId = event.target.getAttribute('id');
    /*
    axios.delete(`https://ldo-transports.herokuapp.com/recrutement/${jobId}`)
      .then((response) => {

      })
      .catch((error) => {
        console.log(error);
      });
    */
  };

  // request to authenticate the admin
  const authenticateUser = () => {
    console.log('dans authenticate: post');
    axios.post('https://ldo-transports.herokuapp.com/admin-signin', {
      mail,
      password,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const authenticateUser = () => {
  //   console.log('dans authenticate');
  //   axios.post('https://ldo-transports.herokuapp.com/admin-signin', {
  //     headers: { 'X-Requested-With': 'XMLHttpRequest' },
  //     data: {
  //       mail,
  //       password,
  //     },
  //   })
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // const authenticateUser = () => {
  //   console.log('dans authenticate: get recrutement');
  //   axios.get('https://ldo-transports.herokuapp.com/recrutement')
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // request to change the password when admin is connected
  const changePassword = () => {
    console.log('changePassword');
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
        <Route exact path="/mentions-legales">
          <Legalnotices />
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
  <404 />
</Route>
*/
