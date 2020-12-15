import {makeStyles} from "@material-ui/styles";


export const useAddressCardStyle = makeStyles((theme) => ({

    card: {
        padding: 24,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 16,
        borderRadius: 7,
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',

        },
    },
    radio: {
        [theme.breakpoints.down('xs')]: {
            width: 0,
        }
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
        }

    },
    dataContainer: {
        display: 'flex',
        flexDirection: 'column',
        marginRight: 32
    },
    title: {
        fontFamily: 'Shabnam',
        fontSize: 12,
        color: '#545454',
    },
    data: {
        fontFamily: 'Shabnam',
        fontSize: 16,
        color: '#545454',
    },

}));
