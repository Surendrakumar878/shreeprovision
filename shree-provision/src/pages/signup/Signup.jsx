import React from "react";
import { useState } from "react";
import axios from "axios";
export const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handlesub = () => {
    const payload = {
      name,
      email,
      password,
     
    };
    axios
      .post("https://zany-puce-raven-cuff.cyclic.app/user/signup", payload)
      .then((e) => e)
      .catch((err) => console.log(err));
  };
  console.log("name", name);
  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h1>register</h1>
      <input
        type="text"
        value={name}
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        type="text"
        value={email}
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="password"
        value={password}
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      
      <br />
      <button onClick={handlesub}>submit</button>
    </div>
  );
};
