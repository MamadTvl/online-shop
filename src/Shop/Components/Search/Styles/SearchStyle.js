import {makeStyles} from "@material-ui/core/styles";


export const useStyles = makeStyles((theme) => ({
    searchContainer:{
        padding: theme.spacing(0, 17.5),
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(0, 3),
        },

        [theme.breakpoints.down('xs')]: {
            padding: 18.5,
        },
    },
    breadcrumbContainer:{
        marginTop: 24,
    },
    breadcrumb:{
        fontFamily: 'Shabnam',
        fontSize: 12,
        color: '#545454'
    },
    titleContainer:{
        display : "flex",
        marginBottom: 37,
        marginTop: 21,
    },
    titleRectangle:{
        borderRightWidth: 4,
        borderRightColor: '#F16522',
        borderRightStyle: 'inset',
        marginLeft: 8
    },
    title:{
        fontFamily: 'Shabnam',
        fontWeight: 'bold',
        fontSize: 28,
        color: '#545454',
    },
    gridContainer:{},
    filterContainer:{},
    productsContainer:{},
}));