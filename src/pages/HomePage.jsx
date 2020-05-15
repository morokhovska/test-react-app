import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const StartPage = ({ submit, error, resetError, data }) => {

  const [value, setValue] = useState("");
  const onChangeHandler = event => {
    setValue(event.target.value);
    resetError();
  }
  const onSubmit = () => {
    submit(value)
  }
  if (data) {
    return (
      <Redirect to="/country" />
    )
  }
  return (
    <div>
      <input type="text" onChange={onChangeHandler} placeholder="Enter country" />
      <button disabled={!value} onClick={onSubmit}>Submit</button>
      {
        error && <div><p>Sorry, this country not exist</p></div>
      }
    </div>
  )
}
export default StartPage