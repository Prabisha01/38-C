import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { getAllUser } from "../service/Api";

const User = () => {
  const [users, setUsers] = useState([]);

  const fetchUser = async () => {
    try {
      const response = await getAllUser();
      setUsers(response.data.user);
    } catch (e) {
      toast.error("unsuccessfull");
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);

  return <div>User</div>;
};

export default User;
