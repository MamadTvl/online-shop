import React from "react";
import {List} from "@material-ui/core";
import useCategoriesData from "../FetchData/useCategoriesData";
import ListItemLink from "../../Routes/Link/ListItemLink";
import {useLocation} from "react-router-dom";


function CategoriesList() {
    const [loading, result] = useCategoriesData(true)
    const location = useLocation()
    const search = location.search !== '' ? `${location.search}&` : ''
    if (loading)
        return null
    return (
        <List>
            {
                result.map((category, index) => (
                    <ListItemLink
                        primary={category.name}
                        to={{pathname: '/search', search: `${search}categoryId[${index}]=${category.id}`}}
                        key={category.id}
                    />
                ))
            }
        </List>
    )
}

export default CategoriesList