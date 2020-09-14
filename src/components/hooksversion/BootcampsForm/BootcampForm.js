import React, { useState, useEffect } from "react";
import Card from "../card/card";
const BootcampForm = React.memo((props) => {
  const [bootcampName, setBootcampName] = useState("");
  const [bootcampDescription, setBootcampDescription] = useState("");
  const [bootcampEmail, setBootcampEmail] = useState("");
  const [bootcampPhone, setBootcampPhone] = useState("");
  const [bootcampWebsite, setBootcampWebsite] = useState("");
  //in functional components tine locul la lifecycle hooks din components
  //si se pun ca al doilea argumnt dependintele
  //!daca nu pui al doilea argument se va trigarui mereu, la fiecare re-render
  useEffect(() => {
    console.log(
      bootcampDescription,
      bootcampName,
      bootcampPhone,
      bootcampEmail,
      bootcampWebsite,
      "mystate"
    );
  });
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(event, "event");
    props.onAddBootcamp({
      name: bootcampName,
      email: bootcampEmail,
      description: bootcampDescription,
      phone: bootcampPhone,
      website: bootcampWebsite,
    });
  };
  return (
    <section className="bootcamp-form">
      <Card>
        {/* Div-urile de aici sunt Props.children din componenta Card */}
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="name">Name</label>
            <input
              onChange={(event) => {
                setBootcampName(event.target.value);
              }}
              type="text"
              id="name"
            />
          </div>
          <div className="form-control">
            <label htmlFor="name">Description</label>
            <input
              onChange={(event) => {
                setBootcampDescription(event.target.value);
              }}
              type="text"
              id="description"
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input
              onChange={(event) => {
                setBootcampEmail(event.target.value);
              }}
              type="text"
              id="email"
            />
          </div>
          <div className="form-control">
            <label htmlFor="phone">Phone</label>
            <input
              onChange={(event) => {
                setBootcampPhone(event.target.value);
              }}
              type="text"
              id="phone"
            />
          </div>
          <div className="form-control">
            <label htmlFor="website">WebSite</label>
            <input
              onChange={(event) => {
                setBootcampWebsite(event.target.value);
              }}
              type="text"
              id="website"
            />
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
