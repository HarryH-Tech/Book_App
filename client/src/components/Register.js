import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { REGISTER_USER } from "../GQL/Mutations";
import "../assets/components/Register.scss";

function Register(props) {
  const [errors, setErrors] = useState({});
  const [userDetails, setUserDetails] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const { username, email, password, confirmPassword } = userDetails;

  const [registerUser, { loading }] = useMutation(REGISTER_USER, {
    update(_, response) {
      console.log(response);
      props.history.push("/all_books");
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: userDetails,
  });

  function onSubmit(e) {
    e.preventDefault();
    registerUser();
  }

  function handleChange(e) {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  }

  return (
    <>
      <form onSubmit={onSubmit} id="register-form" noValidate>
        <h1 id="title">Register</h1>

        <label htmlFor="username" className="label">
          Username:{" "}
        </label>
        <input
          name="username"
          onChange={handleChange}
          placeholder="Username"
          className="input"
          value={username}
          type="text"
        />

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

        <label htmlFor="confirm_password" className="label">
          Confirm Password:{" "}
        </label>
        <input
          name="confirmPassword"
          onChange={handleChange}
          placeholder="Confirm Password"
          className="input"
          value={confirmPassword}
          type="text"
        />

        {Object.keys(errors).length > 0 && (
          <div className="error">
            {Object.values(errors).map((value) => {
              return <p key={value}>{value}</p>;
            })}
          </div>
        )}

        <button className="button register-button">Register</button>

        <div id="sign-up">
          <p>
            Already have an account? Sign up <Link to="/login">here</Link>.
          </p>
        </div>
      </form>
    </>
  );
}

export default Register;
