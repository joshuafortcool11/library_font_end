import React, { useState } from "react";
import Button from "./Button";

function LoginPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [doYouHaveAccount, setDoYouHaveAccount] = useState(true);

  function toggleAccountMode() {
    setDoYouHaveAccount((hasAccount) => !hasAccount);
  }

  function checkLogin() {
    alert(`username: ${userName}, password: ${password}`);
  }

  function createAccount() {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    alert(`account created for ${userName} (${email})`);
  }

  return (
    <>
      {doYouHaveAccount ? (
        <div style={{ border: "3px solid blue", marginTop: "200px" }}>
          <h1>Sign In</h1>
          <h3>Access your academic portal</h3>
          <label>UserName:</label>
          <input
            type="text"
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Please enter your user name"
          />
          <br />
          <label>Password:</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <div>
            <Button buttonlabel="LOGIN" action={checkLogin} /> <br />
            <label>New here?</label>
            <Button buttonlabel="Create an Account" action={toggleAccountMode} />
          </div>
        </div>
      ) : (
        <div style={{ border: "3px solid indigo", marginTop: "200px" }}>
          <h1>Create an Account</h1>
          <h3>Access your academic portal</h3>
          <label>Student ID:</label>
          <input
            type="text"
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Please enter your user name"
          />
          <br />
          <label>email:</label>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label>password:</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <label>confirm:</label>
          <input
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <br />
          <div>
            <Button buttonlabel="CREATE AN ACCOUNT" action={createAccount} />{" "}
            <br />
            <label>Already have an account?</label>
            <Button buttonlabel="sign In" action={toggleAccountMode} />
          </div>
        </div>
      )}
    </>
  );
}

export default LoginPage;
