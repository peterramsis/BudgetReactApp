import React, { useState } from "react";
import "./header.css";
import { Bank, Plus } from "@phosphor-icons/react";
import {AppButton, AppModel} from "../../ui";
import BudgetForm from "../../budget/budgetForm/budgetForm";

const Header = () => {
   const [visible, setVisible] = useState(false);
  return (
    <header>
      <section className="logo">
          <h1> <Bank size={32} color="red" />  My Budget App</h1>
      </section>
      <section className="buttons">
        <AppButton type="primary" title="Add Transaction" size="small" onClick={() => setVisible(true)}><Plus size={12} /></AppButton>
        <AppModel visible={visible} closeModel={() => setVisible(false)}>
          <BudgetForm />
        </AppModel>
      </section>
    </header>
  );
};

export default Header;
