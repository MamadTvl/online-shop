import {makeStyles} from "@material-ui/core/styles";


export const useStyles = makeStyles((theme) => ({

    container: {
        padding: theme.spacing(0, 17.5),

        [theme.breakpoints.down('md')]: {
            padding: theme.spacing(0, 3),
        },

        [theme.breakpoints.down('xs')]: {
            marginTop: 12,
            padding: 18.5,
        },
        [theme.breakpoints.up('xl')]: {
            maxWidth: 1560,
            margin: 'auto',
            padding: 0,
        },
        marginBottom: 48,
    },
    title: {
        fontFamily: 'Shabnam',
        fontSize:40,
        fontWeight: 'bold',
        color: '#545454',
        textAlign: "center",
        marginBottom: 24,
        marginTop: 72,
    },
    card:{
        display: "flex",
        flexDirection: 'column',
        position: 'relative',
        borderRadius: 10,
    },
    image:{
        width:340,
        height:340,
        maxWidth: '100%',
        maxHeight: '100%',
        alignSelf: "center",
        borderRadius: 10,
        margin: theme.spacing(2, 2, 0, 2)
    },
    chip:{
        fontFamily: 'Shabnam',
        fontSize:16,
        fontWeight: 500,
        color: '#F16522',
        backgroundColor: '#EFEFEF',
        position: "absolute",
        right: 'auto',
        left: 'auto',
        bottom: '-23px',
        borderColor: 'white',
        borderWidth: 4,
        borderStyle: "solid",
        borderRadius: 40,
        width: 115,
        height: 48,

    },
    cardContent:{
        display: "flex",
        flexDirection: 'column',
    },
    date:{
        fontFamily: 'Shabnam',
        fontSize: 14,
        color: '#ADAEB5',
        textAlign: "center",
        marginTop: 20,
    },
    summery:{
        fontFamily: 'Shabnam',
        fontSize:18,
        fontWeight: 'bold',
        color: '#373B50',
        textAlign: "center",
        marginTop: 20,
    }


}), {index: 1});
