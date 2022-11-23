import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Login } from "../pages/Login";
import { Register } from "../pages/Login/Register/index";
export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};