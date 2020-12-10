import React from "react";

import PropTypes from 'prop-types';
import {useProductDetailStyle} from "./Styles/useProductDetailStyle";


function TabPanel(props) {
    const classes = useProductDetailStyle()
    const {children, value, index, ...other} = props;

    return (
        <div
            className={classes.tabPanel}
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && (children)}
        </div>
    );


}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

export default TabPanel