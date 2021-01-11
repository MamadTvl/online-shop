import React from "react";
import {Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";


const useStyle = makeStyles((theme) => ({
    titleContainer: {
        display: "flex",
        marginBottom: 37,
        marginTop: 21,
    },
    titleRectangle: {
        borderRightWidth: 4,
        height: 32,
        marginTop: 6,
        borderRightColor: '#F16522',
        borderRightStyle: 'solid',
        marginLeft: 8,
        [theme.breakpoints.down('xs')]: {
            borderRightWidth: 4,
            height: 28,
            marginTop: 2,
        },

    },
    title: {
        fontFamily: 'Shabnam',
        fontWeight: 'bold',
        fontSize: 28,
        color: '#545454',
        [theme.breakpoints.down('xs')]: {
            fontSize: 20,
        },
    },

}), {index: 1})


function Title(props) {
    const classes = useStyle()

    return(
        <div className={classes.titleContainer}>
            <div className={classes.titleRectangle}/>
            <Typography component={'h1'} className={classes.title}>{props.title}</Typography>
        </div>
    )
}

export default Title