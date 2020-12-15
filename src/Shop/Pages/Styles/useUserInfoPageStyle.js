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
            opacity: '70%'
        },

    },
}));
