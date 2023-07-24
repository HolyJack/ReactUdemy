import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";

function App() {
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);

  const openCartHandler = () => {
    setShowCart(true);
  };

  const dismissHandler = () => {
    setShowCart(false);
    setShowCheckout(false);
  };

  const showCheckoutHandler = () => {
    setShowCart(false);
    setShowCheckout(true);
  };

  return (
    <CartProvider>
      {showCheckout && <Checkout onDismiss={dismissHandler}/>}
      {showCart && (
        <Cart
          items={[]}
          dissmissHandler={dismissHandler}
          onShowCheckout={showCheckoutHandler}
        />
      )}
      <Header onCartButtonClick={openCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
