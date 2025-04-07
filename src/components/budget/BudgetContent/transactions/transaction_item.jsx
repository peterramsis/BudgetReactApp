import { CurrencyDollarSimple, Pencil, Trash } from '@phosphor-icons/react';
import React, { useContext, useMemo } from 'react';
import { AppButton } from '../../../ui';
import PropTypes from 'prop-types';
import { transactionContext } from '../../../../services/context/transactionsContext';
const TransactionItem = ({transaction , categories}) => {
    const {handleDelete} = useContext(transactionContext);
    
   
    const currentCategory = useMemo(() =>{
        const category =categories.find((category)=>{
            console.log( category.id ,transaction.category);
            return category.id == transaction.category;
        });
        const categoryName = category ? category.name : '';
        return categoryName;
    }, [categories, transaction]);
    
    
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
                    <small>{currentCategory}</small>
                 </section>
            </section>
            </section>
            <section className='transaction_item_cta' >
                <AppButton type='primary' size="small" title="edit">
                  <Pencil size={14} />
                </AppButton>
                <AppButton type='danger' size="small" title="delete" onClick={() =>handleDelete(transaction.id) }>
                   <Trash size={14} />
                </AppButton>
            </section>
        </div>
    );
}

TransactionItem.propTypes = {
    transaction: PropTypes.object.isRequired,
    categories: PropTypes.array.isRequired,
}

export default TransactionItem;
