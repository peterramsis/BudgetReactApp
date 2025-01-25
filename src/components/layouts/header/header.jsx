import React from "react";
import "./header.css";
import { Bank, Plus } from "@phosphor-icons/react";
const Header = () => {
  return (
    <header>
      <section className="logo">
         
          <h1> <Bank size={32} color="red" />  My Budget App</h1>
      </section>
      <section className="buttons">
        <button className="add-btn">
          <Plus size={12} />
        </button>
      </section>
    </header>
  );
};

export default Header;
