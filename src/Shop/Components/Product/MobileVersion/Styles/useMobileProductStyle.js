import {makeStyles} from "@material-ui/styles";


export const useMobileProductStyle = makeStyles((theme) => ({
    //-------- Product View Card Styles ----------//
    card: {
        padding: 12,
    },
    title: {
        fontFamily: 'Shabnam',
        fontSize: 18,
        fontWeight: 500,
        color: '#545454',
        margin: '16px 0 ',
    },
    priceDetailContainer: {
        display: "flex",
        flexDirection: 'column',
        direction: 'ltr'
    },
    discountContainer: {
        display: 'flex',
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
    prevPrice: {
        fontFamily: 'Shabnam',
        fontSize: 20,
        color: '#434343',
        opacity: 0.6,
        textDecoration: 'line-through',
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
    selects: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginBottom: 22,
    },
    selectContainer: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        marginBottom: 16,
    },

    label: {
        fontFamily: 'Shabnam',
        color: '#434343',
        fontSize: 16,
        marginBottom: 8,

    },
    textFieldRoot: {
        height: 33,
        width: '100%',
        marginLeft: 16,
        borderRadius: 6,
    },
    textFieldFont: {
        fontFamily: 'Shabnam',
        fontSize: 14,
        color: '#545454',
    },
    menu: {
        fontFamily: 'Shabnam',
    },

    buttonGroup: {
        display: 'flex',
        borderRadius: 6,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: 'rgba(67, 67, 67, 0.32)',
        width: '100%',
        height: 33,
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
        fontSize: 19,
        color: '#F16522',
        margin: 'auto'
    }, shopButton: {
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
    //-------- Detail Card Styles ----------//
    detailTitle: {
        fontFamily: 'Shabnam',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#545454',
        marginBottom: 16,
        // margin: '16px 0 ',
    },
    detailDescription: {
        fontFamily: 'Shabnam',
        fontSize: 16,
        color: '#434343',
        opacity: 0.68,
        whiteSpace: 'pre-wrap',
        maxHeight: 148,
        overflowY: 'hidden',
    },
    moreButton: {
        color: '#545454',
        fontSize: '16px',
        fontFamily: 'Shabnam',
        float: 'left',
    },

    //--------comment Card Style-------
    commentCard: {
        backgroundColor: '#FAFAFA',
        display: 'flex',
        flexDirection: 'column',
        padding: 16,
        boxShadow: 'none',
    },
    userComment: {
        fontFamily: 'Shabnam',
        fontSize: 14,
        fontWeight: 500,
        color: '#444444',
        marginBottom: 14,
    },
    commentPreviewDescription: {
        fontFamily: 'Shabnam',
        fontSize: 12,
        color: '#888888',
        maxHeight: 73,
        whiteSpace: 'pre-wrap',
        overflowY: 'hidden',
    },
    commentDescription: {
        fontFamily: 'Shabnam',
        fontSize: 12,
        color: '#888888',
        whiteSpace: 'pre-wrap',
    },
    likeButtonContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
    },
    like: {
        fontFamily: 'Shabnam',
        fontSize: 16,
    },
    defaultButtonColor: {
        color: '#888888',
    },
    defaultColor: {
        color: 'black',
    },
    activeColor: {
        color: '#F16522',
    },
    commentInput: {
        fontFamily: 'Shabnam',
        fontSize: 16,
        color: '#444444'
    },
    commentInputRoot: {
        marginTop: 8,
    },

    //--------dialog styles------------
    dialogHeader: {
        display: "flex",
        background: 'white',
        // padding: theme.spacing(1),
        // justifyContent: 'center',
        width: "100%",
        height: 64,
        flexDirection: 'row',
    },
    dialogTitle: {
        fontFamily: 'Shabnam',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#545454',
        margin: 'auto 0'
    },
    toolbar: {
        ...theme.mixins.toolbar,
        height: 64,
    },
    dialogContent: {
        padding: 24,
        height: '90%'
    },
    snackbarAction: {
        paddingLeft: 0,
    },
    snackbarIcon: {
        marginRight: 16,
    },
    snackbarMessage: {
        direction: 'rtl'
    }
}), {index: 1});
