import React from "react";
import { TbLogout2 } from "react-icons/tb";

export default function Logout() {
  return (
    <div className="w-[4%] h-screen bg-slate-950 text-white flex flex-col justify-end items-center">
      <div className="p-3">
        <button
          className="group"
          title="Logout"
          // onClick={handleLogout}
        >
          <TbLogout2
            className="text-3xl p-2 rounded-lg group-hover:bg-red-600 transition-all duration-300"
          />
        </button>
      </div>
    </div>
  );
}
