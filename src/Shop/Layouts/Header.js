import React, {useState} from "react";
import AppBar from "@material-ui/core/AppBar";
import logo from '../../img/zimmerman.svg'
import {Button, FormControl, IconButton, SvgIcon} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InputAdornment from '@material-ui/core/InputAdornment';
import {StyledSearchField} from './StyledSearchField'
import MenuIcon from '@material-ui/icons/Menu';
import {useHistory, useLocation} from "react-router-dom";
import {useHeaderStyle} from "./Styles/useHeaderStyle";
import CategoryMenu from "./CategoryMenu";
import SearchDialog from "./SearchDialog";

function Header() {
    const classes = useHeaderStyle()
    const location = useLocation()
    const params = new URLSearchParams(location.search)
    const history = useHistory()
    const [searchInput, setSearchInput] = useState('')
    const [clicked, setClicked] = useState(false)
    const [dialogOpen, setDialogOpen] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null);

    const searchHandler = () => {
        if (!clicked) {
            const search = document.getElementById('search-website')
            search.addEventListener('keyup', (event) => {
                if (event.keyCode === 13 && search.value !== '') {
                    let tempLoc = location.search === '' ? '?' : location.search
                    if (tempLoc.includes('?s=')){
                        tempLoc = tempLoc.replace(`${params.get('s')}`, search.value)
                    }else {
                        tempLoc += `s=${search.value}`
                    }
                    history.push(`/search${tempLoc}`);
                    setSearchInput('')
                }
            })
            setClicked(!clicked)
        }
    }

    return (
        <AppBar position={"fixed"} className={classes.appBar}>
            <div className={classes.items}>
                <div className={classes.rightItems}>
                    <IconButton
                        onClick={(event) => setAnchorEl(event.currentTarget)}
                        className={classes.menuIcon}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <img className={classes.logo} src={logo} alt={'didartshop.ir'}/>
                    <Button
                        size={"small"}
                        onClick={(event) => setAnchorEl(event.currentTarget)}
                        dir={'ltr'}
                        className={classes.category}
                        startIcon={
                            <ExpandMoreIcon className={classes.icon}/>
                        }
                    >
                        دسته‌بندی‌ها
                    </Button>
                    <CategoryMenu
                        anchorEl={anchorEl}
                        setAnchorEl={setAnchorEl}
                    />

                </div>
                <FormControl>
                    <StyledSearchField
                        id="search-website"
                        className={classes.searchBar}
                        placeholder={'جستجو'}
                        type="search"
                        value={searchInput}
                        onChange={(event) => setSearchInput(event.target.value)}
                        onClick={searchHandler}
                        InputProps={{
                            classes: {
                                input: classes.textField,
                            },
                            startAdornment:
                                <InputAdornment style={{marginLeft: 8}} position="start">
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
                </FormControl>
                <div className={classes.leftItems}>
                    <IconButton onClick={() => setDialogOpen(true)} className={classes.searchBarIcon}>
                        <SvgIcon xmlns="http://www.w3.org/2000/svg" width="17.811" height="17.811"
                                 viewBox="0 0 17.811 17.811">
                            <g id="search" transform="translate(-2.25 -2.25)" opacity="0.68">
                                <circle id="Ellipse_2" data-name="Ellipse 2" cx="7.111" cy="7.111" r="7.111"
                                        transform="translate(3 3)" fill="none" stroke="#434343"
                                        strokeLinecap="round"
                                        strokeLinejoin="round" strokeWidth="1.5"/>
                                <line id="Line_2" data-name="Line 2" x1="3.867" y1="3.867"
                                      transform="translate(15.133 15.133)" fill="none" stroke="#434343"
                                      strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                            </g>
                        </SvgIcon>
                    </IconButton>
                    <SearchDialog
                        searchInput={searchInput}
                        setSearchInput={setSearchInput}
                        open={dialogOpen}
                        setOpen={setDialogOpen}
                    />
                    <Button
                        size={"small"}
                        dir={'ltr'}
                        className={classes.login}
                        endIcon={
                            <SvgIcon xmlns="http://www.w3.org/2000/svg" width="17.5" height="19.5"
                                     viewBox="0 0 17.5 19.5">
                                <g id="user" transform="translate(-3.25 -2.25)">
                                    <path id="Path_10" data-name="Path 10"
                                          d="M20,21V19a4,4,0,0,0-4-4H8a4,4,0,0,0-4,4v2"
                                          fill="none" stroke="#8B8B8B" strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="1.5"/>
                                    <circle id="Ellipse_1" data-name="Ellipse 1" cx="4" cy="4" r="4"
                                            transform="translate(8 3)" fill="none" stroke="#8B8B8B"
                                            strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                                </g>
                            </SvgIcon>
                        }
                    >
                        ورود / ثبت‌نام
                    </Button>
                    <IconButton className={classes.iconButtons}>
                        <SvgIcon xmlns="http://www.w3.org/2000/svg" width="17.5" height="19.5"
                                 viewBox="0 0 17.5 19.5">
                            <g id="user" transform="translate(-3.25 -2.25)">
                                <path id="Path_10" data-name="Path 10"
                                      d="M20,21V19a4,4,0,0,0-4-4H8a4,4,0,0,0-4,4v2"
                                      fill="none" stroke="#8B8B8B" strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="1.5"/>
                                <circle id="Ellipse_1" data-name="Ellipse 1" cx="4" cy="4" r="4"
                                        transform="translate(8 3)" fill="none" stroke="#8B8B8B"
                                        strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                            </g>
                        </SvgIcon>
                    </IconButton>
                    <Button
                        size={"small"}
                        dir={'ltr'}
                        variant={"outlined"}
                        className={classes.cart}
                        endIcon={
                            <SvgIcon xmlns="http://www.w3.org/2000/svg" width="19.5" height="21.5"
                                     viewBox="0 0 19.5 21.5">
                                <g id="shopping-bag" transform="translate(-2.25 -1.25)">
                                    <path id="Path_8" data-name="Path 8"
                                          d="M6,2,3,6V20a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V6L18,2Z" fill="none"
                                          stroke="#434343" strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="1.5"/>
                                    <line id="Line_1" data-name="Line 1" x2="18" transform="translate(3 6)"
                                          fill="none" stroke="#434343" strokeLinecap="round"
                                          strokeLinejoin="round" strokeWidth="1.5"/>
                                    <path id="Path_9" data-name="Path 9" d="M16,10a4,4,0,0,1-8,0" fill="none"
                                          stroke="#434343" strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="1.5"/>
                                </g>
                            </SvgIcon>
                        }
                    >
                        سبد خرید
                    </Button>
                    <IconButton className={classes.iconButtons}>
                        <SvgIcon xmlns="http://www.w3.org/2000/svg" width="19.5" height="21.5"
                                 viewBox="0 0 19.5 21.5">
                            <g id="shopping-bag" transform="translate(-2.25 -1.25)">
                                <path id="Path_8" data-name="Path 8"
                                      d="M6,2,3,6V20a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V6L18,2Z" fill="none"
                                      stroke="#434343" strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="1.5"/>
                                <line id="Line_1" data-name="Line 1" x2="18" transform="translate(3 6)"
                                      fill="none" stroke="#434343" strokeLinecap="round"
                                      strokeLinejoin="round" strokeWidth="1.5"/>
                                <path id="Path_9" data-name="Path 9" d="M16,10a4,4,0,0,1-8,0" fill="none"
                                      stroke="#434343" strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="1.5"/>
                            </g>
                        </SvgIcon>
                    </IconButton>
                </div>
            </div>
        </AppBar>
    )
}

export default Header