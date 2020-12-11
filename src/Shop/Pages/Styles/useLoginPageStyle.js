import {makeStyles} from "@material-ui/styles";


export const useLoginPageStyle = makeStyles((theme) => ({
    container: {
        marginTop: theme.spacing(7),
        padding: theme.spacing(0, 52.6),
        [theme.breakpoints.down('md')]: {
            padding: theme.spacing(0, 3),
        },

        [theme.breakpoints.down('xs')]: {
            padding: 18.5,
        },
    },
    card: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: "flex-start"
    },

    image: {
        width: 122,
        height: 122,
        margin: 'auto 37px auto 0px',
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'column',
        width: '77%'
    },
    contentRoot: {
        '&:last-child': {
            padding: '32px 45px 32px 24px'
        },

    },

    mobileContainer: {
        margin: 'auto 24px'
    },

    label: {
        fontFamily: 'Shabnam',
        fontSize: 14,
        color: '#545454',
    },

    input: {

    },
    root: {},
    passwordContainer: {
        margin: 'auto 24px'
    },
    passwordLabels: {
        display: "flex",
        justifyContent: 'space-between',
        marginTop: 24,
        marginBottom: 12,
    },
    forgetLabel: {
        fontFamily: 'Shabnam',
        fontSize: 12,
        color: '#545454',
        opacity: 0.68,
        margin: 'auto'
    },
    action: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '24px',
        alignItems: 'center',
    },
    signupContainer: {
        display: 'flex',
        justifyContent: 'flex-start',
    },
    signupButton: {
        color: '#434343',
    },
    signInButton: {
        minWidth: 226,
        height: 40,
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
