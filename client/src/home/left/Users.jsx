import React from "react";
import User from "./User";
import useGetAllUsers from "../../context/useGetAllUsers";

function Users() {
  const [allUsers, loading] = useGetAllUsers();

  // Handling the loading state
  if (loading) {
    return (
      <div className="text-center text-gray-500 mt-10 italic text-sm select-none">
        Loading users...
      </div>
    );
  }

  // If no users are found
  if (!allUsers || allUsers.length === 0) {
    return (
      <div className="text-center text-gray-500 mt-10 italic text-sm select-none">
        No users available.
      </div>
    );
  }

  return (
    <div>
      {allUsers.map((user) => (
        <User key={user._id} users={user} /> // Use unique id as the key
      ))}
    </div>
  );
}

export default Users;
