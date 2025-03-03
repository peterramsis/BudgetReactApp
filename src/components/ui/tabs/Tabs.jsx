import React, { useState } from "react";
import "./tabs.css";

const Tabs = ({ children, defaultTab = 1}) => {
  const tabs = [...children];
  const tabsTitles = tabs.map((t) => t.props.title || "");
  const tabsContent = tabs.map((t) => t.props.children || "");
  const [activeTab , setActiveTab] = useState(defaultTab);
  return (
    <div className="tabs">
      <section className="tabs_titles">
        {tabsTitles.map((title, index) => (
          <section className={ `tab_title ${activeTab === index + 1 ? 'active' : ''}`} key={ `tabs-title-${index +1}`} onClick={()=>setActiveTab(index + 1)}>{title}</section>
        ))}
      </section>
      <section className="tabs_content">
          {tabsContent[activeTab - 1]}
      </section>
    </div>
  );
};
export default Tabs;
