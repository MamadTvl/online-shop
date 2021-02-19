import {makeStyles} from "@material-ui/styles";


export const useUserInfoPageStyle = makeStyles((theme) => ({
    container: {
        marginTop: theme.spacing(7),
        marginBottom: 185,
        padding: theme.spacing(0, 37.6),
        [theme.breakpoints.down('md')]: {
            padding: theme.spacing(0, 3),
        },

        [theme.breakpoints.down('xs')]: {
            padding: 18.5,
        },
        [theme.breakpoints.up('xl')]: {
            maxWidth: 1560,
            margin: 'auto',
            padding: 0,
        },

    },
    card: {
        padding: 32,
    },
    textFieldRoot: {
        borderRadius: 6,
        height: 48,
    },
    input: {
        fontFamily: 'Shabnam'
    },
    menu: {
        fontFamily: 'Shabnam',
    },

    label: {
        fontFamily: 'Shabnam',
        fontSize: 14,
        color: '#545454',
        marginBottom: 12,
    },
    editButton: {
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
    buttonProgress: {
        position: "absolute",
        right: '44%',
        top: '3%',
        color: '#F16522',
        zIndex: 1,
        [theme.breakpoints.down('xs')]: {
            right: '46.25%',
        },
    },
}), {index: 1});
