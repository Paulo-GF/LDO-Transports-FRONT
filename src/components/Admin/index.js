// import of the icon from the react-icon lib
import { FaUserCircle } from 'react-icons/fa';

export default function Admin() {
  // on submit, call API to modify the user password
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Admin: submit');
  };

  return (
    <div className="admin">
      <div className="admin-header">
        <FaUserCircle className="icon-anchor" />
        <p>Bonjour Admin </p>
      </div>
      <div className="admin-content">
        <form className="admin-content-form" onSubmit={handleSubmit}>
          <input
            className="admin-content-form-input"
            type="password"
            name="newPassword"
            value=""
            onChange={(event) => {
              console.log(event.target.value);
            }}
            placeholder="Nouveau mot de passe"
          />
          <input
            className="admin-content-form-input"
            type="password"
            name="newPasswordConfirm"
            value=""
            onChange={(event) => {
              console.log(event.target.value);
            }}
            placeholder="Confirmer mot de passe"
          />
          <ul>
            <li>entre 8 et 24 caractères</li>
            <li>au moins un caractère spécial</li>
            <li>au moins une majuscule, une minuscule et un chiffre </li>
          </ul>
          <button className="admin-content-form-button" type="submit">Modifier le mot de passe</button>
        </form>
      </div>
    </div>
  );
}
