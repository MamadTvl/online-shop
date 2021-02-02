import {makeStyles} from "@material-ui/core/styles";


export const useProductCardStyles = makeStyles((theme) => ({
    cardRoot: {
        height: '100%',
        textDecoration: 'none',
        '&:hover':{
            textDecoration: 'none',
            // backgroundColor: 'rgba(241, 101, 34, 0.1)'
        },
    },
    card: {
        direction: 'rtl',
        display: "flex",
        flexDirection: "column",
        alignSelf: "center",
        height: '100%',
        width: '100%',
        borderRadius: 7,
        maxWidth: 265,
        margin: 'auto',
        [theme.breakpoints.down('sm')]: {
            height: 320,
            maxWidth: 250,
            // width: '100%',
        },
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '51%',
    },
    cardMedia: {
        width: '100%',
        height: '49%',
        maxHeight: '49%',
    },
    priceContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
    },
    cardTitle: {
        fontFamily: 'Shabnam',
        fontWeight: 500,
        fontSize: 20,
        color: '#545454',
    },
    discountCard: {
        direction: 'ltr',
        display: "flex",
        flexDirection: 'column',
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

    },
    priceLabel:{
        fontFamily: 'Shabnam',
        fontSize: 24,
        color: '#434343',
        fontWeight: 'bold'
    }

}), {index: 1});