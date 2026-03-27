import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/Navbar";
import Footer from "./Components/Footer.jsx";
import HomePage from "./pages/HomePage";
import HistoryPage from "./pages/HistoryPage";
import ProfilePage from "./pages/ProfilePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { ApplicationForm } from "./pages/AcountAplicationForm.jsx";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  return (
    <div>
      <NavBar />

      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<ApplicationForm />} />
          

          <Route
            path="/history"
            element={
              <ProtectedRoute>
                <HistoryPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
