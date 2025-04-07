import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import './model.css';
const AppModel = ({visible , children ,closeModel}) => {
    if (visible) {

        return ReactDOM.createPortal(
            <div className='modal-overlay' onClick={() => closeModel(false)}>
                <div className='modal' onClick={(e) => e.stopPropagation()}>
                    {children}
                </div>
            </div>,
            document.querySelector('#model-root')
        );
    }
    return null;
}

AppModel.propTypes = {
    children: PropTypes.node.isRequired,
    visible: PropTypes.bool,
    closeModel: PropTypes.func.isRequired,
}
export default AppModel;


