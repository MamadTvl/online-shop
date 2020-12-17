import React from "react";
import {IconButton, SvgIcon} from "@material-ui/core";
import {useProductSliderStyles} from "./Styles/ProductsSliderStyle";

function NextArrow(props) {
    const classes = useProductSliderStyles()
    const {style, onClick} = props; //todo: delete className
    return (
        <div
            className={classes.nextArrow}
            style={{
                ...style,
            }}
            onClick={onClick}
        >
            <IconButton className={classes.Arrows}>
                <SvgIcon xmlns="http://www.w3.org/2000/svg" width="7.811" height="14.121"
                         viewBox="0 0 7.811 14.121">
                    <path id="chevron-left" d="M9,18l6-6L9,6" transform="translate(-7.939 -4.939)" fill="none"
                          stroke="#434343" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                </SvgIcon>
            </IconButton>

        </div>
    );
}


export default NextArrow