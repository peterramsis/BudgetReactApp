import React from "react";
import "./hero.css";
import BudgetNumber from "../BudgetNumber/Budget";
import { Money } from "@phosphor-icons/react";
const Hero = () => {
  return (
    <section className="hero_budget">
      <section className="hero_budget_bg">
        <img src="https://picsum.photos/1365/400" alt="bg" />
        <section className="overlay"></section>
      </section>
      <section className="container">
        <section className="hero_number_budget">
              <BudgetNumber title="Total Money" money="$ 1,000,000">
                 <Money size={100} />
              </BudgetNumber>
              <BudgetNumber title="Total income" money="$ 1,000,000">
              <Money size={100} />
              </BudgetNumber>
              <BudgetNumber title="Total Expense" money="$ 1,000,000">
              <Money size={100} />
              </BudgetNumber>
        </section>
      </section>
    </section>
  );
};

export default Hero;
