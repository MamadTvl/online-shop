import {makeStyles} from "@material-ui/styles";


export const useProductStyle = makeStyles((theme) => ({
    content: {
        padding: 24,
        display: 'flex',
        justifyContent: 'space-between',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column'
        }
    },
    detailContainer: {
        display: 'flex',
        marginRight: theme.spacing(3),
        width: '35%',
        // height: '30vw',
        flexDirection: 'column',
        justifyContent: 'space-between',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        }
    },

    details: {
        display: 'flex',
        flexDirection: 'column',
    },

    title: {
        fontFamily: 'Shabnam',
        fontSize: 28,
        fontWeight: 'bold',
        color: '#545454',
        marginBottom: 16,
    },

    subtitle: {
        fontFamily: 'Shabnam',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#545454',
        marginBottom: 6,
    },

    detail: {
        fontFamily: 'Shabnam',
        fontSize: 14,
        opacity: 0.68,
        color: '#434343',
        width: '67%',
        whiteSpace: 'pre-wrap'
    },

    selects: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flexWrap: "wrap",
        margin: '0 -8px -8px 16px'
    },

    selectContainer: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        padding: 8,

    },
    menu: {
        fontFamily: 'Shabnam',
    },

    label: {
        fontFamily: 'Shabnam',
        color: '#434343',
        fontSize: 16,
        marginBottom: 8,

    },
    textFieldRoot: {
        height: 40,
        width: '100%',
        marginLeft: 16,
        borderRadius: 6,
    },
    textFieldFont: {
        fontFamily: 'Shabnam',
        fontSize: 14,
        color: '#545454',
    },

    buttonGroup: {
        display: 'flex',
        borderRadius: 6,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: 'rgba(67, 67, 67, 0.32)',
        width: '100%',
        height: 40,
    },

    addButton: {
        '&:hover': {
            color: '#F16522'
        }
    },

    removeButton: {
        '&:hover': {
            color: '#F16522'
        }
    },

    countLabel: {
        fontFamily: 'Shabnam',
        fontSize: 24,
        color: '#F16522',
        margin: 'auto'
    },

    actionContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        direction: 'ltr'
    },

    shareButton: {
        height: 40,
        width: 40,
        direction: 'ltr'
    },
    priceDetailContainer: {
        display: "flex",
        flexDirection: 'column',
        direction: 'ltr'

    },

    discountContainer: {
        display: 'flex',
    },

    prevPrice: {
        fontFamily: 'Shabnam',
        fontSize: 20,
        color: '#434343',
        opacity: 0.6,
        textDecoration: 'line-through',
    },

    discountChip: {
        color: 'white',
        width: 43,
        height: 24,
        backgroundColor: '#F16522',
        fontFamily: 'Shabnam',
        fontWeight: 'bold',
        fontSize: 16,
        marginRight: 12,
        marginTop: 1,

        '& .MuiChip-label': {
            padding: 0,
        }
    },


    priceContainer: {
        display: 'flex',
    },

    price: {
        fontFamily: 'Shabnam',
        fontSize: 24,
        color: '#434343',
        fontWeight: 'bold'
    },

    toman: {
        fontFamily: 'Shabnam',
        fontSize: 14,
        color: '#545454',
        marginRight: 8,
        marginTop: 8,
    },

    shopButton: {
        width: '100%',
        height: 40,
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

}), {index: 1});
