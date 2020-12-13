import React from "react";
import PropTypes from 'prop-types';
import {makeStyles} from "@material-ui/styles";

const useStyle = makeStyles((theme) => ({
    step: {
        display: 'flex',
        padding: 32,
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column'
        },
    },
}))

function Step(props) {
    const classes = useStyle()
    const {children, index, step} = props

    const style = {
        display: step !== index ? 'none' : 'flex'
    }
    return (
        <div style={style} className={classes.step} hidden={step !== index}>
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