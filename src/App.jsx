import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/useAuthStore";

function App() {
  const { onlineUsers } = useAuthStore();
  console.log({ onlineUsers });

  return (
    <>
      <div>
        <NavBar />
        <Outlet />
      </div>
      <Toaster />
    </>
  );
}

export default App;
