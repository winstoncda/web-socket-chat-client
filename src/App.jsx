import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import { Toaster } from "react-hot-toast";

function App() {
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
