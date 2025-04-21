import { useSocketContext } from "../../context/SocketContext"
import useConversation from "../../statemanage/useConversation"
import Users from "./Users"

function User({ users }) {
  const { selectedConversation, setSelectedConversation } = useConversation()
  const isSelected = selectedConversation?._id === users._id
  const { socket, onlineUsers } = useSocketContext()
  const isOnline = onlineUsers.includes(users._id)
  return (
    <div
      className={`hover:bg-slate-600 duration-300 ${
        isSelected ? "bg-slate-700" : ""
      }`}
      onClick={() => setSelectedConversation(users)}
    >
      <div className="flex items-center gap-4 p-4 hover:bg-gray-800 transition rounded-lg cursor-pointer">
        {/* Avatar */}
        {/* <div className="avatar avatar-online"> */}
        <div className={`avatar ${isOnline ? "avatar-online" : ""}`}>
          <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            {/* <img 
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            alt="User Avatar"
          /> */}
            <img
              src={
                users.profileImage
                  ? `http://localhost:8000${users.profileImage}` // this will work if server runs on 8000
                  : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              }
              alt="User Avatar"
            />
          </div>
        </div>

        {/* User Info */}
        <div className="text-sm">
          <h2 className="font-semibold text-white">{users.name}</h2>
          <p className="text-gray-400 text-xs">{users.email}</p>
        </div>
      </div>
    </div>
  )
}

export default User
