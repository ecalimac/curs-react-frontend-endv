import React, { useState, useEffect } from "react";
import FormHtml from "../FormHtml/FormHtml";

const FormValidation = ({ initialValues, validate }) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // useEffect(() => {
  //   console.log(values, errors, touched);
  // }, [errors, touched, values]);
  useEffect(() => {
    console.log(
      " :values,",
      values,
      " :errors,",
      errors,
      " :touched,",
      touched,
      " :submitted",
      submitted,
      "---state values"
    );
  });

  const handleChange = (event) => {
    console.log(event.target, "change event");
    const { name, value: newValue, type } = event.target;
    console.log(name, newValue, type, "| Event values: name, newValue, type");

    //+newValue make cast to numbers
    const value = type === "number" ? +newValue : newValue;

    setValues({
      ...values,
      [name]: value,
    });

    setTouched({
      ...touched,
      [name]: true,
    });
    // acest console.log va fi cu un pas in urma, iar stateComponent nu poate primi un al doilea parametru asa ca vom folosi useEffect
    // console.log(values, errors, touched, "state values");
  };

  const handleBlur = (event) => {
    console.log(event, "blur");
    const { name, value } = event.target;

    const error = validate[name](value);

    setErrors({
      ...errors,
      // if validate[name](value) doesn't return null it means that we have an error
      // in this case we want to merge a new object like {firstName: "Invalid characters"} in our error object (and for that we use spread operator
      // the new object is { [name] : error } but just if touched[name is true]
      ...(error && { [name]: touched[name] && error }),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event, "submit event");

    const formElements = Array.from(event.target);

    // formElements.map((l) => console.log(l));

    // first try: filter form elements by those wich contains ids
    // const inputs = formElements.filter((el) => el.id !== "");
    // console.log(inputs);

    // second try: filter form elements by type
    const inputs = formElements.filter(
      (el) => el.type === "number" || el.type === "text"
    );
    console.log(inputs);

    const errorici = inputs.map((input) => {
      const vali = input.type === "number" ? +input.value : input.value;
      const errorica = validate[input.id](vali);
      setErrors({
        ...errors,
        ...(errorica && { [input.id]: errorica }),
      });
      setSubmitted(true);
      return errorica;
    });

    console.log(errorici);

    // console.log(event.target, "submit");
    // for (const [key, value] of Object.entries(values)) {
    //   // console.log(`${key}: ${value}`);
    //   console.log(event.target[key], "submit");
    //   const errorica = validate[key](value);
    //   // console.log(errorica);
    //   setErrors({
    //     ...errors,
    //     // if validate[name](value) doesn't return null it means that we have an error
    //     // in this case we want to merge a new object like {firstName: "Invalid characters"} in our error object (and for that we use spread operator
    //     // the new object meant to be merged is { [name] : error }, even for untouched
    //     ...(errorica && { [key]: errorica }),
    //   });
    // }
  };
  return (
    <>
      <FormHtml
        errors={errors}
        touched={touched}
        values={values}
        handleBlur={handleBlur}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default FormValidation;
