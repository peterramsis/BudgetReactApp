import React from 'react';
import PropTypes from 'prop-types';
import TransactionHeader from './transaction_header';
import './transactions.css';
import TransactionsContent from './transactions_content';

const Transactions = () => {
    return (
        <div>
            <TransactionHeader />
            <TransactionsContent />
        </div>
    );
};


Transactions.propTypes = {

};


export default Transactions;
