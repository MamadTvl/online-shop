import {makeStyles} from "@material-ui/styles";


export const useCartPageStyle = makeStyles((theme) => ({
    container: {
        marginTop: theme.spacing(7),
        marginBottom: 185,
        padding: theme.spacing(0, 17.5),
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(0, 3),
        },

        [theme.breakpoints.down('xs')]: {
            marginTop: 12,
            padding: 18.5,
        }
    },
    card: {
        display: 'flex',
        borderRadius: 7,
        flexDirection: 'column',
        padding: 24,
        marginBottom: 24,
    },
    discountTitle: {
        fontFamily: 'Shabnam',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#545454',
    },
    detail: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        margin: '12px 0'
    },
    detailContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    detailTitle: {
        fontFamily: 'Shabnam',
        fontSize: 16,
        color: '#545454',
    },
    priceContainer: {
        display: 'flex',
        flexDirection: 'row',

    },
    number: {
        fontFamily: 'Shabnam',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#545454',
    },
    toman: {
        fontFamily: 'Shabnam',
        fontSize: 10,
        color: '#545454',
        opacity: 0.6,
        margin: 'auto'
    },

    save: {
        backgroundColor: '#F16522',
        color: 'white',
        fontSize: '16px',
        fontFamily: 'Shabnam',
        fontWeight: "bold",
        '&:hover': {
            backgroundColor: '#F16522',
            opacity: '70%'
        },

    },
    textFieldRoot: {
        borderRadius: 7,
        height: 48,
    },
    input: {
        fontFamily: 'Shabnam',
        fontSize: 16,
    },
    shopButton: {
        height: 48,
        backgroundColor: '#F16522',
        color: 'white',
        fontSize: '16px',
        fontFamily: 'Shabnam',
        fontWeight: "bold",
        '&:hover': {
            backgroundColor: '#F16522',
            opacity: '70%'
        },
    },
}));
