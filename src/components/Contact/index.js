import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { useState } from 'react';

// import styles
import './styles.scss';

export default function Contact({
  mailValue,
  firstNameValue,
  lastNameValue,
  subjectValue,
  messageValue,
  onChangeMailValue,
  onChangeFirstNameValue,
  onChangeLastNameValue,
  onChangeSubjectValue,
  onChangeMessageValue,
  onChangeFileValue,
  onSubmitForm,
}) {
  // local state pour le redirect
  const [redirected, setRedirected] = useState(false);

  // submit func plus redirect state modification
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitForm();
    setRedirected(!redirected);
  };

  // to execute the redirection on submit
  if (redirected) {
    return (<Redirect to="/" />);
  }

  return (
    <div className="contact-form">
      <div className="contact-content">
        <form
          className="contact-content-form"
          onSubmit={handleSubmit}
        >
          <input
            className="contact-content-form-input"
            type="text"
            name="mail"
            required="required"
            value={mailValue}
            onChange={(event) => {
              onChangeMailValue(event.target.value);
            }}
            placeholder="Votre adresse e-mail"
          />
          <input
            className="contact-content-form-input"
            type="text"
            name="firstName"
            required="required"
            value={firstNameValue}
            onChange={(event) => {
              onChangeFirstNameValue(event.target.value);
            }}
            placeholder="Votre prénom"
          />
          <input
            className="contact-content-form-input"
            type="text"
            name="lastName"
            required="required"
            value={lastNameValue}
            onChange={(event) => {
              onChangeLastNameValue(event.target.value);
            }}
            placeholder="Votre nom"
          />
          <input
            className="contact-content-form-input"
            type="text"
            name="subject"
            required="required"
            value={subjectValue}
            onChange={(event) => {
              onChangeSubjectValue(event.target.value);
            }}
            placeholder="Sujet de votre message"
          />
          <textarea
            className="contact-content-form-input"
            type="text"
            name="message"
            required="required"
            rows="3"
            cols="30"
            value={messageValue}
            onChange={(event) => {
              onChangeMessageValue(event.target.value);
            }}
            placeholder="Votre message"
          />
          <input
            className="contact-content-form-input"
            type="file"
            name="file"
            onChange={(event) => {
              onChangeFileValue(event.target.files);
            }}
            placeholder="Joindre un fichier"
          />
          <button className="new-offer-form-button" type="submit">Envoyer votre message</button>
        </form>
      </div>
    </div>
  );
}

Contact.propTypes = {
  mailValue: PropTypes.string.isRequired,
  firstNameValue: PropTypes.string.isRequired,
  lastNameValue: PropTypes.string.isRequired,
  subjectValue: PropTypes.string.isRequired,
  messageValue: PropTypes.string.isRequired,
  onChangeMailValue: PropTypes.func.isRequired,
  onChangeFirstNameValue: PropTypes.func.isRequired,
  onChangeLastNameValue: PropTypes.func.isRequired,
  onChangeSubjectValue: PropTypes.func.isRequired,
  onChangeMessageValue: PropTypes.func.isRequired,
  onChangeFileValue: PropTypes.func.isRequired,
  onSubmitForm: PropTypes.func.isRequired,
};
