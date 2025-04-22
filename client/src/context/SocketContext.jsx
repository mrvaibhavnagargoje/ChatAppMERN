import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthProvider";
import io from "socket.io-client";

const SocketContext = createContext();

// Custom hook for using socket context
export const useSocketContext = () => {
  return useContext(SocketContext);
};

const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [authUser] = useAuth();

  useEffect(() => {
    let socketInstance;

    if (authUser?.user?._id) {
      socketInstance = io("https://chatappmern-0w6e.onrender.com", {
        query: {
          userId: authUser.user._id,
        },
      });

      setSocket(socketInstance);

      socketInstance.on("getOnlineUsers", (users) => {
        setOnlineUsers(users);
      });

      // Cleanup on component unmount or authUser change
      return () => {
        socketInstance.disconnect();
        setSocket(null);
      };
    }

    // If no user, clean up any existing socket connection
    return () => {
      if (socket) {
        socket.disconnect();
        setSocket(null);
      }
    };
  }, [authUser]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;
