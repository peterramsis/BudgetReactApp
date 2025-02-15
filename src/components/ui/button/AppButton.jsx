import React from 'react'
import PropTypes from 'prop-types'
import './button.css';
const AppButton = ({children ,type='primary', size='normal' , block = false,...props }) => {
  return (
    <button className={`btn btn-${type} btn-${size} ${block ? 'btn-block' : ''}`} {...props}>
        {children}
    </button>
  )
}

AppButton.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    type: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']).isRequired,
    props: PropTypes.node.isRequired,
    size: PropTypes.oneOf(['small', 'normal', 'large']).isRequired,
    block: PropTypes.bool,
}

export default AppButton