import {makeStyles} from "@material-ui/core/styles";


export const useStyles = makeStyles((theme) => ({
    main: {
        padding: theme.spacing(0, 17.5),
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(0, 3),
        },

        [theme.breakpoints.down('xs')]: {
            marginTop: 12,
            padding: 18.5,
        }
    },

    title:{
        fontFamily: 'Shabnam',
        fontSize: 40,
        fontWeight: 'bold',
        color: '#545454',
        textAlign: 'center',
        marginBottom: 67,
        marginTop: 72,

        [theme.breakpoints.down('md')]: {
            fontSize: 30,
            marginBottom: 47.1,
            marginTop: 44,
        },


    },
    container:{
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'center',
        [theme.breakpoints.down('md')]: {
            marginBottom: "30px",
        },

    },
    image:{
        width:137,
        maxWidth: '100%',
        maxHeight: 'auto',
        margin: "0 auto 41px",
        [theme.breakpoints.down('md')]: {
            width:90,
            margin: "0 auto 22.5px",
        }
    },
    attributeTitle:{
        fontFamily: 'Shabnam',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#545454',
        textAlign: 'center',
        margin: "0 auto 24px",
        [theme.breakpoints.down('md')]: {
            margin: "0 auto 12px",
        }

    },
    attributeDescription:{
        fontFamily: 'Shabnam',
        fontSize: 16,
        color: '#545454',
        textAlign: 'center',
        width: 328,
        maxWidth: '100%',
        margin: "auto",
    },

}));