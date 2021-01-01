import {makeStyles} from "@material-ui/styles";


export const useProductDetailStyle = makeStyles((theme) => ({

    card: {
        marginTop: 24,
    },
    appBar: {
        backgroundColor: 'white'
    },
    tabsContainer: {
        borderBottomStyle: "solid",
        borderBottomColor: '#C2C2C2',
        borderBottomWidth: 1,

    },
    indicator: {
        backgroundColor: '#F16522',
    },
    tab: {
        fontFamily: 'Shabnam',
        fontSize: '16',
        color: '#545454',
        opacity: 0.68,
        '&:active': {
            color: '#545454',
            opacity: 1,
            fontWeight: 'bold',
        }
    },
    tabPanel: {
        padding: theme.spacing(3)
    },
    description: {
        fontFamily: 'Shabnam',
        fontSize: 14,
        opacity: 0.68,
        color: '#434343',
        whiteSpace: 'pre-wrap',
        lineHeight: '32px',

    },
    commentInput: {
        fontFamily: 'Shabnam',
        fontSize: 16,
        color: '#444444'
    },
    commentInputRoot: {
        marginTop: 8,

    },

    // styles for comment
    commentContainer: {
        backgroundColor: '#FAFAFA',
        position: 'relative',
        borderRadius: 10,
        boxShadow: 'none'
    },
    cardHeader: {
        display: 'flex',
        justifyContent: 'flex-end',
        position: 'absolute',
        left: 24,
        top: 12,
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
    cardContent: {
        display: 'flex',
        marginTop: 24,
    },
    profile: {
        width: 96,
        height: 96,
    },

    username: {
        fontFamily: 'Shabnam',
        fontSize: 18,
        fontWeight: 500,
        color: '#444444',
        marginBottom: 16,
    },
    comment: {
        fontFamily: 'Shabnam',
        fontSize: 16,
        color: '#888888',
        whiteSpace: 'pre-wrap',
        lineHeight: '32px'
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
