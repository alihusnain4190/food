import React, { useContext, useRef, useState } from "react";
import { Link } from "@reach/router";
import { AuthContext } from "../../Context/user";
const Signups = () => {
  const { signup, currentUser } = useContext(AuthContext);
  const emailRef = useRef();
  const passwordRef = useRef();
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
      } catch {
        setError("account is not creating");
      }
    }
  }

  return (
    <>
      {JSON.stringify(currentUser)}

      <form onSubmit={handleSubmit}>
        <div class="container">
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account. </p>
          <label for="email">Email</label>
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

            <Link to="/" className="btn btn-more">
              Login
            </Link>
          </div>
        </div>
      </form>
    </>
  );
};

export default Signups;
