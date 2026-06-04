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

  return (
    <div>
      <table border="1px" width="100%">
        <thead >
          <tr>
            <th>Id</th>
            <th>name</th>
            <th>email</th>
            <th>image</th>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
