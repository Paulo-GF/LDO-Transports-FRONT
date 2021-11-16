// == Imports
import { useState } from 'react';
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
import Loading from 'src/components/App/Loading';
import Aboutus from 'src/components/Aboutus';
import ScrollToTop from 'src/components/ScrollToTop';

// import styles
import './styles.scss';
import './quill.bubble.css';
import './quill.snow.css';

// == Component
export default function App() {
  // == global state
  // user infos
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  const [userFirstName, setUserFirstName] = useState('');
  const [userId, setUserId] = useState(0);
  const [accessToken, setAccessToken] = useState('');

  // offers info
  const [offers, setOffers] = useState([]);
  const [oneOffer, setOneOffer] = useState({});
  // value to display the request for all offers
  const [updateOffers, setUpdateOffers] = useState(false);

  // global state == part of the state for crud
  // password
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordConfirm, setNewpasswordConfirm] = useState('');
  // infos to create and modify an offer
  const [cityValue, setCityValue] = useState('');
  const [titleValue, setTitleValue] = useState('');
  const [regionValue, setRegionValue] = useState('');
  const [typeValue, setTypeValue] = useState('');
  const [descriptionValue, setDescriptionValue] = useState('');
  // infos to apply to an offer
  const [firstNameValue, setFirstNameValue] = useState('');
  const [lastNameValue, setLastNameValue] = useState('');
  const [mailValue, setMailValue] = useState('');
  const [messageValue, setMessageValue] = useState('');
  const [fileValue, setFileValue] = useState(null);
  const [phoneValue, setPhoneValue] = useState('');
  // infos to contact
  const [subjectContact, setSubjectContact] = useState('');
  const [firstNameContact, setFirstNameContact] = useState('');
  const [lastNameContact, setLastNameContact] = useState('');
  const [mailContact, setMailContact] = useState('');
  const [messageContact, setMessageContact] = useState('');
  const [fileContact, setFileContact] = useState(null);
  // Ui messages
  const [contactConfirm, setContactConfirm] = useState('');
  const [applyConfirm, setApplyConfirm] = useState('');
  // admin messages
  const [UIMessage, setUIMessage] = useState('');
  // value to set a redirect
  const [redirected, setRedirected] = useState(false);
  // if request for an offer catch an error
  const [errorOneOffer, setErrorOneOffer] = useState('');
  // value to display the loader
  const [loading, setLoading] = useState(false);

  // request to authenticate the user (admin)
  const authenticateUser = () => {
    setUIMessage('');
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
        setUIMessage('Mail/Mot de passe incorrect');
      });
  };

  // function to logout the user
  const logOut = () => {
    setIsLogged(false);
    setAccessToken('');
  };

  // request to change the password when admin is connected
  const changePassword = () => {
    setUIMessage('');
    if (newPassword !== newPasswordConfirm) {
      setUIMessage('Le nouveau mot de passe et sa confirmation ne sont pas identiques');
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
          setUIMessage('Erreur lors de la modification du mot de passe');
        });
    }
  };

  // request to get all the job offers
  const getOffers = () => {
    setLoading(true);
    setErrorOneOffer('');
    axios.get('https://ldo-transports.herokuapp.com/recrutement')
      .then((response) => {
        setOffers(response.data);
      })
      .catch((error) => {
        console.log(error);
        window.alert('Erreur lors de la récuperation des données');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // request to get one job offer
  const getCertainOffer = (jobId) => {
    if (Number.isNaN(jobId)) {
      setErrorOneOffer('test not a number');
      return;
    }
    setLoading(true);
    axios.get(`https://ldo-transports.herokuapp.com/recrutement/${jobId}`)
      .then((response) => {
        console.log(response.data);
        setOneOffer(response.data);
      })
      .catch((error) => {
        console.log(error);
        setErrorOneOffer(error.response);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // request to add a job offer
  const createOffer = () => {
    setLoading(true);
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
      })
      .catch((error) => {
        console.log(error);
        window.alert("Erreur lors de la création de l'offre");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // request to update an offer
  const updateAnOffer = (id) => {
    setLoading(true);
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
        setOneOffer(response.data);
      })
      .catch((error) => {
        console.log(error);
        window.alert("Erreur lors de la modification de l'offre");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // request to delete a job offer
  const deleteOffer = (id) => {
    setLoading(true);
    const jobId = id;
    axios.delete(`https://ldo-transports.herokuapp.com/recrutement/${jobId}`, {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => {
        setUpdateOffers(!updateOffers);
        setRedirected(true);
        setOneOffer({});
      })
      .catch((error) => {
        console.log(error);
        window.alert("Erreur lors de la suppression de l'annonce");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // send apply infos and document to ldo mail
  const sendApplication = () => {
    setLoading(true);
    setApplyConfirm('');
    const offerURL = `https://ldo-transports.netlify.app/recrutement/${oneOffer.id}`;
    const form = new FormData();
    if (fileValue) {
      form.append('file', fileValue[0]);
    }
    form.append('userMail', mailValue);
    form.append('firstName', firstNameValue);
    form.append('lastName', lastNameValue);
    form.append('phone', phoneValue);
    form.append('message', messageValue);
    form.append('jobId', oneOffer.id);
    form.append('offerURL', offerURL);
    form.append('offerTitle', oneOffer.title);

    axios.post(`https://ldo-transports.herokuapp.com/recrutement/${oneOffer.id}`, form)
      .then((response) => {
        setMailValue('');
        setPhoneValue('');
        setMessageValue('');
        setFileValue();
        setFirstNameValue('');
        setLastNameValue('');
        setApplyConfirm('Votre candidature a bien été envoyée');
      })
      .catch((error) => {
        console.log(error);
        setApplyConfirm("Il y a eu une erreur, votre candidature n'a pas pu être envoyée");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // send the contact message to ldo email
  const sendContactMessage = () => {
    setLoading(true);
    setContactConfirm('');
    const form = new FormData();
    if (fileContact) {
      form.append('file', fileContact[0]);
    }
    form.append('userMail', mailContact);
    form.append('firstName', firstNameContact);
    form.append('lastName', lastNameContact);
    form.append('subject', subjectContact);
    form.append('message', messageContact);

    axios.post('https://ldo-transports.herokuapp.com/contact', form)
      .then((response) => {
        setMailContact('');
        setSubjectContact('');
        setMessageContact('');
        setFileContact();
        setFirstNameContact('');
        setLastNameContact('');
        setContactConfirm('Votre message a bien été envoyé !');
      })
      .catch((error) => {
        console.log(error);
        setContactConfirm("Il y a eu une erreur, votre message n'a pas pu être envoyé");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="app">
      <Header
        adminInfo={userFirstName}
        isLogged={isLogged}
        logOut={logOut}
      />
      <ScrollToTop />
      {loading && <Loading />}
      <Switch>
        <Route exact path="/aboutus">
          <Aboutus />
        </Route>
        <Route exact path="/admin-signin">
          {/** ternary expression to only allow access to the signin route if admin logged */}
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
            getOffers={getOffers}
            updateOffers={updateOffers}
            redirected={redirected}
            setRedirected={setRedirected}
          />
        </Route>
        <Route exact path="/recrutement/:id">
          <Focusedoffer
            isLogged={isLogged}
            deleteOffer={deleteOffer}
            offer={oneOffer}
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
            UIMessage={applyConfirm}
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
            redirected={redirected}
            setRedirected={setRedirected}
            getError={errorOneOffer}
            setUIMessage={setApplyConfirm}
          />
        </Route>
        <Route exact path="/mentions-legales">
          <Legalnotices />
        </Route>
        <Route exact path="/contact">
          <Contact
            mailValue={mailContact}
            subjectValue={subjectContact}
            messageValue={messageContact}
            firstNameValue={firstNameContact}
            lastNameValue={lastNameContact}
            fileValue={fileContact}
            onChangeFirstNameValue={setFirstNameContact}
            onChangeLastNameValue={setLastNameContact}
            onChangeMailValue={setMailContact}
            onChangeSubjectValue={setSubjectContact}
            onChangeMessageValue={setMessageContact}
            onChangeFileValue={setFileContact}
            onSubmitForm={sendContactMessage}
            UIMessage={contactConfirm}
            setUIMessage={setContactConfirm}
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
