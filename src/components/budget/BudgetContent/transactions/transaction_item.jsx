import { CurrencyDollarSimple, Pencil, Trash } from '@phosphor-icons/react';
import React from 'react';
import { AppButton } from '../../../ui';
import PropTypes from 'prop-types';
const TransactionItem = ({transaction}) => {
    return (
        <div className='transaction_item'> 
            <section>
            <section className='transaction_item_icon'>
              <CurrencyDollarSimple size={24} color="white" />
            </section>
            <section className='transaction_item_data'>
                 <h4>{transaction.title}</h4>
                 <section>
                    <small>{transaction.amount}</small>
                    <small>{transaction.date}</small>
                    <small>{transaction.category}</small>
                 </section>
            </section>
            </section>
            <section className='transaction_item_cta' >
                <AppButton type='primary' size="small" title="edit">
                  <Pencil size={14} />
                </AppButton>
                <AppButton type='danger' size="small" title="delete">
                   <Trash size={14} />
                </AppButton>
            </section>
        </div>
    );
}

TransactionItem.propTypes = {
    transaction: PropTypes.object.isRequired
}

export default TransactionItem;
