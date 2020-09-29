import React, { Fragment } from "react";
import "./errorModal.css";

// Vrem sa afisam modalul cand am eroare pe callul de la DB
const ErrorModal = React.memo((props) => {
  return (
    <Fragment>
      <div className="backdrop" onClick={props.onCloseModal}>
        <div className="error-modal">
          <h2>An error ocurred</h2>
          <p>{props.children}</p>
          <div className="error-modal__actions">
            <button type="button" onClick={props.onCloseModal}>
              Ok
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
});

export default ErrorModal;
