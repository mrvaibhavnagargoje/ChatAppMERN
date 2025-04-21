import React, { useEffect } from "react";
import sound from "../assets/notification.mp3";
import useConversation from "../statemanage/useConversation";
import { useSocketContext } from "./SocketContext";
const useGetSocketMessage = () => {
  const { socket } = useSocketContext();
  const { messages, setMessage } = useConversation();

  useEffect(() => {
    socket.on("newMessage", (newMessage) => {
      const notification = new Audio(sound);
      notification.play();
      setMessage([...messages, newMessage]);
    });
    return () => {
      socket.off("newMessage");
    };
  }, [socket, messages, setMessage]);
};
export default useGetSocketMessage;
// import React, { useEffect } from "react";
// import sound from "../assets/notification.mp3";
// import useConversation from "../statemanage/useConversation";
// import { useSocketContext } from "./SocketContext";

// const useGetSocketMessage = () => {
//   const { socket } = useSocketContext();
//   const { setMessage } = useConversation();

//   useEffect(() => {
//     if (!socket) return;

//     socket.on("newMessage", (newMessage) => {
//       const notification = new Audio(sound);
//       notification.play();

//       // ✅ functional update to avoid stale state issues
//       setMessage((prevMessages) => [...prevMessages, newMessage]);
//     });

//     return () => {
//       socket.off("newMessage");
//     };
//   }, [socket, setMessage]); // ✅ no need to add messages here
// };

// export default useGetSocketMessage;
