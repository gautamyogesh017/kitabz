import React, { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async () => {
    const requestOption = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ name: name, email: email, password: password }),
    };
    fetch("http://localhost:3000/register", requestOption);
  };

  return (
    <div className="registration-form">
      <div className="form-body">
        <div className="name">
          <input
            className="form__input"
            type="text"
            id="Name"
            placeholder="Full Name"
            onKeyUp={(event) => {
              console.log(event);
              setName(event.target.value);
            }}
          />
        </div>

        <div className="email">
          <input
            type="email"
            id="email"
            className="form__input"
            placeholder="Email"
            onKeyUp={(event) => {
              console.log(event);
              setEmail(event.target.value);
            }}
          />
        </div>
        <div className="password">
          <input
            className="form__input"
            type="password"
            id="password"
            placeholder="Password"
            onKeyUp={(event) => {
              console.log(event);
              setPassword(event.target.value);
            }}
          />
        </div>
        <div className="submit">
          <button type="submit" className="btn" onClick={() => registerUser()}>
            Register Now!
          </button>
        </div>
        {/* Already a member? <Link to="/login"> Click here to Sign in</Link> */}
      </div>
    </div>
  );
};
export default Register;
