import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../GQL/Mutations";
import "../assets/components/Login.scss";

function Login(props) {
  const [errors, setErrors] = useState({});
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userDetails;

  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    update(_, response) {
      console.log(response);
      props.history.push("/all_books");
    },
    onError(err) {
      console.log(err);
      console.log(err.graphQLErrors[0].extensions.exception.errors);
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: userDetails,
  });

  function onSubmit(e) {
    e.preventDefault();
    loginUser();
  }

  function handleChange(e) {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  }

  return (
    <>
      <form onSubmit={onSubmit} id="login-form" noValidate>
        <h1 id="title">Login</h1>

        <label htmlFor="email" className="label">
          Email:{" "}
        </label>
        <input
          name="email"
          onChange={handleChange}
          placeholder="Email"
          className="input"
          value={email}
          type="email"
        />

        <label htmlFor="password" className="label">
          Password:{" "}
        </label>
        <input
          name="password"
          onChange={handleChange}
          placeholder="Password"
          className="input"
          value={password}
          type="text"
        />

        {Object.keys(errors).length > 0 && (
          <div className="error">
            {Object.values(errors).map((value) => {
              return <p key={value}>{value}</p>;
            })}
          </div>
        )}

        <button className="button login-button">Login</button>

        <div id="sign-up">
          <p>
            Don't have an account yet? Register <Link to="/register">here</Link>
            .
          </p>
        </div>
      </form>
    </>
  );
}

export default Login;
