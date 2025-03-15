import React, { useContext } from 'react'
import TransactionItem from './transaction_item';
import { transactionContext } from '../../../../services/context/transactionsContext';

const  TransactionsContent =() =>{
    const {data , loading, error} = useContext(transactionContext);
  return (
    <div className='transactions_content'>
        
         {loading && <p>Loading...</p>}
         {error && <p>{error}</p>}
            {data.map((transaction) => (
                <TransactionItem key={transaction.id} transaction={transaction} />
            ))}

    </div>
  )
}

export default TransactionsContent;