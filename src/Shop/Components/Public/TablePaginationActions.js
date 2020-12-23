import React from "react";
import {Button, ButtonGroup, IconButton, Typography} from "@material-ui/core";
import {toFaDigit} from '../../../utills/ToFaDigit'
import * as PropTypes from "prop-types";
import {makeStyles} from "@material-ui/core/styles";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";

const useStyles = makeStyles((theme) => ({
    pageButton: {

        color: 'white',
        fontSize: '16px',
        fontFamily: 'Shabnam',
        fontWeight: "bold",
        height: 40,
        width: 40,
        borderRadius: 7,
        marginLeft: theme.spacing(1),
        '&:hover': {
            backgroundColor: '#F16522',
            opacity: '70%'
        },
    },
    buttonGroup: {
        justifyContent: 'flex-end',
        margin: theme.spacing(4, 3, 10, 0),
        float: 'left',
    },
}), {index: 1});


function TablePaginationActions(props) {
    const classes = useStyles();
    const {numPages, page, onChange} = props
    const pageButtonColor = '#F16522'
    let backDisable = page === 0, nextDisable = page + 1 === numPages

    const buttonGroup = () => {
        let buttons = []
        for (let i = 0; i < numPages && numPages < 7; i++) {
            buttons[i] = i + 1
        }
        return buttons
    }
    const pagesButton = (value) => {
        return (
            value === page + 1 ?
                <Button style={{
                    backgroundColor: pageButtonColor,
                    borderColor: 'transparent',
                    height: 40,
                    width: 40,
                    borderRadius: 7,
                    marginLeft: '8px',
                    marginTop: 5
                }}
                        className={classes.pageButton}
                >
                    {toFaDigit(value.toString())}
                </Button>
                :
                <Button
                    style={{
                        backgroundColor: 'transparent',
                        borderColor: 'rgba(67, 67, 67, 0.68)',
                        height: 40,
                        width: 40,
                        borderRadius: 7,
                        color: '#545454',
                        marginLeft: '8px',
                        marginTop: 5
                    }}
                    className={classes.pageButton}
                    value={value}
                    onClick={() => {
                        onChange(value - 1)
                    }}
                >
                    {toFaDigit(value.toString())}
                </Button>
        )
    }

    return (
        <ButtonGroup className={props.buttonGroupClass}>

            <IconButton
                onClick={() => {
                    onChange(page - 1)
                }}
                disabled={backDisable}
                style={{marginLeft: '8px'}}
            >
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
            </IconButton>

            {
                buttonGroup().map((value) => (
                    pagesButton(value)
                ))
            }

            <IconButton
                disabled={nextDisable}
                onClick={() => {
                    onChange(page + 1)
                }}
                style={{marginLeft: '8px'}}
            >
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
            </IconButton>
        </ButtonGroup>
    )
}

TablePaginationActions.propTypes = {
    numPages: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default TablePaginationActions