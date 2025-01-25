import React from "react";
import Header from "../components/layouts/header/header";
import PropTypes from "prop-types";
import Footer from "../components/layouts/footer/footer";
function MainLayouts(props) {
  return (
    <>
      <Header />
      {props.children}
      {/* <Footer /> */}
    </>
  );
}
MainLayouts.propTypes = {
  children: PropTypes.node,
};
export default MainLayouts;
