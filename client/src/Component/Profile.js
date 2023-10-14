import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logOut, deleteUser, editUser  } from "../JS/Action/Action";
import Modal from "react-modal";

const Profile = () => {
  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();

  const [isModalOpen, setModalOpen] = useState(false);
  const [editedUser, setEditedUser] = useState({
    username: user.username,
    email: user.email,
    phone: user.phone,
  });

  const handleEdit = () => {
    setModalOpen(true);
  };

  const handleEditSubmit = () => {
    dispatch(editUser(user._id, editedUser));
    setModalOpen(false);
  };

  const handleDelete = () => {
    dispatch(deleteUser(user._id));
  };

  console.log("User Data:", user);

  return (
    <div>
      <div>
        <h2>Welcome, {user.username}</h2>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <button onClick={handleEdit}>Edit</button>
      </div>
      <Link to="/Login">
        {" "}
        <button
          onClick={() => {
            dispatch(logOut());
          }}
        >
          {" "}
          Logout{" "}
        </button>{" "}
      </Link>

      <Link to="/">
        {" "}
        <button onClick={handleDelete}> Delete Account </button>{" "}
      </Link>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setModalOpen(false)}
        contentLabel="Edit User Data"
      >
        <h2>Edit User Data</h2>
        <input
          type="text"
          placeholder="Username"
          value={editedUser.username}
          onChange={(e) =>
            setEditedUser({ ...editedUser, username: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Email"
          value={editedUser.email}
          onChange={(e) =>
            setEditedUser({ ...editedUser, email: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Phone"
          value={editedUser.phone}
          onChange={(e) =>
            setEditedUser({ ...editedUser, phone: e.target.value })
          }
        />
        <button onClick={handleEditSubmit}>Submit</button>
        <button onClick={() => setModalOpen(false)}>Close</button>
      </Modal>
    </div>
  );
};

export default Profile;
