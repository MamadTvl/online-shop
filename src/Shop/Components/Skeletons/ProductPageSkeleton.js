import React from "react";
import {Skeleton} from "@material-ui/lab";
import {Card} from "@material-ui/core";


function ProductPageSkeleton() {


    return (
        <Card style={{display: 'flex', width: '100%', height: '500px', marginTop: 40, padding: 24}}>
            <Skeleton variant={'rect'} width={'40%'} height={'100%'}/>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between',marginRight: 32, width: '70%'}}>
                <div style={{display: 'flex', flexDirection: 'column', width: '30%'}}>
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
                <div style={{display: 'flex', justifyContent: 'space-between', width: '60%'}}>
                    <Skeleton style={{marginLeft: 16}} variant={'rect'} width={'100px'} height={'40px'}/>
                    <Skeleton style={{marginLeft: 16}} variant={'rect'} width={'100px'} height={'40px'}/>
                    <Skeleton style={{marginLeft: 16}} variant={'rect'} width={'100px'} height={'40px'}/>
                </div>

            </div>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', marginLeft: 32}}>
                <Skeleton variant={'text'}/>
                <Skeleton variant={'text'}/>
                <Skeleton style={{alignSelf: 'flex-end'}} variant={'rect'} width={'200px'} height={'40px'}/>
            </div>
        </Card>
    )

}

export default ProductPageSkeleton