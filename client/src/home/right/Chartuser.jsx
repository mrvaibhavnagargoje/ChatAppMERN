// import React from "react"
// import useConversation from "../../statemanage/useConversation";
// import { useSocketContext } from "../../context/SocketContext";

// function Chartuser() {
//   const { selectedConversation } = useConversation();
//   console.log(selectedConversation);
//   const {onlineUsers}=useSocketContext()
//   const getOnlineUsersStatus = (userId) => {
//     return onlineUsers.includes(userId) ? "Online" : "Offline";
//   };
//   return (
//     <div className="pl-5 pr-4 pt-4 pb-4 h-[12vh] flex items-center gap-4 bg-gray-700 hover:bg-gray-600 duration-300 rounded-lg cursor-pointer">
//       {/* Avatar */}
//       <div className="avatar avatar-online">
//         <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
//           <img
//             src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
//             alt="User Avatar"
//           />
//         </div>
//       </div>

//       {/* User Info */}
//       <div>
//         <h1 className="text-white font-semibold text-lg">
//         {selectedConversation.name}
//         {/* Vaibhav */}
//         </h1>
//         <span className="text-green-300 text-sm">{getOnlineUsersStatus(selectedConversation._id)}</span>
//       </div>
//     </div>
//   )
// }

// export default Chartuser
import React from "react";
import useConversation from "../../statemanage/useConversation";
import { useSocketContext } from "../../context/SocketContext";

function Chartuser() {
  const { selectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();

  // Check if the user is online
  const isOnline = onlineUsers.includes(selectedConversation?._id);

  // Check if selectedConversation exists and has the required properties
  const profileImage = selectedConversation?.profileImage;
  const userName = selectedConversation?.name || "Unknown";

  return (
    <div className="pl-5 pr-4 pt-4 pb-4 h-[12vh] flex items-center gap-4 bg-gray-700 hover:bg-gray-600 duration-300 rounded-lg cursor-pointer">
      {/* Avatar */}
      <div className={`avatar ${isOnline ? "avatar-online" : "rounded-full ring ring-primary ring-offset-base-100 ring-offset-1"}`}>
        <div
          className={`w-14 rounded-full overflow-hidden border-2 border-white shadow-md ${
            isOnline ? "ring ring-primary ring-offset-base-100 ring-offset-1" : ""
          }`}
        >
          <img
            src={
              profileImage
                ? `http://localhost:8000${profileImage}` // this will work if the server runs on 8000
                : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            }
            alt="User Avatar"
          />
        </div>
      </div>

      {/* User Info */}
      <div>
        <h1 className="text-white font-semibold text-lg">{userName}</h1>
        <span className={`text-sm ${isOnline ? "text-green-300" : "text-red-400"}`}>
          {isOnline ? "Online" : "Offline"}
        </span>
      </div>
    </div>
  );
}

export default Chartuser;
