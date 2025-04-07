import React, { useContext } from 'react'
import TransactionItem from './transaction_item';
import { transactionContext } from '../../../../services/context/transactionsContext';
import { categoriesContext } from '../../../../services/context/categoriesContext';

const  TransactionsContent =() =>{
    const {data , loading, error} = useContext(transactionContext);
    const {data: categories , loading: catloading , error: errorLoading} = useContext(categoriesContext);
  return (
    <div className='transactions_content'>
        
        {loading && catloading && <p>Loading...</p>}

        {errorLoading && error && !loading && !catloading && <p> { error } </p>}

{!catloading  && !loading && !error && !errorLoading && data.length === 0 && (
    <p>No transactions found</p>
)}

{!loading && !catloading  && !error && !errorLoading && Array.isArray(data) && data.length > 0 && (
                data.map(transaction => (
                    <TransactionItem key={transaction.id} transaction={transaction} categories={categories} />
                ))
            )}

    </div>
  )
}

export default TransactionsContent;