import React from "react";
import ShopLayout from "../Layouts/ShopLayout";
import Slider from "../Components/Home/Slider";
import Banners from "../Components/Home/Banners";
import ProductsSlider from "../Components/Home/ProductsSlider";
import AmazingOffers from "../Components/Home/AmazingOffers";
import Attributes from "../Components/Home/Attributes";
import BlogInterView from "../Components/Home/BlogInterView";

function HomePage() {
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