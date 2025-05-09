import React from "react"
import Search from "./Search"
import Users from "./Users"
import useGetAllUsers from "../../context/useGetAllUsers"

export default function Left() {
  const [allUsers] = useGetAllUsers() // ✅ this returns your list of users
  return (
    <div className="w-full md:w-[30%] bg-gray-950 text-gray-300 border-r border-gray-800 h-screen flex flex-col">
      {/* Heading */} 
      {/* <div className="px-6 py-4 border-b border-gray-800">
        <h1 className="font-bold text-3xl text-white tracking-wide">Chats</h1> 
      </div> */}
      <div className="px-4 sm:px-6 py-4 border-b border-gray-800">
        <h1 className="font-bold text-2xl sm:text-3xl text-white tracking-wide">
          Chat &{" "}
          <span className="text-teal-500 text-xl sm:text-2xl font-semibold">Shine</span>
        </h1>
      </div>


      {/* Search Box */}
      <div className="px-4 py-2">
        <Search />
      </div>

      {/* User List */}
      <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 px-2 py-2">
        {allUsers && allUsers.length > 0 ? (
          <Users />
        ) : (
          <div className="text-center text-gray-500 mt-10 italic text-sm select-none">
            No chats available yet.
          </div>
        )}
      </div>
    </div>
  )
}
// props accept कर
// import React from "react"
// import Search from "./Search"
// import Users from "./Users"
// import useGetAllUsers from "../../context/useGetAllUsers"
// import useConversation from "../../statemanage/useConversation";

// export default function Left({ setShowChat }) {
//   const [allUsers] = useGetAllUsers();
//   const { setSelectedConversation } = useConversation();

//   const handleUserClick = (user) => {
//     setSelectedConversation(user);
//     if (setShowChat) setShowChat(true); // mobile वर chat screen दाखव
//   };

//   return (
//     <div className="w-full md:w-[30%] bg-gray-950 h-screen flex flex-col">
//       <div className="px-6 py-4 border-b border-gray-800">
//         <h1 className="font-bold text-3xl text-white">Chat <span className="text-teal-500">Shine</span></h1>
//       </div>
//       <div className="px-4 py-2">
//         <Search />
//       </div>
//       <div className="flex-1 overflow-y-auto px-2 py-2">
//         {allUsers.length ? (
//           allUsers.map(user => (
//             <div key={user._id} onClick={() => handleUserClick(user)}>
//               <Users users={user} />
//             </div>
//           ))
//         ) : (
//           <p className="text-center mt-10 text-gray-500">No chats available</p>
//         )}
//       </div>
//     </div>
//   );
// }
