import {makeStyles} from "@material-ui/core/styles";


export const useProductSliderStyles = makeStyles((theme) => ({
    sliderContainer: {
        padding: theme.spacing(0, 17.5),
        [theme.breakpoints.down('md')]: {
            padding: theme.spacing(0, 3),
        },

        [theme.breakpoints.down('xs')]: {
            padding: 18.5,
        },

    },
    title: {
        fontFamily: 'Shabnam',
        fontWeight: 'bold',
        fontSize: 28,
        color: '#545454',
    },
    titleContainer: {
        borderRightWidth: 4,
        borderRightColor: '#F16522',
        borderRightStyle: 'inset',
        marginLeft: 8
    },
    Arrows: {
        width: 48,
        height: 48,
        borderRadius: '50%',
        backgroundColor: 'white',
        filter: 'drop-shadow(0px 1px 8px rgba(0, 0, 0, 0.05))',
    },
    prevArrow: {
        display: "block",
        position: "absolute",
        left: '-8px',
        top: '38%',
        zIndex: 1,
    },
    nextArrow: {
        display: "block",
        position: "absolute",
        right: '-8px',
        top: '38%',
        zIndex: 1,
    },
    slider: {
        padding: 20,
    },

}), {index: 1});