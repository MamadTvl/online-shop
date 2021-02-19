import React from "react";
import {Link as RouterLink} from 'react-router-dom';
import * as PropTypes from "prop-types";
import {makeStyles} from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme) => ({
    textStyle: {
        color: '#434343',
        fontFamily: "Shabnam",
        direction: "rtl",
        fontWeight: 500,
        textAlign: "right",
        marginRight: 8,
    },
}), {index: 1})


function ListItemLink(props) {
    const {primary, to, id} = props;
    const classes = useStyles();
    const renderLink = React.useMemo(
        () => React.forwardRef((itemProps, ref) =>
            <RouterLink to={to} ref={ref} {...itemProps} />),
        [to],
    );

    return (
        <li>
            <ListItem classes={{root: classes.root}} key={id} button component={renderLink}>
                <ListItemText classes={{primary: classes.textStyle}} primary={primary}/>
            </ListItem>
        </li>
    );
}

ListItemLink.propTypes = {
    primary: PropTypes.string.isRequired,
    to: PropTypes.object.isRequired,
    id: PropTypes.number.isRequired,
};

export default ListItemLink
