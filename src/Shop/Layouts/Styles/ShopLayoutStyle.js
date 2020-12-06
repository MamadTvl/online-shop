import {makeStyles} from "@material-ui/core/styles";


export const useStyles = makeStyles((theme) => ({
    main: {
        paddingTop: 21,
        height: '100%',
        marginTop: theme.spacing(0),
        marginBottom: theme.spacing(2),
    },
    toolbar: {
        ...theme.mixins.toolbar,
        height: 50,
    },

}));