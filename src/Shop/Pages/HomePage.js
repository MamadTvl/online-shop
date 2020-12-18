import React, {useState} from "react";
import Slider from "../Components/Home/Slider";
import Banners from "../Components/Home/Banners";
import AmazingOffers from "../Components/Home/AmazingOffers";
import Attributes from "../Components/Home/Attributes";
import BlogInterView from "../Components/Home/BlogInterView";
import useHomeData from "../FetchData/useHomeData";
import {Skeleton} from "@material-ui/lab";
import BestSeller from "../Components/Home/BestSeller";

function HomePage() {
    const [fetch,] = useState(true)
    const [loading, result] = useHomeData(fetch)

    if (loading)
        return <Skeleton animation={'wave'} width={'100%'} height={1000} variant={'rect'}/>
    console.log(result)
    return (
        <>
            <Slider
                sliders={result[0]}
            />
            <Banners
                banners={result[1]}
            />
            <BestSeller products={result[2]}/>
            {/*<AmazingOffers products={result[3]}/>*/}
            <Attributes
                attributes={result[4]}
            />
            <BlogInterView/>
        </>
    )
}

export default HomePage