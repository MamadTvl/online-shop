import React from "react";
import PropTypes from 'prop-types';
import {useSignUpPageStyle} from "../../Pages/Styles/useSignUpPageStyle";


function Step(props) {
    const classes = useSignUpPageStyle()
    const {children, index, step} = props

    const style = {
        display:  step !== index ? 'none' : 'flex'
    }
    return (
        <div style={style} className={classes.step}  hidden={step !== index}>
            {step === index && children}
        </div>
    )


}

Step.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    step: PropTypes.number.isRequired,
}
export default Step