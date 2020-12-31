import withStyles from "@material-ui/core/styles/withStyles";
import {TextField} from "@material-ui/core";

export const StyledSearchField = withStyles({
    root: {
        '& .MuiInput-underline:before': {
            borderBottomStyle: 'none',
            borderBottomWidth: '0',

        },
        '& .MuiInput-underline:after': {
            borderBottomStyle: 'solid',
            borderBottomWidth: '3px',
            borderBottomColor: '#F16522',

        },
        '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
            borderBottomStyle: 'solid',
            borderBottomWidth: '2px',
            borderBottomColor: '#F16522',

        },
        '& .MuiInput-root': {
            borderRadius: '4px',
        },
        '& .MuiInputBase-input': {
            borderRadius: '4px',
        },
    }
    ,
}, {index: 1})(TextField);