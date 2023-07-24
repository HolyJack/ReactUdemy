import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const responce = await fetch(
        "https://react-fetch-movies-1fd48-default-rtdb.europe-west1.firebasedatabase.app/cart.json"
      );

      if (!responce.ok) {
        throw new Error("Could not fetch cart data!");
      }

      const data = await responce.json();

      return data;
    };

    try {
      const cartData = await fetchData();
      
      dispatch(
        cartActions.replace({
          items: cartData.items ||   [],
          totalQuantity: cartData.totalQuantity || 0,
          totalAmount: cartData.totalAmount,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "failed",
          title: "Failed",
          message: "Sending cart data is failed.",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending",
        message: "Sending cart data",
      })
    );

    const sendCartData = async (cart) => {
      const responce = await fetch(
        "https://react-fetch-movies-1fd48-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalAmount: cart.totalAmount,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );
      if (!responce.ok) {
        throw new Error("Sending cart data is failed.");
      }
    };

    try {
      await sendCartData(cart);

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success",
          message: "Send cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "failed",
          title: "Failed",
          message: "Sending cart data is failed.",
        })
      );
    }
  };
};
