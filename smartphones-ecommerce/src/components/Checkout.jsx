import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";

const Checkout = ({ total }) => {
  const [product] = useState([]);

  const handlePayment = (token) => {
    const body = {
      token,
      product,
    };
    const headers = {
      "Content-Type": "application/json",
    };

    return fetch(`http://localhost:3001/pagamento`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then((res) => {
        alert("Obrigado pela compra!");
        window.location.reload();
        window.localStorage.clear();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <StripeCheckout
        stripeKey="pk_test_51HSKkOGiY20xWn7q37BDBkyBwyzdkjUCZlDaLTuc5KZG44vZpco0q9PLszLRwmoX2vTEBGGBbhDZEgKSRyfUGkzq007qWGkDWS"
        token={handlePayment}
        name="Checkout"
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
