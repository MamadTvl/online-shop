import React from "react";
import {Slide} from "@material-ui/core";

export default function Transition(props) {
    console.log(props)
    return <Slide direction="down"  {...props} />;
}