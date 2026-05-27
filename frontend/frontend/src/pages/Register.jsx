import { useState } from "react";
import toast from "react-hot-toast";
import { createUser } from "../service/Api";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const register = async () => {
    if (!name || !email || !password) {
      return toast.error("All fields are required");
    }

    if (name.length < 3) {
      return toast.error("Name must be at least 3 characters");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return toast.error("Enter a valid email");
    }

    if (password.length < 6) {
      return toast.error("Password must be at least 6 characters");
    }
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("image", image);
      const response = await createUser(formData);
      toast.success(response.data.message);
      navigate("/login");
    } catch (e) {
      toast.error(e.response?.data?.message || "error");
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
      <input
        type="file"
        placeholder="Enetr the password"
        onChange={(e) => setImage(e.target.files[0])}
      />
      <button onClick={register}>Click</button>
    </div>
  );
};

export default Register;
