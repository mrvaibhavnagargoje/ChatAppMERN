import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import useGetAllUsers from "../../context/useGetAllUsers";
import useConversation from "../../statemanage/useConversation";
import toast from "react-hot-toast";

function Search() {
  const [search, setSearch] = useState("");
  const [allUsers] = useGetAllUsers();
  const { setSelectedConversation } = useConversation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;

    const conversation = allUsers.find((user) =>
      user.name?.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("User not found");
    }
  };

  return (
    <div className="h-[10vh] bg-gray-950 flex items-center justify-center px-3 sm:px-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl transition-all rounded-full shadow-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 bg-gray-800"
      >
        <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3">
          {/* Input Field */}
          <label className="flex items-center gap-2 w-full">
            <input
              type="text"
              className="w-full bg-transparent text-white placeholder:text-gray-400 text-sm sm:text-base px-3 sm:px-4 py-2 outline-none"
              placeholder="Search users..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </label>

          {/* Button */}
          <button
            type="submit"
            className="bg-gray-600 text-white p-2 sm:p-3 rounded-full hover:bg-blue-700 transition-all duration-300 active:scale-95"
          >
            <FaSearch size={16} className="sm:size-5" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Search;

















// import React from "react";
// import { FaSearch } from "react-icons/fa";

// function Search() {
//   return (
//     <div className=" h-[10vh]">
//       <div className="px-6 py-4">
//       <form
//         action=""
      
//       >
//         <div className="flex space-x-3">
//        <label className=" border-[1px] border-gray-700 bg-slate-900 rounded-lg p-3 flex items-center gap-2 w-[80%]">
//               <input
//                 type="text"
//                 className="grow outline-none bg-transparent"
//                 placeholder="Search"
//                 // value={search}
//                 // onChange={(e) => setSearch(e.target.value)}
//               />
//             </label>
//             <button>
//               <FaSearch className="text-5xl p-2 hover:bg-gray-600 rounded-full duration-300" />
//             </button>
//             </div>
//       </form>
//     </div>
//     </div>
//   );
// }

// export default Search;
