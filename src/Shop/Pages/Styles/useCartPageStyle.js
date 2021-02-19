import {makeStyles} from "@material-ui/styles";


export const useCartPageStyle = makeStyles((theme) => ({
    container: {
        marginTop: theme.spacing(7),
        marginBottom: 185,
        padding: theme.spacing(0, 17.5),
        [theme.breakpoints.down('md')]: {
            padding: theme.spacing(0, 3),
        },

        [theme.breakpoints.down('xs')]: {
            marginTop: 12,
            padding: 18.5,
        },
        [theme.breakpoints.up('lg')]: {
            padding: theme.spacing(0, 17.5),
        },
        [theme.breakpoints.up('xl')]: {
            maxWidth: 1560,
            margin: 'auto',
            padding: 0,
        },

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
        margin: 'auto',
        marginRight: 4,
    },

    save: {
        backgroundColor: '#F16522',
        color: 'white',
        fontSize: '16px',
        fontFamily: 'Shabnam',
        fontWeight: "bold",
        '&:hover': {
            backgroundColor: '#F16522',
            // opacity: '70%'
        },
        marginLeft: '-8px'

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
            // opacity: '70%'
        },
    },
    backButton: {
        height: 48,
        borderColor: '#F16522',
        borderWidth: '2px',
        color: '#F16522',
        fontSize: '16px',
        fontFamily: 'Shabnam',
        fontWeight: "bold",
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color:'#F16522'
    },

    // steps style
    orderCardsStep: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    // step index = 1 :
    addAddress: {
        fontFamily: 'Shabnam',
        fontSize: 16,
        color: '#F16522',
        width: 'fit-content'
    },
    title: {
        fontFamily: 'Shabnam',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#545454',
        marginTop: 32,
        marginBottom: 16
    },
    descriptionLabel: {
        fontFamily: 'Shabnam',
        fontSize: 14,
        color: '#545454',
        marginBottom: 12,
    },


}), {index: 1});
