import React from "react";
import {Card, IconButton, SvgIcon, Typography} from "@material-ui/core";
import PropType from 'prop-types'
import {usePreviewOrderStyle} from "./Styles/usePreviewOrderStyle";

function PreviewAddressCard(props) {
    const classes = usePreviewOrderStyle()
    const {data} = props
    const titles = ['استان', 'شهر', 'کدپستی', 'آدرس']

    const setData = (index) => {
        switch (index) {
            case 0:
                return data.state
            case 1:
                return data.city
            case 2:
                return data.code
            case 3:
                return data.address
            default:
                break
        }
    }
    return (
        <Card style={{marginBottom: 12}} className={classes.card}>

            <div style={{width: '80%', margin: 'auto 0'}} className={classes.right}>
                {
                    titles.map((title, index) => (
                        <div className={classes.dataContainer}>
                            <Typography className={classes.title}>{title}</Typography>
                            <Typography className={classes.data}>{setData(index)}</Typography>
                        </div>
                    ))
                }
            </div>
            <div className={classes.left}>
                <div className={classes.dataContainer}>
                    <IconButton style={{padding: 4}}>
                        <SvgIcon xmlns="http://www.w3.org/2000/svg" width="15.9" height="17.5"
                                 viewBox="0 0 15.9 17.5">
                            <g id="trash-2" transform="translate(-2.25 -1.25)">
                                <path id="Path_2584" data-name="Path 2584" d="M3,6H17.4"
                                      transform="translate(0 -0.8)" fill="none" stroke="#f16522"
                                      strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                                <path id="Path_2585" data-name="Path 2585"
                                      d="M16.2,5.2V16.4A1.6,1.6,0,0,1,14.6,18h-8A1.6,1.6,0,0,1,5,16.4V5.2m2.4,0V3.6A1.6,1.6,0,0,1,9,2h3.2a1.6,1.6,0,0,1,1.6,1.6V5.2"
                                      transform="translate(-0.4)" fill="none" stroke="#f16522"
                                      strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                                <line id="Line_26" data-name="Line 26" y2="4.8" transform="translate(8.6 9.2)"
                                      fill="none" stroke="#f16522" strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="1.5"/>
                                <line id="Line_27" data-name="Line 27" y2="4.8" transform="translate(11.8 9.2)"
                                      fill="none" stroke="#f16522" strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="1.5"/>
                            </g>
                        </SvgIcon>
                    </IconButton>
                    <IconButton style={{padding: 4}}>
                        <SvgIcon xmlns="http://www.w3.org/2000/svg" width="17.648" height="17.5"
                                 viewBox="0 0 17.648 17.5">
                            <g id="edit" transform="translate(-1.25 -1.129)">
                                <path id="Path_2582" data-name="Path 2582"
                                      d="M9.157,4H3.59A1.59,1.59,0,0,0,2,5.59V16.723a1.59,1.59,0,0,0,1.59,1.59H14.723a1.59,1.59,0,0,0,1.59-1.59V11.157"
                                      transform="translate(0 -0.434)" fill="none" stroke="#434343"
                                      strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                                <path id="Path_2583" data-name="Path 2583"
                                      d="M16.349,2.373a1.687,1.687,0,0,1,2.386,2.386l-7.554,7.554L8,13.108l.8-3.181Z"
                                      transform="translate(-1.229)" fill="none" stroke="#434343"
                                      strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                            </g>
                        </SvgIcon>
                    </IconButton>
                </div>
            </div>
        </Card>
    )
}

PreviewAddressCard.propTypes = {
    data: PropType.object.isRequired
}

export default PreviewAddressCard