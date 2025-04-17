import React from "react";
import Search from "./Search";
import Users from "./Users";

export default function Left() {
  return (
    <div className="w-full md:w-[30%] bg-gray-950 text-gray-300 border-r border-gray-800 h-screen flex flex-col">
      {/* Heading */}
      <div className="px-6 py-4 border-b border-gray-800">
        <h1 className="font-bold text-3xl text-white tracking-wide">Chats</h1>
      </div>

      {/* Search Box */}
      <div className="px-4 py-2">
        <Search />
      </div>

      {/* User List */}
      <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 px-2">
        <Users />
        {/* Placeholder */}
        <div className="text-center text-gray-500 mt-10">
          No chats available yet.
        </div>
      </div>
    </div>
  );
}
