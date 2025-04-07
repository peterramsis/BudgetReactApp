import React,{ createContext, useCallback, useEffect, useReducer, useRef } from "react";
import PropTypes from "prop-types";
import { getCategories } from "../api/categories.api";

export const categoriesContext = createContext();

const initialState = {
    data: [],
    loading: false,
    error: null
}

const contextReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_STATE': // تم التعديل لجعل الاسم متطابقًا
            return {
                ...state,
                loading: true,
                error: null
        };
        case 'FETCH_SUCCESS':
            return {
                ...state,
                loading: false,
                data: action.payload
            };
        case 'FETCH_ERROR':
            return {
                data: [],
                loading: false,
                error: action.payload
            };
     
        default:
            return state;
    }
};

export const CategoriesProvider = ({children}) => {
    const [state , dispatch] = useReducer(contextReducer, initialState);
    const isMount = useRef(false);
    const fetchData = useCallback(async () => {
        dispatch({ type: 'FETCH_STATE' });
        try {   
            const response = await getCategories();
            if(response.status === 404) {
                dispatch({ type: 'FETCH_ERROR', payload:  response.message });
            } // تغيير على النص الذي سيتم عرضه عند التحقق من الحالة
            dispatch({ type: 'FETCH_SUCCESS', payload: response });
        }catch (error) {
            console.error(`1 --${error.message}`);
            dispatch({ type: 'FETCH_ERROR', payload:  error.message });
        }
    } , []);

   

    useEffect(() => {
        if(!isMount.current) {
            fetchData();
            isMount.current = true;
        }
       
    }, [fetchData]);

    return (
        <categoriesContext.Provider value={{ ...state }}>
            {children}
        </categoriesContext.Provider>
    );
}
CategoriesProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export default CategoriesProvider;

