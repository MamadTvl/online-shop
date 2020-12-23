import React from "react";
import {withStyles} from "@material-ui/core/styles";
import {Checkbox, Slider} from "@material-ui/core";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import {makeStyles} from "@material-ui/styles";

export const FilterStyles = withStyles((theme) => ({
    root: {
        color: '#F16522',
        height: 4,
        // padding: '20px 0',
        marginLeft: 30,
        maxWidth: 234,
        alignSelf: "center",
        [theme.breakpoints.down('xs')]: {
            maxWidth: 312,
            marginLeft: 20,
        },
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

}))(Slider)

export const useFilterPriceStyle = makeStyles((theme) => ({
    card: {
        padding: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(1),
        },
        [theme.breakpoints.down('xs')]: {
            height: 120,
        },

    },
    priceContainer: {
        display: "flex",
        borderTop: '1px solid rgba(67, 67, 67, 0.1)',
        height: 78,
        maxWidth: '100%',
        width: 228,
        background: 'transparent',
        [theme.breakpoints.down('xs')]: {
            justifyContent: 'center',
            width: 311,
        },
    },
    actions: {
        display: "flex",
        flexDirection: 'column',

    },
    fromPrice: {
        display: "flex",
        flexDirection: 'column',
        justifyContent: "center",
        textAlign: 'center',
        height: 78,
        width: 114,
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'row',
            padding: 8,
            width: 155,

        },
    },
    toPrice: {
        display: "flex",
        flexDirection: 'column',
        justifyContent: "center",
        textAlign: 'center',
        borderRight: '1px solid rgba(67, 67, 67, 0.1)',
        height: 78,
        width: 114,
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'row',
            padding: 8,
            width: 155,
            margin: 'auto'
        },
    },
    label: {
        fontFamily: 'Shabnam',
        fontSize: '14px',
        color: '#545454',
        opacity: 0.68,
        [theme.breakpoints.down('xs')]: {
            margin: '0 8px',
            textAlign: 'center'
        },
    },
    price: {
        fontFamily: 'Shabnam',
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#545454',
        [theme.breakpoints.down('xs')]: {
            fontSize: 14,
        },
    }
}), {index: 1})
export default function ThumbComponent(props) {
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


export const useFilterCategoryStyle = makeStyles((theme) => ({

    categories: {
        padding: 0,
    },
    container: {
        display: "flex",
        flexDirection: "column",
        width: '100%',
        marginBottom: 8,
    },
    title: {
        fontFamily: 'Shabnam',
        fontWeight: 'bold',
        fontSize: 16,
        color: '#545454',
        marginRight: 11,
    },

    label: {
        fontFamily: 'Shabnam',
        fontSize: 14,
        color: '#545454'
    },

    seeMoreContainer: {
        display: "flex",
    },
    seeMoreText: {
        fontFamily: 'Shabnam',
        fontSize: 13,
        margin: 'auto 0',
        color: 'black',
        opacity: 0.8,
    },
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
        marginRight: 11,
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },

}), {index: 1})
export const CategoryCheckbox = withStyles({
    root: {
        color: '#434343',
        opacity: 0.5,
        '&$checked': {
            color: '#F16522',
            opacity: 1,
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);


