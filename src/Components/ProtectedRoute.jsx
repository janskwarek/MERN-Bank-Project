import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  // Sprawdzamy, czy w przeglądarce jest zapisany jakiś token
  // Na razie to mock ,  backendu potem wyśle sie prawdziwy
  const token = localStorage.getItem("token");

  if (!token) {
    // Brak tokenu? Przekieruj siłą na stronę logowania
    return <Navigate to="/login" replace />;
  }

  // Jest token? Pozwól wyświetlić stronę (children to komponent, który chronimy)
  return children;
};

export default ProtectedRoute;
