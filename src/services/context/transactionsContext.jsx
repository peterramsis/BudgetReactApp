import React,{ createContext, useCallback, useEffect, useReducer, useRef } from "react";
import PropTypes from "prop-types";
import { getTransactions } from "../api/transactions.api";
export const transactionContext = createContext();

const initialState = {
    data: [],
    loading: false,
    error: null
}

const contextReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_State':
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
}

export const TransactionProvider = ({children}) => {

    const [state , dispatch] = useReducer(contextReducer, initialState);
    const isMount = useRef(false);
    const fetchData = useCallback(async () => {
        dispatch({ type: 'FETCH_STATE' });
        try {   
            const response = await getTransactions();
            dispatch({ type: 'FETCH_SUCCESS', payload: response });
        }catch (error) {
            dispatch({ type: 'FETCH_ERROR', payload: error.message });
        }
    } , []);

    useEffect(() => {
        if(!isMount.current) {
            fetchData();
            isMount.current = true;
        }
       
    }, [fetchData]);

    return (
        <transactionContext.Provider value={{ ...state }}>
        {children}
        </transactionContext.Provider>
    );
}
TransactionProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export default TransactionProvider;

