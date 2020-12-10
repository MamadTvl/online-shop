import {makeStyles} from "@material-ui/styles";


export const useSimilarProductsStyle = makeStyles((theme) => ({
    titleContainer: {
        display: "flex",
        marginBottom: 37,
        marginTop: 21,
    },
    titleRectangle: {
        borderRightWidth: 4,
        height: 32,
        marginTop: 3,
        borderRightColor: '#F16522',
        borderRightStyle: 'solid',
        marginLeft: 8,
        [theme.breakpoints.down('xs')]: {
            borderRightWidth: 2,
            height: 15,
            marginTop: 2,
        },

    },
    title: {
        fontFamily: 'Shabnam',
        fontWeight: 'bold',
        fontSize: 28,
        color: '#545454',
        [theme.breakpoints.down('xs')]: {
            fontSize: 14,
        },
    },

    productsContainer: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    card: {
        marginRight: 20,

    }

}));
