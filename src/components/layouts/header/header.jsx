import React from "react";
import "./header.css";
import { Bank, Plus } from "@phosphor-icons/react";
import {AppButton} from "../../ui";

const Header = () => {
  return (
    <header>
      <section className="logo">
          <h1> <Bank size={32} color="red" />  My Budget App</h1>
      </section>
      <section className="buttons">
        <AppButton type="primary"><Plus size={12} /></AppButton>
      </section>
    </header>
  );
};

export default Header;
