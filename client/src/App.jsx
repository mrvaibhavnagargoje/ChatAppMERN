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
