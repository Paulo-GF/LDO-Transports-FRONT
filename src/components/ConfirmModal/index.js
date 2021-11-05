// import styles
import './styles.scss';

export default function ConfirmModal() {
  return (
    <div className="confirmModal">
      <button type="button" className="confirmModal-closeButton">X</button>
      <div className="confirmModal-container">
        <p className="confirmModal-container-text"> message </p>
        <button type="button" className="confirmModal-container-button" />
      </div>
    </div>
  );
}
