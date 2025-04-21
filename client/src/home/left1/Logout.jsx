import React, { useState } from "react";
import { TbLogout2 } from "react-icons/tb";
import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

function Logout() {
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    try {
      await axios.post("/api/user/logout");
      localStorage.removeItem("ChatApp");
      Cookies.remove("jwt");
      toast.success("Logged out successfully");
      window.location.reload();
    } catch (error) {
      console.error("Error in Logout", error);
      toast.error("Error in logging out");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-[60px] h-screen bg-slate-950 text-white flex flex-col justify-end items-center">
      <div className="mb-4 group relative">
        <button
          onClick={handleLogout}
          disabled={loading}
          className="p-1 rounded-full hover:bg-red-600 transition-all duration-300"
        >
          <TbLogout2 className={`text-2xl ${loading ? "animate-spin text-gray-400" : ""}`} />
        </button>
        <span className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-sm bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Logout
        </span>
      </div>
    </div>
  );
}

export default Logout;
