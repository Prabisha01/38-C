import React, { useState } from "react";
import toast from "react-hot-toast";
import { LoginUser } from "../service/Api";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const login = async () => {
    try {
      const data = { email, password };
      const response = await LoginUser(data);
      const role = response.data.user.role;
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", role);

      toast.success(response.data.message);
      if (role === "admin") {
        navigate("/user");
      } else {
        navigate("/contact");
      }
    } catch (e) {
      toast.error(e.response?.data?.message || "Not successfull");
    }
  };
  return (
    <div>
      <div>Login</div>
      <input type="email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={login}>Click</button>
    </div>
  );
};

export default Login;
