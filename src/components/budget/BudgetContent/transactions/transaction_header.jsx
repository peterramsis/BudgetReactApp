import React from 'react';

const TransactionHeader = () => {
    return (
        <section className='transaction_header'>
            
            <section className='transaction_title'>
               <h2>Transactions</h2>
            </section>

            <section className='transaction_buttons'>
                <select>
                    <option value=""> Filter by </option>
                    <option value="title">title</option>
                    <option value="category">category</option>
                </select>

                <select>
                    <option value=""> Order by </option>
                    <option value="title">title</option>
                    <option value="category">category</option>
                </select>

            </section>
        </section>
    );
}

export default TransactionHeader;
