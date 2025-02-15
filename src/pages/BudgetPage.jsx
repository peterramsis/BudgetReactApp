import React from "react";
import MainLayouts from "../layouts/MainLayouts";
import Hero from "../components/budget/hero/hero";
import BudgetContent from "../components/budget/BudgetContent/BudgetContent";

function BudgetPage() {
  return (
    <MainLayouts>
      <Hero />
      <BudgetContent />
    </MainLayouts>
  );
}

export default BudgetPage;
