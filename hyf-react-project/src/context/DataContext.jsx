import React, { createContext, useContext, useState, useEffect } from "react";
import { categories as importedCategories } from "./Data";

export const DataContext = createContext();

export const useDataSet = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [booksData, setBooksData] = useState([]);
  const [villainsData, setVillainsData] = useState([]);
  const [shortsData, setShortsData] = useState([]);

  const [categories, setCategories] = useState(importedCategories);

  const [categoryState, setCategoryState] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (category) => {
    if (category) {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://stephen-king-api.onrender.com/api/${category}`
        );
        const data = await response.json();

        // Update the correct dataset based on the category
        if (category === "books") {
          setBooksData(data["data"]);
        } else if (category === "villains") {
          setVillainsData(data["data"]);
        } else if (category === "shorts") {
          setShortsData(data["data"]);
        }

        setIsLoading(false);
      } catch (error) {
        setError(error.message);
      }
    }
  };

  useEffect(() => {
    if (categoryState) {
      fetchData(categoryState);
    }
  }, [categoryState]);

  const handleCategoryClick = (clickedCategory) => {
    setCategoryState(
      clickedCategory === categoryState ? undefined : clickedCategory
    );
  };

  return (
    <DataContext.Provider
      value={{
        categories,
        booksData,
        villainsData,
        shortsData,
        isLoading,
        error,
        categoryState,
        handleCategoryClick,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
