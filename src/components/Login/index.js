export default function Login() {
  return (
    <div className="login">
      <form className="login-form">
        <input
          type="email"
          name="email"
          value=""
          onChange={() => {
            console.log('email');
          }}
          placeholder="email"
        />
        <input
          type="pasword"
          name="password"
          value=""
          placeholder="mot de passe"
          onChange={() => {
            console.log('password');
          }}
        />
        <button type="submit">Se connecter</button>
      </form>
      <button type="button">Mot de passe oublié</button>
    </div>
  );
}
