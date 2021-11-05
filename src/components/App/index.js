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
import Focusedoffer from 'src/components/Focusedoffer';
import Legalnotices from 'src/components/Legalnotices';
import Createoffer from 'src/components/CreateOffer';
import Contact from 'src/components/Contact';

// import styles
import './styles.scss';

// == Component
export default function App() {
  // == global state
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogged, setIsLogged] = useState(true);
  const [offers, setOffers] = useState([]);
  const [updateOffers, setUpdateOffers] = useState(false);
  const [userFirstName, setUserFirstName] = useState('');
  const [userId, setUserId] = useState(0);
  const [accessToken, setAccessToken] = useState('');
  // global state == part of the state for crud
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordConfirm, setNewpasswordConfirm] = useState('');
  const [cityValue, setCityValue] = useState('');
  const [titleValue, setTitleValue] = useState('');
  const [regionValue, setRegionValue] = useState('');
  const [typeValue, setTypeValue] = useState('');
  const [descriptionValue, setDescriptionValue] = useState('');

  const [firstNameValue, setFirstNameValue] = useState('');
  const [lastNameValue, setLastNameValue] = useState('');
  const [mailValue, setMailValue] = useState('');
  const [subjectValue, setSubjectValue] = useState('');
  const [messageValue, setMessageValue] = useState('');
  const [fileValue, setFileValue] = useState(null);

  // function to logout the user
  const logOut = () => {
    setIsLogged(false);
    setAccessToken('');
  };

  // request to get all the job offers
  const getOffers = () => {
    axios.get('https://ldo-transports.herokuapp.com/recrutement')
      .then((response) => {
        // console.log(response);
        setOffers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // when app is mounted and when updateOffers changes : get all offers and update the app with them
  useEffect(getOffers, [updateOffers]);

  // request to add a job offer
  const createOffer = () => {
    axios.post('https://ldo-transports.herokuapp.com/recrutement/add-job', {
      title: titleValue,
      region: regionValue,
      type: typeValue,
      description: descriptionValue,
      city: cityValue,
    },
    {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => {
        console.log(response);
        setTitleValue('');
        setRegionValue('');
        setTypeValue('');
        setDescriptionValue('');
        setCityValue('');
        setUpdateOffers(!updateOffers);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const sendContactMessage = () => {
    const form = new FormData();
    if (fileValue) {
      form.append('file', fileValue[0]);
    }
    form.append('userMail', mailValue);
    form.append('firstName', firstNameValue);
    form.append('lastName', lastNameValue);
    form.append('subject', subjectValue);
    form.append('message', messageValue);
    console.log(firstNameValue);

    axios.post('https://ldo-transports.herokuapp.com/contact', form)
      .then((response) => {
        console.log(response);
        setMailValue('');
        setSubjectValue('');
        setMessageValue('');
        setFileValue();
        setFirstNameValue('');
        setLastNameValue('');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // request to delete a job offer
  const deleteOffer = (id) => {
    const jobId = id;
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
    axios.patch('https://ldo-transports.herokuapp.com/admin-logged', {
      userId,
      newPassword,
      newPasswordConfirm,
    },
    {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => {
        console.log(response);
        logOut();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // request to update an offer
  const updateAnOffer = (id) => {
    console.log(id, titleValue, regionValue, typeValue, descriptionValue, cityValue);
    axios.patch(`https://ldo-transports.herokuapp.com/recrutement/${id}`, {
      id: id,
      title: titleValue,
      region: regionValue,
      city: cityValue,
      type: typeValue,
      description: descriptionValue,
    },
    {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => {
        console.log(response);
        setTitleValue('');
        setRegionValue('');
        setTypeValue('');
        setDescriptionValue('');
        setCityValue('');
        setUpdateOffers(!updateOffers);
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
          {isLogged && (<Redirect to="/" />)}
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
        {isLogged ? (
          <Route path="/admin-logged">
            <Admin
              newPasswordValue={newPassword}
              confirmNewPasswordValue={newPasswordConfirm}
              onChangeNewPasswordValue={setNewPassword}
              onChangeConfirmNewPasswordValue={setNewpasswordConfirm}
              onSubmitForm={changePassword}
            />
          </Route>
        ) : (<Redirect from="/admin-logged" to="/" />
        )}
        {isLogged ? (
          <Route exact path="/add-job">
            <Createoffer
              titleValue={titleValue}
              descriptionValue={descriptionValue}
              regionValue={regionValue}
              cityValue={cityValue}
              typeValue={typeValue}
              onChangeTitleValue={setTitleValue}
              onChangeRegionValue={setRegionValue}
              onChangeCityValue={setCityValue}
              onChangeTypeValue={setTypeValue}
              onChangeDescriptionValue={setDescriptionValue}
              onSubmitForm={createOffer}
            />
          </Route>
        ) : (<Redirect from="/add-job" to="/" />
        )}
        <Route exact path="/recrutement">
          <Joboffers
            isLogged={isLogged}
            offers={offers}
            deleteOffer={deleteOffer}
          />
        </Route>
        <Route exact path="/recrutement/:id">
          <Focusedoffer
            isLogged={isLogged}
            deleteOffer={deleteOffer}
            offers={offers}
            titleValue={titleValue}
            descriptionValue={descriptionValue}
            regionValue={regionValue}
            cityValue={cityValue}
            typeValue={typeValue}
            onChangeTitleValue={setTitleValue}
            onChangeRegionValue={setRegionValue}
            onChangeCityValue={setCityValue}
            onChangeTypeValue={setTypeValue}
            onChangeDescriptionValue={setDescriptionValue}
            setChange={updateAnOffer}
          />
        </Route>
        <Route exact path="/mentions-legales">
          <Legalnotices />
        </Route>
        <Route exact path="/contact">
          <Contact
            mailValue={mailValue}
            subjectValue={subjectValue}
            messageValue={messageValue}
            fileValue={fileValue}
            onChangeFirstNameValue={setFirstNameValue}
            onChangeLastNameValue={setLastNameValue}
            onChangeMailValue={setMailValue}
            onChangeSubjectValue={setSubjectValue}
            onChangeMessageValue={setMessageValue}
            onChangeFileValue={setFileValue}
            onSubmitForm={sendContactMessage}
          />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}
/*
To add later on when all pages are ready
<Route >
  <404 />
</Route>
*/
