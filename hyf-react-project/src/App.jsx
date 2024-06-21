import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { DataProvider } from './context/DataContext';
import { FavoritesProvider } from "./context/FavoritesContext";
import Nav from "./components/Nav";
import AppRoutes from "./Routes";
import Footer from "./components/Footer";
import './App.css'; // Import App.css

function App() {
  return (
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
  );
}

export default App;