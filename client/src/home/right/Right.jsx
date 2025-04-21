import React, { useEffect } from "react"
import Chartuser from "./Chartuser"
import Messages from "./Messages"
import Typesend from "./Typesend"
import useConversation from "../../statemanage/useConversation"
import Loading from "../../components/Loading"
import { useAuth } from "../../context/AuthProvider"
import { CiMenuFries } from "react-icons/ci";

export default function Right() {
  const { selectedConversation, setSelectedConversation } = useConversation()
  useEffect(() => {
    return setSelectedConversation(null)
  }, [setSelectedConversation])
  return (
    <div className="w-full bg-slate-900 text-gray-300">
      <div>
        {!selectedConversation ? (
          <NoChatSelected />
        ) : (
          <>
            <Chartuser />
            <div
              className=" flex-1 overflow-y-auto"
              style={{ maxHeight: "calc(88vh - 8vh)" }}
            >
              <Messages />
            </div>
            <Typesend />
          </>
        )}
      </div>
    </div>
  )
}

const NoChatSelected = () => {
  const [authUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="relative">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-ghost drawer-button lg:hidden absolute left-5"
        >
          <CiMenuFries className="text-white text-xl" />
        </label>
        <div className="flex h-screen items-center justify-center">
          <h1 className="text-center">
            Welcome{" "}
            <span className="font-semibold text-xl">
              {authUser.user.fullname}
            </span>
            <br />
            No chat selected, please start conversation by selecting anyone to
            your contacts
          </h1>
        </div>
      </div>
    </>
  );
};

// import React, { useEffect } from "react";
// import Chartuser from "./Chartuser";
// import Messages from "./Messages";
// import Typesend from "./Typesend";
// import useConversation from "../../statemanage/useConversation";
// import Loading from "../../components/Loading";
// import { useAuth } from "../../context/AuthProvider";
// import { CiMenuFries } from "react-icons/ci";
// import { ArrowLeft } from "lucide-react";

// export default function Right({ setShowChat }) {
//   const { selectedConversation, setSelectedConversation } = useConversation();

//   useEffect(() => {
//     return () => setSelectedConversation(null);
//   }, [setSelectedConversation]);

//   return (
//     <div className="w-full h-screen bg-slate-900 text-gray-300 flex flex-col">
//       {!selectedConversation ? (
//         <NoChatSelected setShowChat={setShowChat} />
//       ) : (
//         <>
//           {/* Mobile back button */}
//           <div className="md:hidden flex items-center gap-4 px-4 py-2 bg-slate-800 border-b border-slate-700">
//             <button onClick={() => setShowChat(false)}>
//               <ArrowLeft className="text-white" />
//             </button>
//             <span className="text-lg font-semibold">{selectedConversation?.fullname || "Chat"}</span>
//           </div>

//           {/* Chat UI */}
//           <Chartuser />
//           <div
//             className="flex-1 overflow-y-auto px-2"
//             style={{ maxHeight: "calc(88vh - 8vh)" }}
//           >
//             <Messages />
//           </div>
//           <Typesend />
//         </>
//       )}
//     </div>
//   );
// }

// const NoChatSelected = ({ setShowChat }) => {
//   const [authUser] = useAuth();

//   return (
//     <div className="relative w-full h-full flex flex-col">
//       {/* Drawer toggle for mobile */}
//       <div className="lg:hidden p-2 absolute top-4 left-4 z-10">
//         <label htmlFor="my-drawer-2" className="btn btn-ghost drawer-button">
//           <CiMenuFries className="text-white text-2xl" />
//         </label>
//       </div>

//       {/* Centered Welcome */}
//       <div className="flex-grow flex flex-col items-center justify-center text-center px-4">
//         <h1 className="text-xl font-medium text-white">
//           Welcome{" "}
//           <span className="font-semibold text-green-400">
//             {authUser?.user?.fullname || "User"}
//           </span>
//         </h1>
//         <p className="mt-3 text-sm text-gray-400">
//           No chat selected.<br />Start a conversation by selecting a contact.
//         </p>
//       </div>
//     </div>
//   );
// };
