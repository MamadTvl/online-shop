import {makeStyles} from "@material-ui/styles";


export const useOrderFactorCardStyle = makeStyles((theme) => ({
    card: {
        backgroundColor: '#F8F8F8',
        padding: 16,
        display: 'flex',
        flexDirection: 'row',
    },
    image:{
        width: '30%',
        height: '30%', // safari bug
        marginLeft: 16,
        borderRadius: 7,
        [theme.breakpoints.down('md')]: {
            width: '20vw',
            height: '20vw',
        }
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    title: {
        fontFamily: 'Shabnam',
        fontSize: 16,
        fontWeight: 500,
        color: '#545454',
    },
    labelContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
    label: {
        fontFamily: 'Shabnam',
        fontSize: 16,
        color: '#434343',
        marginLeft: 4,
    },
    data: {
        fontFamily: 'Shabnam',
        fontSize: 16,
        fontWeight: 500,
        color: '#434343',
        opacity: 0.68,
    },
}), {index: 1});
