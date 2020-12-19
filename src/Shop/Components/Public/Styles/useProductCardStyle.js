import {makeStyles} from "@material-ui/core/styles";


export const useProductCardStyles = makeStyles((theme) => ({
    cardRoot: {
        height: '100%'
    },
    card: {
        direction: 'rtl',
        display: "flex",
        flexDirection: "column",
        alignSelf: "center",
        height: 420,
        // height: "auto",
        // maxWidth: 276,
        width: '100%',
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
        // lineHeight: 1.6,
    },
    discountCard: {
        direction: 'ltr',
        display: "flex",
        flexDirection: 'column',
        // marginTop: 64,
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
        // marginTop: 109,

    },
    priceLabel:{
        fontFamily: 'Shabnam',
        fontSize: 24,
        color: '#434343',
        fontWeight: 'bold'
    }

}));