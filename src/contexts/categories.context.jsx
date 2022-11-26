
import { createContext, useEffect, useState } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

// import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.jsx";
// import SHOP_DATA from '../shop-data.js';

export const CategoriesContext = createContext({
    categoriesMap: {}
});

export const CategoriesProvider = ({ children }) => {
    const [ categoriesMap, setCategoriesMap ] = useState({});

    useEffect(() => {
        const getCatMap = async () => {
            const catMap = await getCategoriesAndDocuments();
            setCategoriesMap(catMap);
        }

        getCatMap();
    }, []);

    // batch upload
    // useEffect(() => {
    //     addCollectionAndDocuments('categories', SHOP_DATA);
    // }, []);
    
    const value = { categoriesMap };
    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    )

}