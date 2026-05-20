import { useState } from "react";
import toast from "react-hot-toast";
import { createUser } from "../service/Api";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    try {
      const data = { name, email, password };
      const response = await createUser(data);
      toast.success(response.data.message);
    } catch (e) {
      toast.error(e.response.data.message || "error");
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enetr the name"
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        type="email"
        placeholder="Enetr the email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Enetr the password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={register}>Click</button>
    </div>
  );
};

export default Register;
