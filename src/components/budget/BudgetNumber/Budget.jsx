import React from "react";
import PropTypes from "prop-types";
const BudgetNumber = (props)=>{
    return <section className="budget_numbers">
             <section className="budget_number_icon">
                    {props.children}
             </section>
             <section className="budget_number_money">
                    <section>
                        <h1>{props.title}</h1>
                        <h3>{props.money}</h3>
                    </section>
             </section>
          </section>
}

BudgetNumber.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string.isRequired,
    money: PropTypes.string.isRequired
};
export default BudgetNumber;