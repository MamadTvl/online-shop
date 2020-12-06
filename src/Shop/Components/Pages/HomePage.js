import React from "react";
import ShopLayout from "../../Layouts/ShopLayout";
import Slider from "../Home/Slider";
import Banners from "../Home/Banners";
import ProductsSlider from "../Home/ProductsSlider";
import AmazingOffers from "../Home/AmazingOffers";
import Attributes from "../Home/Attributes";
import BlogInterView from "../Home/BlogInterView";
function HomePage() {
    //todo : responsive for ipad pro
    return (
        <ShopLayout>
           <Slider/>
           <Banners/>
           <ProductsSlider/>
           <AmazingOffers/>
           <Attributes/>
           <BlogInterView/>
        </ShopLayout>
    )
}

export default HomePage