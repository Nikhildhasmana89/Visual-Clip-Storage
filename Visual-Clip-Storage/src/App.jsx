import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkUser = async () => {
      try {
        await authService.login({
          email: "testuser@example.com",
          password: "mypassword123",
        });

        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(login(userData));
        } else {
          dispatch(logout());
        }
      } catch (err) {
        console.log("Auth error:", err);
        dispatch(logout());
      } finally {
        setLoading(false);
      }
    };

    checkUser();
  }, []);

  return !loading ? (
    <div className="flex flex-col min-h-screen  text-white">
      <Header />

      <main className="flex-grow bg-gray-950">
        <Outlet />
      </main>

      <Footer />
    </div>
  ) : null;
}

export default App;
