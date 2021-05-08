

import React, { useContext, useRef, useState } from "react";
import { Link, navigate } from "@reach/router";
import { AuthContext } from "../../Context/user";
const ForgotPasswords = () => {
  const { login, currentUser, resetPassword } = useContext(AuthContext);
  const emailRef = useRef();
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [messege, setMessege] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      setMessege("Check your email for further instruction");
      await resetPassword(emailRef.current.value);
    } catch {
      setError("Failed to reset password");
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div class="container">
          <h1>Password Reset</h1>
          {messege && <p className="error">{messege}</p>}
          <label for="email">Email</label>
          <input
            type="text"
            ref={emailRef}
            placeholder="Enter Email"
            name="email"
            required
          />
          {error && <p className="error">{error}</p>}
          <div className="clearfix">
            <button className="btn btn-more" type="submit">
              Reset Password
            </button>
          </div>
          {/* <div>
            <Link to="/login" className="btn btn-more">Login</Link>
          </div> */}
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

export default ForgotPasswords;
