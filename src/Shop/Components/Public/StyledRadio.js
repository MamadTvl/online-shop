import {withStyles} from "@material-ui/styles";
import {Radio} from "@material-ui/core";

export const StyledRadio = withStyles({
    root: {
        color: '#888888',
        '&$checked': {
            color: '#F16522',
        },
    },
    checked: {},

}, {index: 1})((props) => <Radio color="default" {...props} />);