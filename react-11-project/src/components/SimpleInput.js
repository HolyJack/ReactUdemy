import useInput from "../hooks/use-input";

const nameValidation = (name) => {
  if (name.trim() === "") {
    return false;
  }
  return true;
};

const emailValidation = (email) => {
  var validRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/;

  if (email.trim().match(validRegex)) {
    return true;
  }
  return false;
};

const SimpleInput = (props) => {
  const nameInput = useInput("", nameValidation);
  const emailInput = useInput("", emailValidation);

  const nameInputClasses = !nameInput.hasError
    ? "form-control"
    : "form-control invalid";

  const emailInputClasses = !emailInput.hasError
    ? "form-control"
    : "form-control invalid";

  let formIsValid = false;

  if (nameInput.isValid && emailInput.isValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      nameInput.setIsTouched(true);
      emailInput.setIsTouched(true);
      return;
    }
    nameInput.reset();
    emailInput.reset();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={nameInput.enteredValue}
          onChange={nameInput.inputChangeHandler}
          onBlur={nameInput.inputBlurHandler}
        />
      {nameInput.hasError && (
        <p className="index-text">Name must not be empty.</p>
      )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="text"
          id="email"
          value={emailInput.enteredValue}
          onChange={emailInput.inputChangeHandler}
          onBlur={emailInput.inputBlurHandler}
        />
        {emailInput.hasError && (
          <p className="index-text">Entered e-mail is invalid.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
