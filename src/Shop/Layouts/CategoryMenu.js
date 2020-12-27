import React from "react";
import {useHeaderStyle} from "./Styles/useHeaderStyle";
import {Menu, MenuItem} from "@material-ui/core";
import {withStyles} from "@material-ui/styles"
import ItemLink from "../../Routes/Link/ItemLink";
import * as PropTypes from "prop-types";
import {useLocation} from 'react-router-dom'
import useCategoriesData from "../FetchData/useCategoriesData";

const StyledMenu = withStyles({
    list: {
        "&.MuiList-root": {
            display: 'flex',
            flexWrap: 'wrap',
            height: 200,
            justifyContent: 'space-between',
        },
    }
})((props) => (
    <Menu {...props}/>
));


function CategoryMenu(props) {
    const [loading, result] = useCategoriesData(true)
    const {anchorEl, setAnchorEl} = props
    const classes = useHeaderStyle()
    const location = useLocation()
    const params = new URLSearchParams(location.search)
    const linkStyle = {
        borderLeftStyle: 'solid',
        borderLeftColor: 'rgba(0, 0, 0, 0.12)',
        borderLeftWidth: '0.5px',
    }
    const search = location.search !== '' ? `${location.search}&` : ''
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <StyledMenu
            id="categories-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
            {
                result.map((category, index) => (
                    index !== result.length - 1 ?
                    <ItemLink key={Math.round(category.create_date)} style={linkStyle} to={{pathname: '/search', search: `${search}category_list[${index}]=${category.id}`}}>
                        <MenuItem className={classes.menuLabel}
                                  onClick={handleClose}>{category.name}</MenuItem>
                    </ItemLink>
                        :
                        <ItemLink key={Math.round(category.create_date)} to={{pathname: '/search', search: `${search}category_list[${index}]=${category.id}`}}>
                            <MenuItem className={classes.menuLabel}
                                      onClick={handleClose}>{category.name}</MenuItem>
                        </ItemLink>
                ))
            }
        </StyledMenu>
    )

}

export default CategoryMenu

CategoryMenu.propType = {
    anchorEl: PropTypes.object.isRequired,
    setAnchorEl: PropTypes.func.isRequired,
}