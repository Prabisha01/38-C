import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { getAllUser } from "../service/Api";
import { useNavigate } from "react-router-dom";

const User = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
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

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <div>
      <table border="1px" width="100%">
        <thead>
          <tr>
            <th>Id</th>
            <th>name</th>
            <th>email</th>
            <th>image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                {user.image ? (
                  <img
                    src={`http://localhost:5000/uploads/${user.image}`}
                    width="60px"
                    height="50px"
                  />
                ) : (
                  "No image"
                )}
              </td>
              <td>
                <button onClick={() => handleEdit(user.id)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
