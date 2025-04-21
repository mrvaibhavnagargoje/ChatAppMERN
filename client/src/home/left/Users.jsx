import React from "react";
import User from "./User";
import useGetAllUsers from "../../context/useGetAllUsers";

function Users() {
  const [allUsers, loading] = useGetAllUsers();
  console.log(allUsers);
  return (
    <div>
      {/* <h1 className="px-8 py-2 text-white font-semibold bg-slate-800 rounded-md">
        Messages
      </h1> */}
     
      {allUsers.map((users,index)=>{
        return <User key={index} users={users}/>
      })
        
      }
    </div>
  );
}

export default Users;