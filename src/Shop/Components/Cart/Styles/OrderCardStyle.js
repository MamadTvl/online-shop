import {makeStyles} from "@material-ui/styles";


export const useOrderCardStyle = makeStyles((theme) => ({

    card: {
        padding: 24,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 16,
        borderRadius: 7,
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',

        },
    },
    image: {
        width: '22%',
        height: '22%',
        borderRadius: 7,
        marginLeft: 16,
        [theme.breakpoints.down('xs')]: {
            width: '80%',
            margin: 'auto'
        },
    },
    name: {
        fontFamily: 'Shabnam',
        fontSize: 20,
        fontWeight: 500,
        color: '#545454',
        [theme.breakpoints.down('xs')]: {
            margin: 'auto'
        },
    },
    deleteLabel: {
      fontFamily: 'Shabnam',
      fontSize: 20,
      color: '#434343',
      margin: 'auto',
        [theme.breakpoints.down('xs')]: {
            margin: 'auto 0'
        },
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    downItem: {
        display: 'flex',
        justifyContent: 'space-between',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column'
        },
    },
    action: {
        display: "flex",
        flexDirection: 'column',
        width: '35%',
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            position: 'relative'
        },
    },
    selectors: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 8,
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            marginTop: 16,
        },
    },
    buttons: {
        display: 'flex',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column'
        },
    },
    deleteButton: {
        display: 'flex',
        [theme.breakpoints.down('xs')]: {
            position: 'absolute',
            bottom: '-45%'
        },

    },

    textFieldRoot: {
        borderRadius: 7,
        height: 40,
    },
    input: {
        fontFamily: 'Shabnam',
        fontSize: 16,
    },
    buttonGroup: {
        display: 'flex',
        borderRadius: 6,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: 'rgba(67, 67, 67, 0.32)',
        width: 120,
        height: 40,
            [theme.breakpoints.down('xs')]: {
                width: '100%'
            },
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
    priceDetailContainer: {
        display: "flex",
        flexDirection: 'column',
        direction: 'ltr',
        alignSelf: 'flex-end',
        [theme.breakpoints.down('xs')]: {
            marginTop: 21
        },
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

}));
