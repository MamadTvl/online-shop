import {makeStyles} from "@material-ui/core/styles";


export const useProductSliderStyles = makeStyles((theme) => ({
    SliderContainer: {
        padding: theme.spacing(0, 17.5),
        [theme.breakpoints.down('sm')]: {
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
    card: {
        direction: 'rtl',
        display: "flex",
        flexDirection: "column",
        alignSelf: "center",
        minHeight: 422,
        // height: "auto",
        maxWidth: 276,

    },
    cardMedia: {
        width: '100%',
        height: 210,

    },
    cardTitle: {
        fontFamily: 'Shabnam',
        fontWeight: 500,
        fontSize: 20,
        color: '#545454',
        lineHeight: 1.6,
    },
    discountCard: {
        direction: 'ltr',
        display: "flex",
        flexDirection: 'column',
        marginTop: 4,
    },
    discountLabel:{
        fontFamily: 'Shabnam',
        fontSize: 20,
        color: '#434343',
        opacity: 0.6,
        textDecoration: 'line-through',
    },
    discountChip: {
        '&.MuiChip-root':{
            color: 'white',
            width: 43,
            height: 24,
            backgroundColor: '#F16522',
            fontFamily: 'Shabnam',
            fontWeight: 'bold',
            fontSize: 16,
            marginRight: 12,
            marginTop: 1,
        },

        '& .MuiChip-label': {
            padding: 0,
        }
    },
    normalCard: {
        display: "flex",
        direction: 'ltr',
        marginTop: 54,

    },
    priceLabel:{
        fontFamily: 'Shabnam',
        fontSize: 24,
        color: '#434343',
        fontWeight: 'bold'
    }

}));