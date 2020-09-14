import React, { useState, useEffect } from "react";
import Card from "../card/card";
const BootcampForm = React.memo((props) => {
  const [formState, setFormState] = useState({ name: "", description: "" });

  //in functional components tine locul la lifecycle hooks din components
  //si se pun ca al doilea argumnt dependintele
  //!daca nu pui al doilea argument se va trigarui mereu, la fiecare re-render
  useEffect(() => {
    console.log(formState, "mystate");
  });
  return (
    <section className="bootcamp-form">
      <Card>
        {/* Div-urile de aici sunt Props.children din componenta Card */}
        <form>
          <div className="form-control">
            <label htmlFor="name">Name</label>
            <input
              onChange={(event) => {
                //vrem ultima valoare tastata

                const newVal = event.target.value;
                setFormState((previousState) => ({
                  name: newVal,
                  description: previousState.description,
                }));
              }}
              type="text"
              id="name"
            />
          </div>
          <div className="form-control">
            <label htmlFor="name">Description</label>
            <input
              onChange={(event) => {
                //vrem ultima valoare tastata

                const newVal = event.target.value;
                setFormState((previousState) => ({
                  name: previousState.name,
                  description: newVal,
                }));
              }}
              type="text"
              id="description"
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" />
          </div>
          <div className="form-control">
            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone" />
          </div>
          <div className="form-control">
            <label htmlFor="website">WebSite</label>
            <input type="text" id="website" />
          </div>
          <div className="bootcamps-form__actions">
            <button type="submit">Add bootcamp</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default BootcampForm;
