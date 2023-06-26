import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "./contexts/UserContext";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";

function App() {
  const [user, setUser] = useState(undefined);
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState(undefined);
  const contextValue = {
    user,
    setUser,
    token,
    setToken,
    userId,
    setUserId,
  };
  return (
    <UserContext.Provider value={contextValue}>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<LoginPage />} />
          <Route path="/signup" element={<RegistrationPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/cart/:id" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
