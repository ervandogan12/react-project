import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { DataProvider } from "./context/DataContext"; 
import { FavoritesProvider } from "./context/FavoritesContext";   
import Nav from "./components/Nav";
import AppRoutes from "./Routes"; 

function App() {
  return (
    <DataProvider>
      <FavoritesProvider>
        <Router>
          <Nav />
          <AppRoutes />
        </Router>
      </FavoritesProvider>
    </DataProvider>
  );
}

export default App;
