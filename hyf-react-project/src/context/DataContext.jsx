import React, { createContext, useContext, useState, useEffect } from "react";
import { categories as importedCategories } from "./Data";

export const DataContext = createContext();

export const useDataSet = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [dataSet, setDataSet] = useState([]);
  const [categories, setCategories] = useState(importedCategories);

  const [categoryState, setCategoryState] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (category) => {
    try {
      setIsLoading(true);
      const response = await fetch(
        category
          ? `https://stephen-king-api.onrender.com/api/${category}`
          : "https://stephen-king-api.onrender.com/api/books"
      );
      const dataSet = await response.json();
      setDataSet(dataSet["data"]);
      console.log(dataSet["data"]);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData(categoryState);
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
        dataSet,
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
