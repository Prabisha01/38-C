import React, { useState } from "react";
import toast from "react-hot-toast";
import { LoginUser } from "../service/Api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const data = { email, password };
      const response = await LoginUser(data);
      toast.success(response.data.message);
    } catch (e) {
      toast.error(e.response?.data?.message || "Not successfull");
    }
  };
  return(
  <div>
    <div>Login</div>;
    <input type="email" onChange={(e) => setEmail(e.target.value)} />
    <input type="password" onChange={(e) => setPassword(e.target.value)} />
    <button onClick={login}>Click</button>
  </div>)
};

export default Login;
