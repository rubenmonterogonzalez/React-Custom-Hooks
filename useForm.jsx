import React, { useState } from "react";
import Proptypes from "prop-types";

export const useForm = (initialValues = {}) => {
  const [values, setValues] = useState({ initialValues });

  const reset = () => {
    setValues(initialValues);
  };

  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  return [values, handleInputChange, reset];
};

useForm.proptypes = {
  initialValues: Proptypes.object,
};
