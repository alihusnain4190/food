import React, { useContext, useRef, useState } from "react";
import { Link, navigate } from "@reach/router";
import { AuthContext } from "../../Context/user";
import axios from "axios";
const Signups = () => {
  const { signup, setBool, currentUser, setUser } = useContext(AuthContext);
  const emailRef = useRef();
  const passwordRef = useRef();
  const nameRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      setError("password should be longer then 6 character");
    } else {
      try {
        setError("");
        setLoading(true);

        await signup(emailRef.current.value, passwordRef.current.value);
        const { data } = await axios.post(
          "https://be-pizza.herokuapp.com/api/user",
          {
            u_email: emailRef.current.value,
            u_name: nameRef.current.value,
          }
        );
        setUser(data.u_name);
        navigate(`/`);
        setBool(true);
      } catch (err) {
        setError("account is not creating");
        setBool(false);
      }
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div class="container">
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account. </p>
          <label for="name">
            <b>Name</b>
          </label>
          <input
            type="text"
            ref={nameRef}
            placeholder="Enter your name"
            required
          ></input>
          <label for="Email">
            <b>Email</b>
          </label>
          <input
            type="text"
            ref={emailRef}
            placeholder="Enter Email"
            name="email"
            required
          />
          <label for="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
            ref={passwordRef}
          />
          <label for="psw-repeat">
            <b>Repeat Password</b>
          </label>
          <input
            type="password"
            placeholder="Repeat Password"
            name="psw-repeat"
            ref={passwordConfirmRef}
            required
          />

          {error && <p className="error">{error}</p>}
          <div className="clearfix">
            <button className="btn btn-more" type="submit">
              Sign Up
            </button>
          </div>
          <div className="signup__login">
            <p>Already have a account</p>

            <Link to="/login" className="btn btn-more">
              Login
            </Link>
          </div>
        </div>
      </form>
    </>
  );
};

export default Signups;
