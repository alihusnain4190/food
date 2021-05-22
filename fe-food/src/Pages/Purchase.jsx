import { Link } from "@reach/router";
import React, { useContext, useRef, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { CartContext } from "../Context/cart";
import { AuthContext } from "../Context/user";
// import { useState } from "react";
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
const CheckOutForm = ({ success, errors }) => {
  const { totalPrice, setCarts } = useContext(CartContext);
  const { currentUser,user } = useContext(AuthContext);
  const stripe = useStripe();
  const elements = useElements();

  const addressRef = useRef();
  const postCodeRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    if (!error ) {
      const { id } = paymentMethod;

      try {
        const { data } = await axios.post(
          "https://be-pizza.herokuapp.com/api/purchase",
          // "http://localhost:9090/api/purchase",
          {
            id,
            amount: parseInt(totalPrice * 100),
            address: addressRef.current.value,
            postcode: postCodeRef.current.value,
            user,
          }
        );
        console.log(data);
       

        success();
        setCarts([]);
      } catch (error) {
        console.log(error);
        errors();
      }
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="purchase"
      // style={{ maxWidth: "400", margin: "0 auto" }}
    >
      <h4 className="purchase__h4">Total Charges pay: {totalPrice}</h4>
      <label className="purchase__label" for="address">
        <b>Street address</b>
      </label>
      <input
        type="text"
        ref={addressRef}
        placeholder="Enter your hosue number"
        name="email"
        // onChange={handleChange}
        required
      />
      <label for="postcode" className="purchase__label">
        <b>Enter postcode</b>
      </label>
      <input
        type="text"
        placeholder="Enter your postcode"
        name="psw"
        required
        ref={postCodeRef}
      />

      <CardElement className="purchase__cardelement" />
      <button
        type="submit"
        className="btn purchase__btn__pay"
        disabled={!stripe}
      >
        Pay
      </button>
    </form>
  );
};
const Purchase = () => {
  const [status, setStatus] = useState("read");
  const [error, setError] = useState("read");

  if (status === "success") {
    return (
      <div>
        <p className="payment__accept">Successfully accept payment </p>
        <Link to="/" className="btn btn-more">
          Go Back
        </Link>
      </div>
    );
  } else if (error === "error") {
    return (
      <div className="purchase__error">
        <p>Issue with your card or address Please fill again </p>
        <Link to="/" className="btn purchase__error__btn">
          Go Back
        </Link>
      </div>
    );
  }

  return (
    <Elements stripe={stripePromise}>
      <CheckOutForm
        success={() => {
          setStatus("success");
        }}
        errors={() => {
          setError("error");
        }}
      />
    </Elements>
  );
};

export default Purchase;
