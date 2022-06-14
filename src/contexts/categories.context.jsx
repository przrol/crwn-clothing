import { createContext, useEffect, useState } from "react";

import SHOP_DATA from "../shop-data.js";
import {
  addCollectionAndDocuments,
  getCategoriesAndDocuments,
} from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  // useEffect(() => {
  //   addCollectionAndDocuments('categories', SHOP_DATA)
  // },[])

  useEffect(() => {
    const getCategories = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
      setCategoriesMap(categoryMap);
    };

    getCategories();
  }, []);

  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
