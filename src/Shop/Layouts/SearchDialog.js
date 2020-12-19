import React from "react";
import {Dialog, SvgIcon} from "@material-ui/core";
import {StyledSearchField} from './StyledSearchField'
import InputAdornment from "@material-ui/core/InputAdornment";
import {useHeaderStyle} from "./Styles/useHeaderStyle";
import {useHistory, useLocation} from "react-router-dom";
import Transition from "./Styles/Transition";
import * as PropTypes from "prop-types";

function SearchDialog(props) {
    const classes = useHeaderStyle()
    const location = useLocation()
    const params = new URLSearchParams(location.search)
    const history = useHistory()
    const {searchInput, setSearchInput, open, setOpen} = props


    const searchHandler = (event) => {
        event.preventDefault()
        let tempLoc = location.search === '' ? '?' : location.search
        if (tempLoc.includes('?s=')) {
            tempLoc = tempLoc.replace(`${params.get('s')}`, searchInput)
        } else {
            tempLoc += `s=${searchInput}`
        }
        history.push(`/search${tempLoc}`);
        setSearchInput('')
        setOpen(false)
    }
    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Dialog TransitionComponent={Transition} classes={{paper: classes.dialog}} open={open} onClose={handleClose}
                aria-labelledby="form-dialog-title">
            <form onSubmit={searchHandler} style={{display: 'flex'}}>
                <StyledSearchField
                    id="search-dialog-website"
                    placeholder={'جستجو'}
                    type="search"
                    value={searchInput}
                    onChange={(event) => setSearchInput(event.target.value)}
                    InputProps={{
                        classes: {
                            input: classes.textField,
                        },
                        startAdornment:
                            <InputAdornment  onClick={searchHandler} style={{marginLeft: 8}} position="start">
                                <SvgIcon xmlns="http://www.w3.org/2000/svg" width="13.811" height="13.811"
                                         viewBox="0 0 13.811 13.811">
                                    <g id="search" transform="translate(-2.25 -2.25)" opacity="0.68">
                                        <circle id="Ellipse_2" data-name="Ellipse 2" cx="5.333" cy="5.333"
                                                r="5.333"
                                                transform="translate(3 3)" fill="none" stroke="#434343"
                                                strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                                        <line id="Line_2" data-name="Line 2" x1="2.9" y1="2.9"
                                              transform="translate(12.1 12.1)" fill="none" stroke="#434343"
                                              strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                                    </g>
                                </SvgIcon>
                            </InputAdornment>
                        ,
                        style: {
                            backgroundColor: '#F0F0F0'
                        }
                    }}
                />
            </form>
        </Dialog>
    )

}


export default SearchDialog

SearchDialog.propType = {
    searchInput: PropTypes.string.isRequired,
    setSearchInput: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired,
}