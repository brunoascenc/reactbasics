import React, { useState } from "react";
import Modal from "react-modal";
import { VscClose } from "react-icons/vsc";
import '../App.css'
import StripeCheckout from "react-stripe-checkout";

const Checkout = ({ total, product }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  } 

  //Reset cart
  function closeModal() {
    setIsOpen(false);
    window.location.reload();
  }

  //Post payment data
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
        openModal();
        window.localStorage.clear(res);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Modal
        closeTimeoutMS={200}
        className="modal"
        isOpen={modalIsOpen}
        ariaHideApp={false}
        onRequestClose={closeModal}
      >
        <div className="modal-content">
          <button onClick={closeModal}>
            <VscClose />
          </button>
          <h1>Compra realizada</h1>
          <p>Seu pedido está a caminho!</p>
        </div>
      </Modal>
      <StripeCheckout
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        token={handlePayment}
        name="Pagamento"
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
