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
  const [preview, setPreview] = useState(null);
  const [currentImage, setCurrentImage] = useState(null);

  const fetchUser = async () => {
    try {
      const response = await getUserById(id);
      setFormData({
        name: response.data.user.name,
        email: response.data.user.email,
        password: "",
      });
      setCurrentImage(response.data.user.image);
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
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
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
      <img
        src={
          preview
            ? preview
            : currentImage
              ? `http://localhost:5000/uploads/${currentImage}`
              : "No image"
        }
        width="45"
        height="43"
      />
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
        <input type="file" name="image" onChange={handleImageUpload} />
        <button type="submit">Click</button>
      </form>
    </div>
  );
};

export default EditUser;
