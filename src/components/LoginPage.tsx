import React, { useState } from "react";
import Button from "./Button";

function LoginPage() {

    const [userName, setUserName] = useState("");
    const [userPassword, setUserPassword] = useState("");

    function loginAction() {
        alert(`this username for this user is ${userName} and password is ${userPassword}`);
    }

    return (
        <div>
            <div>
                <label>UserName </label>
                <input type="text" onChange={(e) => setUserName(e.target.value)} /><br />
            </div>
            <div>
                <label>Password </label>
                <input type="password" onChange={(e) => setUserPassword(e.target.value)} /><br />
            </div>
            <Button buttonlabel="LOGIN" action={loginAction} />
        </div>
    );
}

export default LoginPage;
