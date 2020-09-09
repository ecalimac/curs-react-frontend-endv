import React, { useState, useEffect } from "react";
import FormComponent from "../formComponent/formComponent";

const FormValidatorComponent = ({ initialValues, validate }) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  //   useEffect(() => {
  //     console.log(values, errors, touched);
  //   }, [errors, touched, values]);
  useEffect(() => {
    console.log(values, errors, touched, "state values");
  });

  const handleChange = (event) => {
    console.log(event, "change event");
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
      ...(error && { [name]: touched[name] && error }),
    });
  };

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     console.log(event, "submit");
  //     //aici mai trebuie facut ceva
  //     //vrem ca atunci cand dam submit, daca vreun camp nu e valid
  //   };
  return (
    <>
      <FormComponent
        errors={errors}
        touched={touched}
        values={values}
        handleBlur={handleBlur}
        handleChange={handleChange}
        // handleSubmit={handleSubmit}
      />
    </>
  );
};

export default FormValidatorComponent;
