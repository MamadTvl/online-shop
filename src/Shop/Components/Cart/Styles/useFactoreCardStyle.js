import {makeStyles} from "@material-ui/styles";


export const useFactorCardStyle = makeStyles((theme) => ({

    title: {
        fontFamily: 'Shabnam',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#545454',
        marginBottom: 16,
    },
    orderCardContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '-16px',
        flexWrap: 'wrap',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
        }
    },
    grid: {
        padding: 16,
        width: '50%',
        [theme.breakpoints.down('md')]: {
            width: '100%',
        }
    },
    payButton: {
        width: '23%',
        opacity: 0.8,
        '&:hover': {
            backgroundColor: '#004677',
        },
        [theme.breakpoints.down('xs')]:{
            width: '100%',
        }
    },
    paymentIcon: {
        width: '40vw',
    }
}), {index: 1});
