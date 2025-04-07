import React, { useContext, useState } from 'react';
import "./budgetForm.css";
import { AppButton } from '../../ui';
import { categoriesContext } from '../../../services/context/categoriesContext';

const initalState = {
    title: "",
    amount: "",
    type: "",
    category: "",
    date: "",
};

const BudgetForm = () => {
    const {data : categories , loading: catloading , error: errorLoading} = useContext(categoriesContext);
    const [data , setData] = useState(initalState);
    
    const handleChange = (e) => {
       const {name , value} = e.target;
       setData((prev) => {
        return {
            ...prev,
            [name]: value
        }
       })
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);  
    }

    const handleValidation = (e) => {
        const {name , value} = e.target;

    }

    const handleBlur = (e) => {}
    return (
       
            <form method="POST" className="budget_form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="title">Title :</label>
                  <input type="text" name="title" className="form-control" placeholder="Title" value={data.title} onChange={handleChange} />
                  <p className='error'></p>
                </div>

                <div className="form-group">
                  <label htmlFor="amount">Amount :</label>
                  <input type="text" name="amount"  className="form-control" placeholder="Amount" value={data.amount} onChange={handleChange} />
                  <p className='error'></p>
                </div>

               
               <section className='form-row'>
               <div className="form-group">
                  <label htmlFor="type">Type :</label>
                  <select name="type" className="select" value={data.type} onChange={handleChange}>
                    <option value="">Select Type</option>
                    <option value="Income">Income</option>
                    <option value="Expanses">Expanses</option>
                  </select>
                  <p className='error'></p>
                </div>

                <div className="form-group">
                  <label htmlFor="category">Category :</label>
                  <select name="category" className="select" value={data.category} onChange={handleChange}> 
                    <option value="">Select Category</option>
                    {
                        !catloading && !errorLoading && categories.map((category) => (
                            <option key={category.id} value={category.id}>{category.name}</option>
                        ))

                    }
                  </select>
                  <p className='error'></p>
                </div>

               </section>

                <div className="form-group">
                  <label htmlFor="title">Date :</label>
                  <input type="date" name="date" id="" className="form-control" placeholder="date" value={data.date} onChange={handleChange} />
                  <p className='error'></p>
                </div>


                <AppButton type="primary" title="Add Transaction" size="normal" block={true}>Save</AppButton>

               
            </form>
    
    );
}

export default BudgetForm;
