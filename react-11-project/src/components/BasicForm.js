import useInput from "../hooks/use-input";

const textValidation = (text) => {
  if (text.trim() === "") {
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

const BasicForm = (props) => {
  const firstNameInput = useInput(textValidation);
  const lastNameInput = useInput(textValidation);
  const emailInput = useInput(emailValidation);

  let formIsValid = false;

  if (firstNameInput.isValid && lastNameInput.isValid && emailInput.isValid) {
    formIsValid = true;
  }

  const firstNameStyles = firstNameInput.hasError
    ? "form-control invalid"
    : "form-control";

  const lastNameStyles = lastNameInput.hasError
    ? "form-control invalid"
    : "form-control";

  const emailStyles = emailInput.hasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form>
      <div className="control-group">
        <div className={firstNameStyles}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={firstNameInput.value}
            onChange={firstNameInput.inputChangeHandler}
            onBlur={firstNameInput.inputBlurHandler}
          />
          {firstNameInput.hasError && (
            <p className="index-text">Firsname cannot be empty.</p>
          )}
        </div>
        <div className={lastNameStyles}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lastNameInput.value}
            onChange={lastNameInput.inputChangeHandler}
            onBlur={lastNameInput.inputBlurHandler}
          />
        {lastNameInput.hasError && (
          <p className="index-text">Lastname cannot be empty.</p>
        )}
        </div>
      </div>
      <div className={emailStyles}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={emailInput.value}
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

export default BasicForm;
