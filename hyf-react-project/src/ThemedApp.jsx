// Import necessary dependencies
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { DataProvider } from "./context/DataContext";
import { FavoritesProvider } from "./context/FavoritesContext";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import Nav from "./components/Nav";
import AppRoutes from "./Routes";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";
import "./App.css";

function ThemedApp() {
  const { theme } = useTheme();

  return (
    <AuthProvider>
      <DataProvider>
        <FavoritesProvider>
          <Router>
            <div className={theme === "light" ? "light-theme" : "dark-theme"}>
              <div className="appContainer">
                <Nav />
                <UserProfile />
                <div className="contentContainer">
                  <AppRoutes />
                </div>
              </div>
            </div>
          </Router>
        </FavoritesProvider>
      </DataProvider>
    </AuthProvider>
  );
}

export default ThemedApp;