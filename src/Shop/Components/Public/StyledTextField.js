import {withStyles} from "@material-ui/styles";
import {TextField} from "@material-ui/core";

export const StyledTextField = withStyles({
    root: {
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#EDEDED',
            },
            '&:hover fieldset': {
                borderColor: '#F16522',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#F16522',
            },
        },
    },
})(TextField);