import React from "react";
import { IoSend } from "react-icons/io5";

function Typesend() {
  return (
    <form className="bg-gray-800 px-4 py-2">
      <div className="flex items-center space-x-2 h-[8vh]">
        {/* Text Input */}
        <input
          type="text"
          placeholder="Type your message..."
          className="w-full py-3 px-4 rounded-full bg-slate-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          // value={message}
          // onChange={(e) => setMessage(e.target.value)}
        />

        {/* Send Button */}
        <button
          type="submit"
          className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition duration-300"
        >
          <IoSend className="text-white text-xl" />
        </button>
      </div>
    </form>
  );
}

export default Typesend;
