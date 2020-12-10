import {makeStyles} from "@material-ui/styles";


export const useProductPageStyle = makeStyles((theme) => ({

    container: {
        marginTop: 62,
        padding: theme.spacing(0, 17.5),
        [theme.breakpoints.down('md')]: {
            padding: theme.spacing(0, 3),
        },

        [theme.breakpoints.down('xs')]: {
            padding: 18.5,
        },
    }


}));
