import React from "react";
import {useHeaderStyle} from "./Styles/useHeaderStyle";
import {Menu, MenuItem} from "@material-ui/core";
import {withStyles} from "@material-ui/styles"
import ItemLink from "../../Routes/Link/ItemLink";
import * as PropTypes from "prop-types";
import {useLocation} from 'react-router-dom'

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


function createCategoryData(id, name, checked) {
    return {id, name, checked}
}

const initialCategories = [
    createCategoryData(1, 'پوشاک', false),
    createCategoryData(2, 'پوشاک', false),
    createCategoryData(3, 'پوشاک', false),
    createCategoryData(4, 'پوشاک', false),
    createCategoryData(5, 'پوشاک', false),
    createCategoryData(6, 'پوشاک', false),
    createCategoryData(7, 'پوشاک', false),
    createCategoryData(8, 'پوشاک', false),
    createCategoryData(9, 'پوشاک', false),
    createCategoryData(10, 'پوشاک', false),
    createCategoryData(11, 'پوشاک', false),
    createCategoryData(12, 'پوشاک', false),
    createCategoryData(13, 'پوشاک', false),
    createCategoryData(14, 'پوشاک', false),
    createCategoryData(15, 'پوشاک', false),
    createCategoryData(16, 'پوشاک', false),
    createCategoryData(17, 'پوشاک', false),
    createCategoryData(18, 'پوشاک', false),
    createCategoryData(19, 'پوشاک', false),
    createCategoryData(20, 'پوشاک', false),
    createCategoryData(21, 'پوشاک', false),
    createCategoryData(22, 'پوشاک', false),

]

function CategoryMenu(props) {
    const {anchorEl, setAnchorEl} = props
    const classes = useHeaderStyle()
    const location = useLocation()
    const params = new URLSearchParams(location.search)
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
                initialCategories.map((category, index) => (
                    <ItemLink to={{pathname: '/search', search: `${search}categoryId[${index}]=${category.id}`}}>
                        <MenuItem className={classes.menuLabel} onClick={handleClose}>{category.name}</MenuItem>
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