import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import { useAuthStore } from "./store/useAuthStore";
import { useEffect } from "react";

function App() {
  const { authUser, checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  console.log(authUser);

  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;
