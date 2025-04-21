import { Routes, Route, Navigate } from "react-router-dom"
import Login from "./components/Login"
import Signup from "./components/Signup"
import { useAuth } from "./context/AuthProvider"
import Left from "./home/left/Left"
import Logout from "./home/left1/Logout"
import Right from "./home/right/Right"
import { Toaster } from "react-hot-toast";
function App() {
  const [authUser] = useAuth()

  return (
    <>
    <Routes>
      <Route
        path="/"
        element={
          authUser ? (
            <div className="flex h-screen">
              <Logout />
              <Left />
              <Right />
            </div>
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route
        path="/login"
        element={authUser ? <Navigate to="/" /> : <Login />}
      />
      <Route
        path="/signup"
        element={authUser ? <Navigate to="/" /> : <Signup />}
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    <Toaster />
    </>
  )
}

export default App
// import { Routes, Route, Navigate } from "react-router-dom"
// import Login from "./components/Login"
// import Signup from "./components/Signup"
// import { useAuth } from "./context/AuthProvider"
// import Left from "./home/left/Left"
// import Logout from "./home/left1/Logout"
// import Right from "./home/right/Right"
// import { Toaster } from "react-hot-toast";
// import { useEffect, useState } from "react"

// function App() {
//   const [authUser] = useAuth();
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
//   const [showChat, setShowChat] = useState(false);

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth < 768);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <>
//       <Routes>
//         <Route
//           path="/"
//           element={
//             authUser ? (
//               <div className="flex h-screen w-full relative">
//                 <Logout />
//                 {/* Mobile View */}
//                 {isMobile ? (
//                   <>
//                     {!showChat ? (
//                       <div className="absolute inset-0 z-10">
//                         <Left setShowChat={setShowChat} />
//                       </div>
//                     ) : (
//                       <div className="absolute inset-0 z-10">
//                         <Right setShowChat={setShowChat} />
//                       </div>
//                     )}
//                   </>
//                 ) : (
//                   // Desktop view
//                   <>
//                     <Left />
//                     <Right />
//                   </>
//                 )}
//               </div>
//             ) : (
//               <Navigate to="/login" />
//             )
//           }
//         />
//         <Route path="/login" element={authUser ? <Navigate to="/" /> : <Login />} />
//         <Route path="/signup" element={authUser ? <Navigate to="/" /> : <Signup />} />
//         <Route path="*" element={<Navigate to="/" />} />
//       </Routes>
//       <Toaster />
//     </>
//   );
// }
// export default App