// import React from "react"

// function Chartuser() {
//   return (
//     <div className=" pl-5 pt-5 h-[12vh] flex space-x-4 bg-gray-700 hover:bg-gray-600 duration-300">
//       <div>
//       <div className="avatar avatar-online">
//         <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
//           <img
//             src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
//             alt="User Avatar"
//           />
//         </div>
//       </div>
//       </div>
//       <div>
//         <h1>Vaibhav Nagargoje</h1>
//         <span>Online</span>
//       </div>
//     </div>
//   )
// }

// export default Chartuser
import React from "react"

function Chartuser() {
  return (
    <div className="pl-5 pr-4 pt-4 pb-4 h-[12vh] flex items-center gap-4 bg-gray-700 hover:bg-gray-600 duration-300 rounded-lg cursor-pointer">
      {/* Avatar */}
      <div className="avatar avatar-online">
        <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            alt="User Avatar"
          />
        </div>
      </div>

      {/* User Info */}
      <div>
        <h1 className="text-white font-semibold text-lg">
          Vaibhav Nagargoje
        </h1>
        <span className="text-green-300 text-sm">Online</span>
      </div>
    </div>
  )
}

export default Chartuser
