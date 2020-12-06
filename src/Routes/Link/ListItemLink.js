import React, {createRef} from "react";
import {Link as RouterLink} from 'react-router-dom';
import * as PropTypes from "prop-types";
import {makeStyles} from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {SvgIcon} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    textStyle: {
        color: '#434343',
        fontFamily: "Shabnam",
        direction: "rtl",
        textAlign: "right"
    },
}))

const setIcon = (text) => {
    switch (text) {
        case 'سفارشات' :
            return (<SvgIcon xmlns="http://www.w3.org/2000/svg" width="20" height="20.924" viewBox="0 0 20 20.924">
                    <g id="Layer_2" data-name="Layer 2" transform="translate(0 -0.061)" opacity="0.7">
                        <g id="Icons" transform="translate(0 0.376)">
                            <g id="Shopping-E-Commerce_Receipts_receipt-slip-1"
                               data-name="Shopping-E-Commerce / Receipts / receipt-slip-1"
                               transform="translate(2.59 0.435)">
                                <g id="Group_62" data-name="Group 62">
                                    <g id="receipt-slip-1">
                                        <path id="Shape_410" data-name="Shape 410"
                                              d="M18.539,20.174V2.045A1.3,1.3,0,0,0,17.244.75H4.295A1.3,1.3,0,0,0,3,2.045V20.174l2.59-2.59,2.59,2.59,2.59-2.59,2.59,2.59,2.59-2.59Z"
                                              transform="translate(-3 -0.75)" fill="none" stroke="#434343"
                                              strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                                        <path id="Shape_411" data-name="Shape 411" d="M6,6h5.18"
                                              transform="translate(-3.41 -1.468)" fill="none" stroke="#434343"
                                              strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                                        <path id="Shape_412" data-name="Shape 412" d="M6,10.5h5.18"
                                              transform="translate(-3.41 -2.083)" fill="none" stroke="#434343"
                                              strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                                        <path id="Shape_413" data-name="Shape 413" d="M6,15h5.18"
                                              transform="translate(-3.41 -2.698)" fill="none" stroke="#434343"
                                              strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                                        <path id="Shape_414" data-name="Shape 414"
                                              d="M17.578,5.25a.328.328,0,1,1-.328.328.328.328,0,0,1,.328-.328"
                                              transform="translate(-4.948 -1.365)" fill="none" stroke="#434343"
                                              strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                                        <path id="Shape_415" data-name="Shape 415"
                                              d="M17.578,9.75a.328.328,0,1,1-.328.328.328.328,0,0,1,.328-.328"
                                              transform="translate(-4.948 -1.98)" fill="none" stroke="#434343"
                                              strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                                        <path id="Shape_416" data-name="Shape 416"
                                              d="M17.578,14.25a.328.328,0,1,1-.328.328.328.328,0,0,1,.328-.328"
                                              transform="translate(-4.948 -2.595)" fill="none" stroke="#434343"
                                              strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                                    </g>
                                </g>
                            </g>
                            <rect id="Rectangle_2221" data-name="Rectangle 2221" width="20" height="20" fill="none"/>
                        </g>
                    </g>

                </SvgIcon>
            )
        case 'محصولات' :
            return (<SvgIcon xmlns="http://www.w3.org/2000/svg" width="20.189" height="21.5" viewBox="0 0 20.189 21.5">
                    <g id="shipment-box" transform="translate(-0.739 0)" opacity="0.7">
                        <rect id="Rectangle_2315" data-name="Rectangle 2315" width="18.667" height="14" rx="1.5"
                              transform="translate(1.5 6.75)" fill="none" stroke="#434343" strokeLinecap="round"
                              strokeLinejoin="round" strokeWidth="1.5"/>
                        <path id="Path_2570" data-name="Path 2570"
                              d="M19.967,7.5,17.839,1.641A1.333,1.333,0,0,0,16.62.75H5.047a1.333,1.333,0,0,0-1.219.891L1.7,7.5"
                              fill="none" stroke="#434343" strokeLinecap="round" strokeLinejoin="round"
                              strokeWidth="1.5"/>
                        <path id="Path_2571" data-name="Path 2571" d="M12,6.75v-6" transform="translate(-1.167)"
                              fill="none" stroke="#434343" strokeLinecap="round" strokeLinejoin="round"
                              strokeWidth="1.5"/>
                        <path id="Path_2572" data-name="Path 2572" d="M14.25,18.75h4.5"
                              transform="translate(-1.803 -2.5)" fill="none" stroke="#434343" strokeLinecap="round"
                              strokeLinejoin="round" strokeWidth="1.5"/>
                    </g>
                </SvgIcon>
            )
        case 'مدیریت وبسایت' :
            return (<SvgIcon xmlns="http://www.w3.org/2000/svg" width="21.5" height="23" viewBox="0 0 21.5 23">
                    <g id="responsive-design" transform="translate(0 1.5)" opacity="0.7">
                        <path id="Path_2573" data-name="Path 2573" d="M16.5,23.25h-6l.75-4.5h4.5Z"
                              transform="translate(-1.477 -2.5)" fill="none" stroke="#434343" strokeLinecap="round"
                              strokeLinejoin="round" strokeWidth="1.5"/>
                        <path id="Path_2574" data-name="Path 2574" d="M8.25,23.25h10.5"
                              transform="translate(-1.563 -2.5)" fill="none" stroke="#434343" strokeLinecap="round"
                              strokeLinejoin="round" strokeWidth="1.5"/>
                        <path id="Path_2575" data-name="Path 2575"
                              d="M10.288,5.25h9.154A1.267,1.267,0,0,1,20.75,6.472v8.556a1.267,1.267,0,0,1-1.308,1.222H5.058A1.267,1.267,0,0,1,3.75,15.028V13.806"
                              fill="none" stroke="#434343" strokeLinecap="round" strokeLinejoin="round"
                              strokeWidth="1.5"/>
                        <path id="Path_2576" data-name="Path 2576" d="M3.75,15.75h17" transform="translate(0 -2)"
                              fill="none" stroke="#434343" strokeLinecap="round" strokeLinejoin="round"
                              strokeWidth="1.5"/>
                        <rect id="Rectangle_2316" data-name="Rectangle 2316" width="7.5" height="12" rx="1.5"
                              transform="translate(0.75 -0.75)" fill="none" stroke="#434343" strokeLinecap="round"
                              strokeLinejoin="round" strokeWidth="1.5"/>
                        <path id="Path_2577" data-name="Path 2577" d="M.75,9.75h7.5" transform="translate(0 -1.5)"
                              fill="none" stroke="#434343" strokeLinecap="round" strokeLinejoin="round"
                              strokeWidth="1.5"/>
                    </g>
                </SvgIcon>
            )
        case 'کمپین ها' :
            return (<SvgIcon xmlns="http://www.w3.org/2000/svg" width="21.5" height="21.5" viewBox="0 0 21.5 21.5">
                    <g id="Shopping-E-Commerce_Discounts_Coupons_discount-circle-dash"
                       data-name="Shopping-E-Commerce / Discounts/Coupons / discount-circle-dash"
                       transform="translate(-370.498 -702.998)" opacity="0.7">
                        <g id="Group_69" data-name="Group 69" transform="translate(371.248 703.748)">
                            <g id="discount-circle-dash">
                                <path id="Oval_16" data-name="Oval 16"
                                      d="M381.248,723.748a10,10,0,1,0-10-10A10,10,0,0,0,381.248,723.748Z"
                                      transform="translate(-371.248 -703.748)" fill="none" stroke="#434343"
                                      strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                                <path id="Shape_443" data-name="Shape 443" d="M378.858,717.813l6.6-6.6"
                                      transform="translate(-372.094 -704.577)" fill="none" stroke="#434343"
                                      strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                                <path id="Shape_444" data-name="Shape 444"
                                      d="M379.081,711.1a.333.333,0,1,1-.333.333.333.333,0,0,1,.333-.333"
                                      transform="translate(-372.081 -704.565)" fill="none" stroke="#434343"
                                      strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                                <path id="Shape_445" data-name="Shape 445"
                                      d="M385.975,718a.333.333,0,1,1-.333.333.333.333,0,0,1,.333-.333"
                                      transform="translate(-372.847 -705.331)" fill="none" stroke="#434343"
                                      strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                            </g>
                        </g>
                    </g>
                </SvgIcon>
            )
        case 'دسته بندی ها' :
            return (
                <SvgIcon xmlns="http://www.w3.org/2000/svg" width="20.835" height="20.667" viewBox="0 0 20.835 20.667">
                    <g id="tag" transform="translate(-1.25 -1.25)" opacity="0.7">
                        <path id="Path_2569" data-name="Path 2569"
                              d="M20.59,13.41l-7.17,7.17a2,2,0,0,1-2.83,0L2,12V2H12l8.59,8.59A2,2,0,0,1,20.59,13.41Z"
                              fill="none" stroke="#434343" strokeLinecap="round" strokeLinejoin="round"
                              strokeWidth="1.5"/>
                        <line id="Line_23" data-name="Line 23" x2="0.01" transform="translate(7 7)" fill="none"
                              stroke="#434343" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"/>
                    </g>
                </SvgIcon>
            )
        case 'نظرات' :
            return (<SvgIcon xmlns="http://www.w3.org/2000/svg" width="19.5" height="19.5" viewBox="0 0 19.5 19.5">
                    <path id="message-square" d="M21,15a2,2,0,0,1-2,2H7L3,21V5A2,2,0,0,1,5,3H19a2,2,0,0,1,2,2Z"
                          transform="translate(-2.25 -2.25)" fill="none" stroke="#434343" strokeLinecap="round"
                          strokeLinejoin="round" strokeWidth="1.5" opacity="0.7"/>
                </SvgIcon>
            )
        case 'امور مالی' :
            return (<SvgIcon xmlns="http://www.w3.org/2000/svg" width="21.5" height="18.833" viewBox="0 0 21.5 18.833">
                    <g id="Business-Products_Analytics_analytics-bars"
                       data-name="Business-Products / Analytics / analytics-bars"
                       transform="translate(-347.998 -1642.998)" opacity="0.7">
                        <g id="Group_159" data-name="Group 159" transform="translate(348.748 1643.748)">
                            <g id="analytics-bars">
                                <path id="Shape_993" data-name="Shape 993" d="M348.748,1663.248h20"
                                      transform="translate(-348.748 -1645.915)" fill="none" stroke="#434343"
                                      strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                                <path id="Shape_994" data-name="Shape 994"
                                      d="M353.581,1652.748h-2.667a.666.666,0,0,0-.667.667v8.667h4v-8.667A.667.667,0,0,0,353.581,1652.748Z"
                                      transform="translate(-348.915 -1644.748)" fill="none" stroke="#434343"
                                      strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                                <path id="Shape_995" data-name="Shape 995"
                                      d="M361.081,1643.748h-2.667a.666.666,0,0,0-.667.667v16.667h4v-16.667A.667.667,0,0,0,361.081,1643.748Z"
                                      transform="translate(-349.748 -1643.748)" fill="none" stroke="#434343"
                                      strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                                <path id="Shape_996" data-name="Shape 996"
                                      d="M368.581,1648.248h-2.667a.666.666,0,0,0-.667.667v12.667h4v-12.667A.667.667,0,0,0,368.581,1648.248Z"
                                      transform="translate(-350.581 -1644.248)" fill="none" stroke="#434343"
                                      strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                            </g>
                        </g>
                    </g>
                </SvgIcon>
            )
        case 'حساب کاربری' :
            return (<SvgIcon xmlns="http://www.w3.org/2000/svg" width="20" height="20.25" viewBox="0 0 20 20.25">
                    <g id="Layer_2" data-name="Layer 2" transform="translate(0 0.125)" opacity="0.7">
                        <g id="Icons">
                            <g id="Users_Geometric-Close-Up-Single-User-Neutral_single-neutral"
                               data-name="Users / Geometric-Close-Up-Single-User-Neutral / single-neutral"
                               transform="translate(1.875 0.625)">
                                <g id="Group_314" data-name="Group 314">
                                    <g id="Regular_314" data-name="Regular 314">
                                        <path id="Oval_473" data-name="Oval 473"
                                              d="M11.125,9.5A4.375,4.375,0,1,0,6.75,5.125,4.375,4.375,0,0,0,11.125,9.5Z"
                                              transform="translate(-3 -0.75)" fill="none" stroke="#434343"
                                              strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                                        <path id="Shape_1252" data-name="Shape 1252"
                                              d="M2.25,21.625a8.125,8.125,0,1,1,16.25,0"
                                              transform="translate(-2.25 -2.875)" fill="none" stroke="#434343"
                                              strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                                    </g>
                                </g>
                            </g>
                            <rect id="Rectangle_2225" data-name="Rectangle 2225" width="20" height="20" fill="none"/>
                        </g>
                    </g>
                </SvgIcon>

            )
        default :
            break
    }
}
const setKey = (text) => {
    switch (text) {
        case 'سفارشات' :
            return 1
        case 'محصولات' :
            return 2
        case 'مدیریت وبسایت' :
            return 3
        case 'کمپین ها' :
            return 4
        case 'دسته بندی ها' :
            return 5
        case 'نظرات' :
            return 6
        case 'امور مالی' :
            return 7
        case 'حساب کاربری' :
            return
        default :
            break
    }

}

function ListItemLink(props) {
    const {primary, to, forwardElement} = props;
    const classes = useStyles();
    const ref = createRef()
    const renderLink = React.useMemo(
        () => React.forwardRef((itemProps, ref) =>
            <RouterLink to={to} ref={ref} {...itemProps} />),
        [to],
    );
    const handleClick = () => {
        forwardElement(ref)
    }

    return (
        <li>
            <ListItem onClick={handleClick} ref={ref} key={setKey(primary)} button component={renderLink}>
                <ListItemIcon>{setIcon(primary)}</ListItemIcon>
                <ListItemText classes={{primary: classes.textStyle}} primary={primary}/>
            </ListItem>
        </li>
    );
}

ListItemLink.propTypes = {
    forwardElement: PropTypes.func.isRequired,
    primary: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
};

export default ListItemLink