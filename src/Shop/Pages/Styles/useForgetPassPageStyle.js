import {makeStyles} from "@material-ui/styles";


export const useForgetPassStyle = makeStyles((theme) => ({
    container: {
        marginTop: theme.spacing(7),
        marginBottom: 185,
        padding: theme.spacing(0, 49),
        [theme.breakpoints.down('md')]: {
            padding: theme.spacing(0, 30),
        },
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(0, 10),
        },
        [theme.breakpoints.down('xs')]: {
            padding: 18.5,
        },
        [theme.breakpoints.up('lg')]: {
            maxWidth: 600,
            margin: 'auto',
            padding: 0,
        },
    },
    step: {
        display: 'flex',
        padding: 32,
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column'
        },
    },
    textFieldRoot: {
        borderRadius: 6,
        height: 48,
    },
    input: {
        fontFamily: 'Shabnam'
    },

    forgetButton: {
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
    mobileContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
    },
    title: {
        fontFamily: 'Shabnam',
        fontSize: 16,
        color: '#545454',
        marginBottom: 32,
    },
    label: {
        fontFamily: 'Shabnam',
        fontSize: 14,
        color: '#545454',
        marginBottom: 12,
    },
}), {index: 1});
