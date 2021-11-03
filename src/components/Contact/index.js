import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { useState } from 'react';

// import styles
import './styles.scss';

export default function Contact({
  mailValue,
  subjectValue,
  messageValue,
  fileValue,
  onChangeMailValue,
  onChangeSubjectValue,
  onChangeMessageValue,
  onChangeFileValue,
  onSubmitForm,
}) {
  // local state
  const [redirected, setRedirected] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitForm();
    setRedirected(!redirected);
  };

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
            value={mailValue}
            onChange={(event) => {
              onChangeMailValue(event.target.value);
            }}
            placeholder="Votre adresse e-mail"
          />
          <input
            className="contact-content-form-input"
            type="text"
            name="subject"
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
            name="pdfFile"
            value={fileValue}
            onChange={(event) => {
              onChangeFileValue(event.target.value);
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
  subjectValue: PropTypes.string.isRequired,
  messageValue: PropTypes.string.isRequired,
  fileValue: PropTypes.any,
  onChangeMailValue: PropTypes.func.isRequired,
  onChangeSubjectValue: PropTypes.func.isRequired,
  onChangeMessageValue: PropTypes.func.isRequired,
  onChangeFileValue: PropTypes.func.isRequired,
  onSubmitForm: PropTypes.func.isRequired,
};

Contact.defaultProps = {
  fileValue: [],
};
