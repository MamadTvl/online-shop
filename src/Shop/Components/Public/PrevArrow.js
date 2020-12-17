import React from "react";
import {IconButton, SvgIcon} from "@material-ui/core";
import {useProductSliderStyles} from "./Styles/ProductsSliderStyle";

function PrevArrow(props) {
    const classes = useProductSliderStyles()
    const {style, onClick} = props;
    return (
        <div
            className={classes.prevArrow}
            style={{
                ...style,
            }}
            onClick={onClick}
        >
            <IconButton className={classes.Arrows}>
                <SvgIcon xmlns="http://www.w3.org/2000/svg" width="7.811" height="14.121"
                         viewBox="0 0 7.811 14.121">
                    <path id="chevron-left" d="M15,18,9,12l6-6" transform="translate(-8.25 -4.939)" fill="none"
                          stroke="#434343" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                </SvgIcon>
            </IconButton>

        </div>
    );
}

export default PrevArrow