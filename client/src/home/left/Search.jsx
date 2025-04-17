import React from "react";
import { FaSearch } from "react-icons/fa";

function Search() {
  return (
    <div className="h-[10vh] bg-gray-950 flex items-center justify-center">
      <div className="w-full max-w-2xl px-6">
        <form className="transition-all rounded-full shadow-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 bg-gray-800">
          <div className="flex items-center gap-3 p-2">
            {/* Input Field */}
            <label className="flex items-center gap-2 w-full">
              <input
                type="text"
                className="w-full bg-transparent text-white placeholder:text-gray-400 px-4 py-2 outline-none"
                placeholder="Search something..."
              />
            </label>

            {/* Button */}
            <button
              type="submit"
              className="bg-gray-600 text-white p-3 rounded-full hover:bg-blue-700 transition-all duration-300 active:scale-95"
            >
              <FaSearch size={18} />
            </button>
          </div>
        </form>
      </div>
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
