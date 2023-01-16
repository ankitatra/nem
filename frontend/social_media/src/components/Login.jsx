import React, { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = () => {
    const payload = {
      email,
      pass,
    };
    console.log(payload);

    fetch("https://fine-gray-colt-wrap.cyclic.app/user/login", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.token);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter Password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
};

