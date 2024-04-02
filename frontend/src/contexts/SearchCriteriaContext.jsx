import { createContext, useState } from "react";

export const SearchCriteriaContext = createContext();

SearchCriteriaContext.displayName = "SearchCriteriaContext";

export const SearchCriteriaProvider = ({
    children,
}) => {
    const [searchCriteria, setSearchCriteria] = useState({});

    const SearchFormSearchHandler = (data) => {
        setSearchCriteria(data)
    }


    const values = {
        SearchFormSearchHandler,
        searchCriteria,
    }

    return (
        <SearchCriteriaContext.Provider value={values}>
            {children}
        </SearchCriteriaContext.Provider>
    );

}

export default SearchCriteriaContext;