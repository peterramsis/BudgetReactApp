import React from "react";
import MainLayouts from "../layouts/MainLayouts";
import Hero from "../components/budget/hero/hero";
import AppButton from "../components/budget/button/Button";

function BudgetPage() {
  return (
    <MainLayouts>
      <Hero />
      <section className="buttons">
         <AppButton type="success" size="normal">
          Add New Budget
         </AppButton>
         <AppButton type="danger" size="normal" >
          Delete Budget
         </AppButton>
         <AppButton type="warning" size="normal" >
          Edit Budget
         </AppButton>
         <AppButton type="info" size="normal" >
          View Details
         </AppButton>
         <AppButton type="primary" size="normal" block='true'>
            test
         </AppButton>
      </section>
    </MainLayouts>
  );
}

export default BudgetPage;
