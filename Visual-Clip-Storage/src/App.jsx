import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  
  
  useEffect(() => {
    authService
    .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  
  return !loading ? (
    <div className="min-h-screen bg-gray-100 p-4 flex items-center justify-center">
      <p className="text-xl font-bold text-gray-800">text</p>
      <div>
        <Header/>
        <main>

        </main>
        <Footer/>
      </div>
    </div>
  ) : null;
}

export default App;
