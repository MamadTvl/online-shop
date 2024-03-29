import React from "react";
import {Link as RouterLink} from "react-router-dom";
import {Link} from "@material-ui/core";
import * as PropTypes from "prop-types";


function ItemLink(props) {
    const {text, to, children, style, className} = props;

    const renderLink = React.useMemo(
        () => React.forwardRef((itemProps, ref) =>
                <RouterLink to={to} ref={ref} {...itemProps} />),
        [to],
    );

    return (
        <Link className={className} style={style} component={renderLink} color={"inherit"}>{children ? children : text}</Link>
    );
}

ItemLink.propTypes = {
    text: PropTypes.string,
    to: PropTypes.any.isRequired,
    children: PropTypes.object,
    style: PropTypes.any,
    className: PropTypes.any,
};

export default ItemLink