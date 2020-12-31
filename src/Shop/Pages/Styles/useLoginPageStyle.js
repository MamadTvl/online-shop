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
        justifyContent: "flex-start",
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column'
        },
    },
    imageContainer: {
        margin: 'auto 37px auto 0px',
        [theme.breakpoints.down('xs')]: {
            margin: 'auto',
            marginTop: 24,
        },

    },
    image: {
        width: 122,
        height: 122,
        [theme.breakpoints.down('xs')]: {
            width: 88,
            height: 88,
        },

    },
    cardContent: {
        display: 'flex',
        flexDirection: 'column',
        width: '77%',
        [theme.breakpoints.down('xs')]: {
            width: '100%',
        },
    },
    contentRoot: {
        '&:last-child': {
            padding: '32px 45px 32px 24px',
            [theme.breakpoints.down('xs')]: {
                padding: 12.5,
            },

        },

    },

    mobileContainer: {
        margin: 'auto 12.5px'
    },

    label: {
        fontFamily: 'Shabnam',
        fontSize: 14,
        color: '#545454',
    },

    input: {
        fontFamily: 'Shabnam',
    },
    root: {
        borderRadius: 6,
        height: 48,
    },
    passwordContainer: {
        margin: 'auto 12.5px'
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
        margin: 'auto',
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        },
    },
    forgetMobileLabel: {
        fontFamily: 'Shabnam',
        fontSize: 12,
        color: '#545454',
        opacity: 0.68,
        margin: 'auto',
        marginTop: 12,
        [theme.breakpoints.up('sm')]: {
            display: 'none',

        },
    },
    action: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '24px',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column-reverse',
            margin: 'auto 12.5px',
            marginTop: 39.5,
        },

    },
    signupContainer: {
        display: 'flex',
        justifyContent: 'flex-start',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column-reverse',
        },
    },
    signupButton: {
        fontFamily: 'Shabnam',
        fontSize: 14,
        color: '#545454',
    },
    iconColor: {
        color: '#434343'
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
    buttonProgress: {
        position: "absolute",
        right: '94px',
        top: '3%',
        color: '#F16522',
        zIndex: 1,
        [theme.breakpoints.down('xs')]: {
            right: '43.25%',
        },
    }


}), {index: 1});
