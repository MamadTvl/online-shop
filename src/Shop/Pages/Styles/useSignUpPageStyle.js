import {makeStyles} from "@material-ui/styles";


export const useSignUpPageStyle = makeStyles((theme) => ({
    container: {
        marginTop: theme.spacing(7),
        marginBottom: 185,
        padding: theme.spacing(0, 52.6),
        [theme.breakpoints.down('md')]: {
            padding: theme.spacing(0, 3),
        },

        [theme.breakpoints.down('xs')]: {
            padding: 18.5,
        },
    },
    TextFieldRoot: {
        borderRadius: 6,
        height: 48,
    },
    signUpButton: {
        // minWidth: 226,
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

    // FirstStep
    imageContainer: {
        marginLeft: 48,
    },
    image: {
        width: '176.5px',
        height: '149.86px',
    },
    mobileContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
    },
    label: {
        fontFamily: 'Shabnam',
        fontSize: 14,
        color: '#545454',
        marginBottom: 12,
    },
}));
