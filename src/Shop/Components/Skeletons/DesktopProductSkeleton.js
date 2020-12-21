import React from "react";
import {Card} from "@material-ui/core";
import {useProductStyle} from "../Product/Styles/useProductStyle";
import {Skeleton} from "@material-ui/lab";
import {usePhotoViewerStyle} from "../Product/Styles/usePhotoViewerStyle";


function ProductPageSkeleton() {
    const classes = useProductStyle()
    const containerStyle = usePhotoViewerStyle()
    return (
        <Card>
            <div className={classes.content}>
                <Skeleton className={containerStyle.container} variant={'rect'} />
                <div className={classes.detailContainer}>

                    <div className={classes.details}>
                        <Skeleton width={'400px'} style={{marginBottom: 32}} component={'h1'} variant={'text'}/>
                        <Skeleton style={{marginBottom: 16}} width={'200px'} component={'h2'} variant={'text'}/>
                        <Skeleton width={'300px'} component={'h5'} variant={'text'}/>
                        <Skeleton width={'300px'} component={'h5'} variant={'text'}/>
                        <Skeleton width={'300px'} component={'h5'} variant={'text'}/>
                        <Skeleton width={'300px'} component={'h5'} variant={'text'}/>
                        <Skeleton width={'300px'} component={'h5'} variant={'text'}/>
                        <Skeleton width={'300px'} component={'h5'} variant={'text'}/>
                        <Skeleton width={'300px'} component={'h5'} variant={'text'}/>
                        <Skeleton width={'300px'} component={'h5'} variant={'text'}/>
                        <Skeleton width={'300px'} component={'h5'} variant={'text'}/>
                    </div>

                    <div className={classes.selects}>
                        <div className={classes.selectContainer}>
                            <Skeleton width={'30px'} component={'h6'} variant={'text'}/>
                            <Skeleton  variant={'rect'} width={'100px'} height={'40px'}/>
                        </div>
                        <div className={classes.selectContainer}>
                            <Skeleton width={'30px'} component={'h6'} variant={'text'}/>
                            <Skeleton  variant={'rect'} width={'100px'} height={'40px'}/>
                        </div>
                        <div className={classes.selectContainer}>
                            <Skeleton width={'30px'} component={'h6'} variant={'text'}/>
                            <Skeleton  variant={'rect'} width={'100px'} height={'40px'}/>
                        </div>
                    </div>
                </div>

                <div className={classes.actionContainer}>
                    <Skeleton width={'30px'} height={'30px'} variant={'circle'}/>
                    <div className={classes.priceDetailContainer}>
                        <div className={classes.priceContainer}>
                            <Skeleton width={70} variant={'text'}/>
                        </div>
                        <Skeleton variant={'rect'} width={'200px'} height={'40px'}/>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default ProductPageSkeleton


