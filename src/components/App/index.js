/* eslint-disable quotes */
/* eslint-disable no-alert */
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
import Notfound from 'src/components/Notfound';

// import styles
import './styles.scss';
import './quill.bubble.css';
import './quill.snow.css';

// == Component
export default function App() {
  // == global state
  // user
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  const [userId, setUserId] = useState(0);
  const [userFirstName, setUserFirstName] = useState('');
  const [accessToken, setAccessToken] = useState('');
  // all offers
  const [offers, setOffers] = useState([]);
  // one offer
  const [offer, setOffer] = useState({});
  // state to launch the request for all offers
  const [updateOffers, setUpdateOffers] = useState(false);
  // state to launch the request for one offer
  const [updateOneOffer, setUpdateOneOffer] = useState(false);

  // == global state == part of the state for crud
  // crud password
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordConfirm, setNewpasswordConfirm] = useState('');
  // crud offers info
  const [cityValue, setCityValue] = useState('');
  const [titleValue, setTitleValue] = useState('');
  const [regionValue, setRegionValue] = useState('');
  const [typeValue, setTypeValue] = useState('');
  const [descriptionValue, setDescriptionValue] = useState('');
  // contact/apply info
  const [firstNameValue, setFirstNameValue] = useState('');
  const [lastNameValue, setLastNameValue] = useState('');
  const [mailValue, setMailValue] = useState('');
  const [subjectValue, setSubjectValue] = useState('');
  const [messageValue, setMessageValue] = useState('');
  const [fileValue, setFileValue] = useState(null);
  const [phoneValue, setPhoneValue] = useState('');

  const [UIMessage, setUIMessage] = useState('');

  // function to logout the user
  const logOut = () => {
    setIsLogged(false);
    setAccessToken('');
  };

  // request to get all the job offers
  const getOffers = () => {
    axios.get('https://ldo-transports.herokuapp.com/recrutement')
      .then((response) => {
        setOffers(response.data);
      })
      .catch((error) => {
        console.log(error);
        window.alert(`Erreur lors de la récuperation des données`);
      });
  };

  // when app is mounted and when updateOffers changes : get all offers and update the app with them
  useEffect(getOffers, [updateOffers]);

  // request to get one job offer
  const getCertainOffer = (jobId) => {
    console.log(jobId);
    axios.get(`https://ldo-transports.herokuapp.com/recrutement/${jobId}`)
      .then((response) => {
        console.log(response.data);
        setOffer(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
        setTitleValue('');
        setRegionValue('');
        setTypeValue('');
        setDescriptionValue('');
        setCityValue('');
        setUpdateOffers(!updateOffers);
        setUIMessage('Votre offre a bien été crée !');
      })
      .catch((error) => {
        console.log(error);
        window.alert(`Erreur lors de la création de l'offre.`);
      });
  };

  // request to send a message
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

    axios.post('https://ldo-transports.herokuapp.com/contact', form)
      .then((response) => {
        setMailValue('');
        setSubjectValue('');
        setMessageValue('');
        setFileValue(null);
        setFirstNameValue('');
        setLastNameValue('');
        setUIMessage('Votre message a bien été envoyé !');
      })
      .catch((error) => {
        console.log(error);
        window.alert(`Erreur lors de l'envoi du message.`);
      });
  };

  // request to send application for a job offer
  const sendApplication = (event) => {
    const jobId = event.target.getAttribute('id');
    const jobIdNumber = parseInt(jobId, 10);
    const concernedOffer = offers.find((job) => job.id === jobIdNumber);
    const offerURL = `https://ldo-transports.netlify.app/recrutement/${jobId}`;
    const form = new FormData();
    if (fileValue) {
      form.append('file', fileValue[0]);
    }
    form.append('userMail', mailValue);
    form.append('firstName', firstNameValue);
    form.append('lastName', lastNameValue);
    form.append('phone', phoneValue);
    form.append('message', messageValue);
    form.append('jobId', jobId);
    form.append('offerURL', offerURL);
    form.append('offerTitle', concernedOffer.title);

    axios.post(`https://ldo-transports.herokuapp.com/recrutement/${jobId}`, form)
      .then((response) => {
        console.log(response);
        setMailValue('');
        setPhoneValue('');
        setMessageValue('');
        setFileValue(null);
        setFirstNameValue('');
        setLastNameValue('');
        setUIMessage('Votre candidature a bien été envoyée.');
      })
      .catch((error) => {
        console.log(error);
        window.alert(`Erreur lors de l'envoi de votre candidature.`);
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
        setUpdateOffers(!updateOffers);
      })
      .catch((error) => {
        console.log(error);
        window.alert(`Erreur lors de la suppression de l'annonce.`);
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
      })
      .catch((error) => {
        console.log(error);
        setUIMessage('Mail/Mot de passe incorrect.');
      });
  };

  // request to change the password when admin is connected
  const changePassword = () => {
    if (newPassword !== newPasswordConfirm) {
      setUIMessage('Le nouveau mot de passe et sa confirmation ne sont pas identiques.');
    }
    else {
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
          setUIMessage('Mot de passe modifé !');
          logOut();
        })
        .catch((error) => {
          console.log(error);
          setUIMessage(`Erreur lors de la modification du mot de passe`);
        });
    }
  };

  // request to update an offer
  const updateAnOffer = (id) => {
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
        setTitleValue('');
        setRegionValue('');
        setTypeValue('');
        setDescriptionValue('');
        setCityValue('');
        setUpdateOffers(!updateOffers);
        setUpdateOneOffer(!updateOneOffer);
      })
      .catch((error) => {
        console.log(error);
        window.alert(`Erreur lors de la modification de l'offre.`);
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
            UIMessage={UIMessage}
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
              UIMessage={UIMessage}
              setUIMessage={setUIMessage}
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
            getCertainOffer={getCertainOffer}
            deleteOffer={deleteOffer}
          />
        </Route>
        <Route exact path="/recrutement/:id">
          <Focusedoffer
            isLogged={isLogged}
            deleteOffer={deleteOffer}
            offer={offer}
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
            UIMessage={UIMessage}
            setUIMessage={setUIMessage}
            mailValue={mailValue}
            phoneValue={phoneValue}
            messageValue={messageValue}
            firstNameValue={firstNameValue}
            lastNameValue={lastNameValue}
            fileValue={fileValue}
            onChangeFirstNameValue={setFirstNameValue}
            onChangeLastNameValue={setLastNameValue}
            onChangeMailValue={setMailValue}
            onChangePhoneValue={setPhoneValue}
            onChangeMessageValue={setMessageValue}
            onChangeFileValue={setFileValue}
            onSubmitForm={sendApplication}
            getCertainOffer={getCertainOffer}
            updateOneOffer={updateOneOffer}
            setUpdateOneOffer={updateOneOffer}
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
            firstNameValue={firstNameValue}
            lastNameValue={lastNameValue}
            fileValue={fileValue}
            onChangeFirstNameValue={setFirstNameValue}
            onChangeLastNameValue={setLastNameValue}
            onChangeMailValue={setMailValue}
            onChangeSubjectValue={setSubjectValue}
            onChangeMessageValue={setMessageValue}
            onChangeFileValue={setFileValue}
            onSubmitForm={sendContactMessage}
            UIMessage={UIMessage}
            setUIMessage={setUIMessage}
          />
        </Route>
        <Route>
          <Notfound />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}
