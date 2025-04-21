// import React from "react";

// function Message({ message }) {
//   const authUser = JSON.parse(localStorage.getItem("ChatApp"));
//   const itsMe = message.senderId === authUser.user._id;

//   const chatName = itsMe ? "chat-end" : "chat-start";
//   const chatColor = itsMe ? "bg-blue-500 text-white " : "bg-gray-200 text-black";
//   const bubbleStyle = itsMe
//     ? "rounded-br-none shadow-lg"
//     : "rounded-bl-none shadow-md";

//   const createdAt = new Date(message.createdAt);
//   const formattedTime = createdAt.toLocaleTimeString([], {
//     hour: "2-digit",
//     minute: "2-digit",
//   });

//   return (
//     <div className="p-2 transition-all duration-300">
//       <div className={`chat ${chatName}`}>
//         <div
//           className={`chat-bubble ${chatColor} ${bubbleStyle} px-4 py-2 max-w-xs md:max-w-md break-words hover:scale-[1.02] transition-transform duration-200`}
//         >
//           {message.message}
//         </div>
//         <div className="chat-footer text-xs text-gray-400 mt-1">{formattedTime}</div>
//       </div>
//     </div>
//   );
// }

// export default Message;


import React from "react";

function Message({ message }) {
  const authUser = JSON.parse(localStorage.getItem("ChatApp"));
  const itsMe = message.senderId === authUser.user._id;

  // Alignment of message
  const chatName = itsMe ? "chat-end" : "chat-start";

  // Message color styles for WhatsApp-like appearance
  const chatColor = itsMe
  ? "bg-[#1F7D53] text-white" // WhatsApp Green for current user
  : "bg-[#232D3F] text-white"; // WhatsApp Light Gray for other user

  // Rounded corners for chat bubbles
  const bubbleStyle = itsMe
    ? "rounded-br-lg rounded-tl-lg shadow-lg"
    : "rounded-bl-lg rounded-tr-lg shadow-md";

  // Format message time (display only hours and minutes)
  const createdAt = new Date(message.createdAt);
  const formattedTime = createdAt.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="p-2 transition-all duration-300">
      <div className={`chat ${chatName}`}>
        <div
          className={`chat-bubble ${chatColor} ${bubbleStyle} px-4 py-2 max-w-xs md:max-w-md break-words hover:scale-[1.02] transition-transform duration-200`}
        >
          {message.message}
        </div>
        <div className="chat-footer text-xs text-gray-400 mt-1">{formattedTime}</div>
      </div>
    </div>
  );
}

export default Message;


// const chatColor = itsMe
// ? "bg-[#25d366] text-white" // WhatsApp Green for current user
// : "bg-[#ece5dd] text-black"; // WhatsApp Light Gray for other user
