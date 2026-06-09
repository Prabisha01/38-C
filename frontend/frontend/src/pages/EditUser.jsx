import { useState, useEffect } from "react";
import { getUserById, updateById } from "../service/Api";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

const EditUser = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [image, setImage] = useState(null);

  const fetchUser = async () => {
    try {
      const response = await getUserById(id);
      setFormData({
        name: response.data.user.name,
        email: response.data.user.email,
        password: "",
      });
    } catch (e) {
      toast.error("unsuccessful");
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("password", formData.password);
      if (image) {
        data.append("image", image);
      }
      await updateById(id, data);
    } catch (e) {
      toast.error("unsuccessful");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        <button type="submit">Click</button>
      </form>
    </div>
  );
};

export default EditUser;
