import { useState } from "react";

const useForm = (initial) => {
  const [formValues, setFormValues] = useState(initial);
  const handleChange = ({ target }) => {
    setFormValues({ ...formValues, [target.name]: target.value });
  };
  const reset = () => {
    setFormValues(initial);
  };

  return [formValues, handleChange, reset];
};

export default useForm;
