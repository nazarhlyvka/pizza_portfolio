import { useState } from "react";

const useInput = (checkInput) => {
  const [input, setInput] = useState("");
  const [touched, setTouched] = useState(false);

  const inputValid = checkInput(input)
  const inputInvalid = !inputValid && touched;

  const inputClasses = inputInvalid
  ? "form-control invalid"
  : "form-control";

  const reset = () => {
    setInput('');
    setTouched(false);
  };
  return{
    input,
    setInput,
    setTouched,
    inputClasses,
    inputValid,
    inputInvalid,
    reset
  }
}

export default useInput