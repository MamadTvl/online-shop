import React from "react";
import {Card, Grid} from "@material-ui/core";
import {Skeleton} from "@material-ui/lab";
import {useMobileProductStyle} from "../Product/MobileVersion/Styles/useMobileProductStyle";
import {useMobilePhotoViewerStyle} from "../Product/MobileVersion/Styles/useMobilePhotoViewerStyle";


function MobilePageSkeleton() {
    const viewCardClasses = useMobileProductStyle()
    const photoContainerClasses = useMobilePhotoViewerStyle()

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Skeleton variant={'rect'} width={'100%'} height={'40%'}/>
            </Grid>
            <Grid item xs={12}>
                <Card className={viewCardClasses.card}>
                    <Skeleton className={photoContainerClasses.container} variant={'rect'}/>
                    <Skeleton style={{margin: '16px 0'}} component={'h3'} width={200} variant={'text'}/>
                    <div style={{marginBottom: 16}} className={viewCardClasses.priceDetailContainer}>
                        <div className={viewCardClasses.priceContainer}>
                            <Skeleton width={70} variant={'text'}/>
                        </div>
                    </div>
                    <div className={photoContainerClasses.selects}>
                        <div style={{marginBottom: 16}} className={photoContainerClasses.selectContainer}>
                            <Skeleton width={'30px'} component={'h6'} variant={'text'}/>
                            <Skeleton variant={'rect'} width={'100%'} height={'40px'}/>
                        </div>
                        <div style={{marginBottom: 16}} className={photoContainerClasses.selectContainer}>
                            <Skeleton width={'30px'} component={'h6'} variant={'text'}/>
                            <Skeleton variant={'rect'} width={'100%'} height={'40px'}/>
                        </div>
                        <div style={{marginBottom: 16}} className={photoContainerClasses.selectContainer}>
                            <Skeleton width={'30px'} component={'h6'} variant={'text'}/>
                            <Skeleton variant={'rect'} width={'100%'} height={'40px'}/>
                        </div>
                        <Skeleton style={{marginTop: 16}} variant={'rect'} width={'100%'} height={'40px'}/>
                    </div>
                </Card>
            </Grid>
            <Grid item xs={12}>
                <Card className={viewCardClasses.card}>
                    <Skeleton width={'100%'} height={200} variant={'rect'}/>
                </Card>
            </Grid>
            <Grid item xs={12}>
                <Card className={viewCardClasses.card}>
                    <Skeleton width={'100%'} height={200} variant={'rect'}/>
                </Card>
            </Grid>
        </Grid>
    )
}

export default MobilePageSkeleton