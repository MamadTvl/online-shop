import React from "react";
import PropTypes from 'prop-types';


function Step(props) {

    const {children, index, step, style} = props


    return (
        <div style={style} hidden={step !== index}>
            {step === index && children}
        </div>
    )


}

Step.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    step: PropTypes.number.isRequired,
    style: PropTypes.object.isRequired,
}
export default Step