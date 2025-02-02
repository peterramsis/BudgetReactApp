import React from 'react'
import PropTypes from 'prop-types'

const Tabs = ({children}) => {
    // const tabs = [...children];
  return (
   <section className="tabs">
        <section className="tabs_title"> 
              <section className='tab_title'>
                  Tab 1
              </section>
              <section className='tab_title'>
                  Tab 2
              </section>
              <section className='tab_title'>
                  Tab 3
              </section>
        </section>
        <section className="tabs_content">
            content
        </section>
   </section>
  )
}

Tabs.propTypes = {
    children: PropTypes.node.isRequired,
  
}

export default Tabs