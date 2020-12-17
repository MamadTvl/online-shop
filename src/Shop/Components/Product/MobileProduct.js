import React from "react";
import {Card} from "@material-ui/core";
import MobilePhotoViewer from "./MobilePhotoViewer";
import {useMobileProductStyle} from "./Styles/useMobileProductStyle";



function MobileProduct(props) {
    const classes = useMobileProductStyle()

    return (
        <Card className={classes.card}>
            <MobilePhotoViewer/>
        </Card>
    )
}




export default MobileProduct