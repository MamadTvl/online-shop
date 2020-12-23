import {makeStyles} from "@material-ui/styles";


export const usePreviewOrderStyle = makeStyles((theme) => ({
    card: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 24,

    },
    right: {
        display: 'flex',
        flexDirection: 'row',
        width: '40%',
        justifyContent: 'space-between',
        [theme.breakpoints.down('md')]: {
            width: '65%',
        },
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
        }

    },
    left: {
        display: 'flex',
        flexDirection: 'row',

    },
    dataContainer: {
        display: 'flex',
        flexDirection: 'column',
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

}), {index: 1});
