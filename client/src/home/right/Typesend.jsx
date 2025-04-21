import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import { BsEmojiLaughing } from "react-icons/bs";
import EmojiPicker from "emoji-picker-react";
import useSendMessage from "../../context/useSendMessage";

function Typesend() {
  const [message, setMessage] = useState("");
  const [showEmoji, setShowEmoji] = useState(false);
  const { loading, sendMessages } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    await sendMessages(message);
    setMessage("");
    setShowEmoji(false);
  };

  const handleEmojiClick = (emojiData) => {
    setMessage((prev) => prev + emojiData.emoji);
  };

  return (
    <div className="relative bg-gray-900 p-3 rounded-xl shadow-inner">
      {showEmoji && (
        <div className="absolute bottom-[70px] left-2 z-10">
          <EmojiPicker onEmojiClick={handleEmojiClick} theme="dark" />
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="flex items-center space-x-3">
          <button
            type="button"
            onClick={() => setShowEmoji((prev) => !prev)}
            className="text-yellow-400 text-2xl hover:rotate-12 hover:scale-125 transition-transform duration-300 ease-in-out"
            title="Pick emoji"
          >
            <BsEmojiLaughing className="animate-bounce" />
          </button>
          <input
            type="text"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1 px-4 py-3 rounded-full bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
          />
          <button
            type="submit"
            disabled={loading || !message.trim()}
            className={`p-3 rounded-full bg-blue-600 hover:bg-blue-700 active:scale-95 transition-transform duration-150 ${
              loading || !message.trim()
                ? "cursor-not-allowed opacity-50"
                : "cursor-pointer"
            }`}
          >
            <IoSend className="text-white text-2xl" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Typesend;



// <form  onSubmit={handleSubmit} className="bg-gray-800 px-4 py-2">
//   <div className="flex items-center space-x-2 h-[8vh]">
//     {/* Text Input */}
//     <input
//       type="text"
//       placeholder="Type your message..."
//       className="w-full py-3 px-4 rounded-full bg-slate-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
//       value={message}
//       onChange={(e) => setMessage(e.target.value)}
//     />

//     {/* Send Button */}
//     <button
//       type="submit"
//       className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition duration-300"
//     >
//       <IoSend className="text-white text-xl" />
//     </button>
//   </div>
// </form>
