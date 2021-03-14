import React, { useContext, useRef, useState } from "react";
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
      console.log("error password do not match");
      setError("Your password is not matching");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      console.log("fail to create account");
      setError("account is not creating");
    }
  }

  return (
    <>
      {/* {error ? { error } : null} */}
      {JSON.stringify(currentUser)}
      <form onSubmit={handleSubmit}>
        <div class="container">
          <h1>Sign Up</h1>
          <p>Please fill this form </p>
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
          <div class="clearfix">
            <button type="submit" class="signupbtn">
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Signups;
