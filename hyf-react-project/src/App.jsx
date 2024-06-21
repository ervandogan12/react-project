import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { DataProvider } from "./context/DataContext";
import { FavoritesProvider } from "./context/FavoritesContext";
import Nav from "./components/Nav";
import AppRoutes from "./Routes";
import Footer from "./components/Footer";
import "./App.css"; // Import App.css
import { AuthProvider } from "./context/AuthContext";

function App() {
  const isAuthenticated = localStorage.getItem("token") ? true : false;
  return (
    <AuthProvider>
      <DataProvider>
        <FavoritesProvider>
          <Router>
            <div className="appContainer">
              <Nav />
              <div className="contentContainer">
                <AppRoutes />
              </div>
              <Footer />
            </div>
          </Router>
        </FavoritesProvider>
      </DataProvider>
    </AuthProvider>
  );
}

export default App;
