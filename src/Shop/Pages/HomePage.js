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

    return (
        <>
            <Slider
                sliders={result[0]}
            />
            <Banners
                banners={result[1]}
            />
            <BestSeller/>
            <AmazingOffers/>
            <Attributes
                attributes={result[3]}
            />
            <BlogInterView/>
        </>
    )
}

export default HomePage