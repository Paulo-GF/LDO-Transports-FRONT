import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
// import { useQuill } from 'react-quilljs';
import 'react-quill/dist/quill.snow.css';
// <link rel="stylesheet" href="https://unpkg.com/react-quill@1.3.3/dist/quill.snow.css">

/* <ReactQuill theme="snow" value={value} onChange={setValue}/> */

// import styles
// import './styles.scss';

export default function Createoffer({
  titleValue,
  descriptionValue,
  regionValue,
  cityValue,
  typeValue,
  onChangeTitleValue,
  onChangeRegionValue,
  onChangeCityValue,
  onChangeTypeValue,
  onChangeDescriptionValue,
  onSubmitForm,
}) {
  // local state
  const [redirected, setRedirected] = useState(false);
  // const [quillDescription, setQuilldescription] = useState();

  // const { quill, quillRef } = useQuill();

  // useEffect(() => {
  //   if (quill) {
  //     quill.on('text-change', ( delta, oldDelta, source) => {
  //       // console.log('Text change!');
  //       // console.log(quill.getText()); // Get text only
  //       // console.log(quill.getContents()); // Get delta contents
  //       // console.log(quill.root.innerHTML); // Get innerHTML using quill
  //       const descriptionHTML = quill.root.innerHTML;
  //       console.log(descriptionHTML);

  //       setQuilldescription(descriptionHTML);
  //     });
  //   }
  // }, [quill]);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitForm();
    setRedirected(!redirected);
  };

  if (redirected) {
    return (<Redirect to="/recrutement" />);
  }

  // console.log(quill);    // undefined > Quill Object
  // console.log(quillRef); // { current: undefined } > { current: Quill Editor Reference }

  return (
    <div id="offer" className="new-offer">
      <div className="new-offer-content">
        <button
          className="new-offer-closeButton"
          type="button"
          onClick={() => {
            setRedirected(!redirected);
          }}
        >X
        </button>
        <form
          className="new-offer-content-form"
          onSubmit={handleSubmit}
        >
          <input
            className="new-offer-content-form-input"
            type="text"
            name="title"
            value={titleValue}
            onChange={(event) => {
              onChangeTitleValue(event.target.value);
            }}
            placeholder="titre de l'offre"
          />
          <input
            className="new-offer-content-form-input"
            type="text"
            name="region"
            value={regionValue}
            onChange={(event) => {
              onChangeRegionValue(event.target.value);
            }}
            placeholder="région de l'offre"
          />
          <input
            className="new-offer-content-form-input"
            type="text"
            name="city"
            value={cityValue}
            onChange={(event) => {
              onChangeCityValue(event.target.value);
            }}
            placeholder="ville de l'offre"
          />
          <input
            className="new-offer-content-form-input"
            type="text"
            name="type"
            value={typeValue}
            onChange={(event) => {
              onChangeTypeValue(event.target.value);
            }}
            placeholder="type de l'offre"
          />
          {/* <div ref={quillRef} /> */}
          <ReactQuill
            className="new-offer-content-form-input"
            theme="snow"
            // type="text"
            // name="description"
            // rows="40"
            // cols="60"
            value={descriptionValue}
            onChange={(event) => {
              onChangeDescriptionValue(event);
            }}
            // placeholder="description de l'offre"
          />
          <button className="new-offer-content-form-button" type="submit">créer une nouvelle offre</button>
        </form>
      </div>
    </div>
  );
}

Createoffer.propTypes = {
  titleValue: PropTypes.string.isRequired,
  descriptionValue: PropTypes.string.isRequired,
  regionValue: PropTypes.string.isRequired,
  cityValue: PropTypes.string.isRequired,
  typeValue: PropTypes.string.isRequired,
  onChangeTitleValue: PropTypes.func.isRequired,
  onChangeRegionValue: PropTypes.func.isRequired,
  onChangeCityValue: PropTypes.func.isRequired,
  onChangeTypeValue: PropTypes.func.isRequired,
  onChangeDescriptionValue: PropTypes.func.isRequired,
  onSubmitForm: PropTypes.func.isRequired,
};
