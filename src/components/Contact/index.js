import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import colibrimail from 'src/assets/colibriedited.jpg';

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
  UIMessage,
  setUIMessage,
}) {
  const ref = useRef();

  // submit message and reset input file
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitForm();
    ref.current.value = '';
  };

  // reset ui message
  useEffect(() => {
    setUIMessage('');
  }, []);

  return (
    <div>
      <div className="contact">
        <div className="contact-image">
          <img src={colibrimail} alt="colibri mail" className="contact-image-picture" />
        </div>
        <div className="contact-content">
          <form
            className="contact-content-form"
            onSubmit={handleSubmit}
          >
            <label htmlFor="mail">Email
              <input
                className="contact-content-form-input"
                type="text"
                required
                name="mail"
                pattern="^[^@\s]+@[^@\s]+\.[^@\s]+$"
                value={mailValue}
                onChange={(event) => {
                  onChangeMailValue(event.target.value);
                }}
                placeholder="Votre adresse e-mail"
              />
            </label>
            <label htmlFor="firstname">Prénom
              <input
                className="contact-content-form-input"
                type="text"
                required
                name="firstName"
                value={firstNameValue}
                onChange={(event) => {
                  onChangeFirstNameValue(event.target.value);
                }}
                placeholder="Votre prénom"
              />
            </label>
            <label htmlFor="lastname">Nom
              <input
                className="contact-content-form-input"
                type="text"
                required
                name="lastName"
                value={lastNameValue}
                onChange={(event) => {
                  onChangeLastNameValue(event.target.value);
                }}
                placeholder="Votre nom"
              />
            </label>
            <label htmlFor="subject">Sujet
              <input
                className="contact-content-form-input"
                type="text"
                required
                name="subject"
                value={subjectValue}
                onChange={(event) => {
                  onChangeSubjectValue(event.target.value);
                }}
                placeholder="Sujet de votre message"
              />
            </label>
            <label htmlFor="message">Message
              <textarea
                className="contact-content-form-input"
                type="text"
                required
                name="message"
                rows="3"
                cols="30"
                value={messageValue}
                onChange={(event) => {
                  onChangeMessageValue(event.target.value);
                }}
                placeholder="Votre message"
              />
            </label>
            <label htmlFor="file">Ajouter un fichier
              <input
                className="contact-content-form-input"
                type="file"
                name="file"
                ref={ref}
                onChange={(event) => {
                  onChangeFileValue(event.target.files);
                }}
                placeholder="Joindre un fichier"
              />
            </label>
            <button className="contact-content-form-button" type="submit">Envoyer votre message</button>
            {UIMessage && (<h2 className="message">{ UIMessage }</h2>)}
          </form>
        </div>
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
  UIMessage: PropTypes.string,
  setUIMessage: PropTypes.func,
};

Contact.defaultProps = {
  UIMessage: null,
  setUIMessage: null,
};
