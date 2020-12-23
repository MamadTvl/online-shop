import withStyles from "@material-ui/core/styles/withStyles";
import {TextField} from "@material-ui/core";

export const StyledSearchField = withStyles({
    root: {
        '& .MuiInput-underline:before': {
            borderBottomStyle: 'none',
            borderBottomWidth: '0',

        },
        '& .MuiInput-root': {
            borderRadius: '4px',
        },
        '& .MuiInputBase-input': {
            borderRadius: '4px',
        }
    }
    ,
}, {index: 1})(TextField);