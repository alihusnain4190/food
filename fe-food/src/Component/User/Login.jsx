import React, { useContext, useRef, useState } from "react";
import { Link, navigate } from "@reach/router";
import { AuthContext } from "../../Context/user";
const Signups = () => {
  const { login, currentUser, setBool } = useContext(AuthContext);
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate(`/`);
      setBool(true);
    } catch {
      setError("account is not creating");
      setBool(false);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div class="container">
          <h1>Login</h1>
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

          {error && <p className="error">{error}</p>}
          <div className="clearfix">
            <button className="btn btn-more" type="submit">
              Login
            </button>
          </div>
          <div>
            <Link to="forget-password">Forget Password</Link>
          </div>
          <div className="signup__login">
            <p>Need a account</p>

            <Link to="/signup" className="btn btn-more">
              Sign up
            </Link>
          </div>
        </div>
      </form>
    </>
  );
};

export default Signups;
