import React from "react";
import StripeCheckout from "react-stripe-checkout";

const Checkout = ({ total, product }) => {
  const handlePayment = (token) => {
    const body = {
      token,
      product,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    return fetch(`http://localhost:3001/payment`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    })
      .then((res) => {
        alert("Obrigado pela compra!");
        window.localStorage.clear(res);
        window.location.reload();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <StripeCheckout
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        token={handlePayment}
        name="Payment"
        amount={total * 100}
        shippingAddress
        billingAddress
        alipay
      >
        <button>Finalizar Compra</button>
      </StripeCheckout>
    </div>
  );
};

export default Checkout;
