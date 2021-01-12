import React from "react";
import {Button, ButtonGroup, IconButton, Typography} from "@material-ui/core";
import {usePagination} from "@material-ui/lab/Pagination";
import {toFaDigit} from '../../../utills/ToFaDigit'
import * as PropTypes from "prop-types";
import {makeStyles} from "@material-ui/core/styles";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import useWindowSize from "../../../utills/Hooks/useWindowSize";

const useStyles = makeStyles((theme) => ({
    pageButton: {
        color: 'white',
        fontSize: '16px',
        fontFamily: 'Shabnam',
        fontWeight: "bold",
        height: 32,
        width: 32,
        borderRadius: 7,
        marginLeft: theme.spacing(1),
        '&:hover': {
            backgroundColor: '#F16522',
            opacity: '70%'
        },

    },
    buttonRoot: {
        minWidth: 32,
    },
    buttonGroup: {
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.down('xs')]: {
            margin: '16px -16px',
        },

    },
}), {index: 1});


function TablePaginationActions(props) {
    const classes = useStyles();
    const size = useWindowSize()
    const {numPages, page, onChange} = props
    const {items} = usePagination({
        count: numPages,
        boundaryCount: 1,
        siblingCount: size.width > 650 ? 1 : 0,
        defaultPage: page + 1,
        onChange: (event, page) => {
            onChange(page - 1)
        }
    })
    const pageButtonColor = '#F16522'

    return (
        <ButtonGroup className={classes.buttonGroup}>
            {
                items.map(({page, type, selected, ...item}, index) => {
                    let children
                    if (type === "start-ellipsis" || type === "end-ellipsis") {
                        children = (
                            <Button
                                classes={{root: classes.buttonRoot}}
                                key={index}
                                style={{
                                    backgroundColor: 'transparent',
                                    borderColor: 'rgba(67, 67, 67, 0.68)',
                                    borderStyle: 'solid',
                                    borderWidth: 1,
                                    height: 32,
                                    width: 32,
                                    borderRadius: 7,
                                    color: '#545454',
                                    marginLeft: '8px',
                                    marginTop: 5
                                }}
                                className={classes.pageButton}
                            >
                                …
                            </Button>
                        )
                    } else if (type === "page") {
                        children = (
                            <Button
                                classes={{root: classes.buttonRoot}}
                                key={index}
                                style={{
                                    backgroundColor: selected ? pageButtonColor : 'transparent',
                                    borderColor: selected ? 'transparent' : 'rgba(67, 67, 67, 0.68)',
                                    borderStyle: 'solid',
                                    borderWidth: selected ? 0 : 1,
                                    height: 32,
                                    width: 32,
                                    borderRadius: 7,
                                    color: !selected ? '#545454' : undefined,
                                    marginLeft: '8px',
                                    marginTop: 5
                                }}
                                className={classes.pageButton}
                                {...item}
                            >
                                {toFaDigit(page.toString())}
                            </Button>
                        )
                    } else {
                        children = (
                            <IconButton
                                key={index}
                                style={{marginLeft: '8px'}}
                                {...item}
                            >
                                {
                                    type === 'next' ?
                                        <>
                                            <Typography
                                                style={{
                                                    fontFamily: 'Shabnam',
                                                    fontSize: 16,
                                                    color: '#545454'
                                                }}
                                                component={"span"}>
                                                بعدی
                                            </Typography>
                                            <KeyboardArrowLeft/>
                                        </>
                                        :
                                        <>
                                            <KeyboardArrowRight/>
                                            <Typography
                                                style={{
                                                    fontFamily: 'Shabnam',
                                                    fontSize: 16,
                                                    color: '#545454'
                                                }}
                                                component={"span"}
                                            >
                                                قبلی
                                            </Typography>
                                        </>
                                }

                            </IconButton>
                        )
                    }
                    return <>{children}</>;
                })
            }
        </ButtonGroup>
    )
}

TablePaginationActions.propTypes = {
    numPages: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default TablePaginationActions