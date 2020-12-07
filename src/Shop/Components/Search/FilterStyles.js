import React from "react";
import {withStyles} from "@material-ui/core/styles";
import {Slider} from "@material-ui/core";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import {makeStyles} from "@material-ui/styles";

export const FilterStyles = withStyles({
    root: {
        color: '#F16522',
        height: 4,
        padding: '20px 0',
        marginLeft: 30,
        maxWidth: 234,
        alignSelf: "center",
    },
    thumb: {
        height: 20,
        width: 20,
        backgroundColor: '#F16522',
        filter: 'drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.16))',
        marginTop: -9,
        marginLeft: -13,
        '& .bar': {
            // display: inline-block !important;
            height: 9,
            width: 1,
            backgroundColor: 'currentColor',
            marginLeft: 1,
            marginRight: 1,
        },
    },
    active: {},
    track: {
        height: 4,
        // color: '#434343',
        // opacity: 0.1,
    },
    rail: {
        color: 'rgba(67, 67, 67, 0.1)',
        height: 4,
    },

})(Slider)

export const useStyle = makeStyles((theme) => ({
    card: {
        padding: theme.spacing(2),
    },
//     width: 228px;
//     height: 0px;
//     background: transparent;
//     border: 1px solid #434343;
// opacity: 0.1;

    priceContainer: {
        display: "flex",
        borderTop: '1px solid rgba(67, 67, 67, 0.1)',
        height: 78,
        maxWidth: '100%',
        width: 228,
        background: 'transparent'
    },
    actions: {
        display: "flex",
        flexDirection: 'column',
        padding: theme.spacing(2)

    },
    fromPrice: {
        height: 78,
        width: 114,
    },
    toPrice: {
        borderRight: '1px solid rgba(67, 67, 67, 0.1)',
        height: 78,
        width: 114,
    }


}))

function ThumbComponent(props) {
    return (
        <div {...props}>
            {
                props['data-index'] === 0
                    ? <NavigateBeforeIcon style={{color: 'white'}}/>
                    : <NavigateNextIcon style={{color: 'white'}}/>
            }
        </div>
    )
}


export default ThumbComponent
