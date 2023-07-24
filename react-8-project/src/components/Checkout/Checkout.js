import { useContext } from "react";
import useHttp from "../../hooks/use-htttp";
import useInput from "../../hooks/use-input";
import Modal from "../UI/Modal/Modal";
import styles from "./Checkout.module.css";
import CartContext from "../../store/cart-context";

const dummyValidation = (text) => {
  if (text.trim().length === 0) {
    return false;
  }
  return true;
};

const Order = (props) => {
  const cartCtx = useContext(CartContext);
  const { isLoading, error, sendRequest: sendOrder } = useHttp();
  const fullNameInput = useInput(dummyValidation);
  const emailInput = useInput(dummyValidation);
  const telNumberInput = useInput(dummyValidation);
  const adressInput = useInput(dummyValidation);

  let formIsValid = false;

  if (
    fullNameInput.isValid &&
    emailInput.isValid &&
    telNumberInput.isValid &&
    adressInput.isValid
  ) {
    formIsValid = true;
  }

  const postOrder = async (userOrder) => {
    sendOrder(
      {
        url: "https://react-fetch-movies-1fd48-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: { ...userOrder },
      },
      () => {}
    );
    console.log(error);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    const userOrder = {
      fullName: fullNameInput.value,
      email: emailInput.value,
      tel: telNumberInput.value,
      adress: adressInput.value,
      items: cartCtx.items,
      totalAmout: cartCtx.totalAmount,
    };

    postOrder(userOrder);
    fullNameInput.reset();
    emailInput.reset();
    telNumberInput.reset();
    adressInput.reset();
  };

  return (
    <Modal className={styles.form} onClick={props.onDismiss}>
      <form onSubmit={submitHandler}>
        <div className={styles.control}>
          <label htmlFor="full-name">Full name</label>
          <input
            id="full-name"
            type="text"
            value={fullNameInput.value}
            onChange={fullNameInput.inputChangeHandler}
            onBlur={fullNameInput.inputBlurHandler}
          />
        </div>
        <div className={styles.control}>
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            value={emailInput.value}
            onChange={emailInput.inputChangeHandler}
            onBlur={emailInput.inputBlurHandler}
          />
        </div>
        <div className={styles.control}>
          <label htmlFor="tel">Tel. number</label>
          <input
            id="tel"
            type="tel"
            value={telNumberInput.value}
            onChange={telNumberInput.inputChangeHandler}
            onBlur={telNumberInput.inputBlurHandler}
          />
        </div>
        <div className={styles.control}>
          <label htmlFor="adress">Adress</label>
          <input
            id="adress"
            type="text"
            value={adressInput.value}
            onChange={adressInput.inputChangeHandler}
            onBlur={adressInput.inputBlurHandler}
          />
        </div>
        <div className={styles.actions}>
          <button onClick={props.onDismiss}>Close</button>
          <button className={styles.submit}>Checkout</button>
        </div>
      </form>
    </Modal>
  );
};

export default Order;
