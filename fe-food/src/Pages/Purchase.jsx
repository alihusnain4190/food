import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
console.log(process.env.REACT_APP_FIREBASE_API_KEY);
console.log(process.env.REACT_APP_STRIPE_KEY)
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
const CheckOutForm = ({ success, errors }) => {
  const stripe = useStripe();
  const elements = useElements();
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
          "http://localhost:9090/api/purchase",
          { id, amount: 1099 }
        );
        console.log(data);
        success();
      } catch (error) {
        console.log("al");
        console.log(error);
        errors();
      }
    }
  };
  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "400", margin: "0 auto" }}>
      <h1>Total amount to pay</h1>
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
