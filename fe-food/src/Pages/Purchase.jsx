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
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
const CheckOutForm = ({ success, errors }) => {
  const { totalPrice } = useContext(CartContext);
  const { user } = useContext(AuthContext);
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
    if (!error) {
      const { id } = paymentMethod;

      try {
        const { data } = await axios.post(
          "http://be-pizza.herokuapp.com/api/purchase",
          {
            id,
            amount: parseInt(totalPrice * 100),
            address: addressRef.current.value,
            postcode: postCodeRef.current.value,
            user,
          }
        );
        // console.log(data);
        success();
      } catch (error) {
        errors();
      }
    }
  };
  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "400", margin: "0 auto" }}>
      <h4>Total amount to pay: {totalPrice}</h4>
      <label for="address">
        <b>Enter your street address</b>
      </label>
      <input
        type="text"
        ref={addressRef}
        placeholder="Enter your hosue number"
        name="email"
        // onChange={handleChange}
        required
      />
      <label for="postcode">
        <b>Enter your postcode</b>
      </label>
      <input
        type="text"
        placeholder="Enter your postcode"
        name="psw"
        required
        ref={postCodeRef}
      />

      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};
const Purchase = () => {
  const [status, setStatus] = useState("read");
  const [error, setError] = useState("read");
  if (status === "success") {
    return <div>Successful payed</div>;
  } else if (error === "error") {
    return <div>Erorr</div>;
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
