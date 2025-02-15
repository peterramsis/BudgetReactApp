import React from 'react'
import './tabs.css';

 const Tabs = () => {
  return (
    <div className='tabs'>
          <section className='tabs_titles'> 
             <section className='tab_title active'>
                  Tab 1
             </section>
             <section className='tab_title'>
                  Tab 2
             </section>
             <section className='tab_title'>
                  Tab 3
             </section>
          </section>
          <section className='tabs_content'>
              content 888
          </section>
    </div>
  )
}
export default Tabs;