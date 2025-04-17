import Users from "./Users"

function User() {
  return (
    <div className="flex items-center gap-4 p-4 hover:bg-gray-800 transition rounded-lg cursor-pointer">
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
      <div className="text-sm">
        <h2 className="font-semibold text-white">Vaibhav Nagargoje</h2>
        <p className="text-gray-400 text-xs">vaibhav@gmail.com</p>
      </div>
    </div>
  )
}

export default User
