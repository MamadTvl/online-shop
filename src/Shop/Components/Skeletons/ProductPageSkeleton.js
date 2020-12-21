import React from "react";
import {Skeleton} from "@material-ui/lab";
import useWindowSize from "../../../utills/Hooks/useWindowSize";
import DesktopProductSkeleton from "./DesktopProductSkeleton";
import MobileProductSkeleton from "./MobileProductSkeleton";


function ProductPageSkeleton() {
    const size = useWindowSize()
    return (

        <>
            <Skeleton style={{marginBottom: 16}} width={'300px'} component={'h5'} variant={'text'}/>

            {
                size.width > 600
                    ? <DesktopProductSkeleton/>
                    : <MobileProductSkeleton/>
            }
        </>

    )

}

export default ProductPageSkeleton