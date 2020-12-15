import React, {useState} from "react";
import ShopLayout from "../Layouts/ShopLayout";
import Slider from "../Components/Home/Slider";
import Banners from "../Components/Home/Banners";
import ProductsSlider from "../Components/Home/ProductsSlider";
import AmazingOffers from "../Components/Home/AmazingOffers";
import Attributes from "../Components/Home/Attributes";
import BlogInterView from "../Components/Home/BlogInterView";
import useHomeData from "../FetchData/useHomeData";

function HomePage() {
    const [fetch,] = useState(true)
    const [loading, result] = useHomeData(fetch)

    if (loading)
        return null
    return (
        <ShopLayout>
           <Slider
               sliders={result[0]}
           />
           <Banners
               banners={result[1]}
           />
           <ProductsSlider/>
           <AmazingOffers/>
           <Attributes
               attributes={result[3]}
           />
           <BlogInterView/>
        </ShopLayout>
    )
}

export default HomePage