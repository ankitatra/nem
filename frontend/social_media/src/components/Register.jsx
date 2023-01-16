import React, { useState } from "react";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = () => {
    const payload = {
      name,
      email,
      pass,
      gender,
    };
    console.log(payload);

    fetch("https://fine-gray-colt-wrap.cyclic.app/user/register", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Registration Page</h1>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
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
      <input
        type="text"
        placeholder="Enter Gender"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

