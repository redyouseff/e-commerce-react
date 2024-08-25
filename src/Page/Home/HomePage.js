import React, { useEffect } from "react";
import NavBarLogin from "../../Components/uitilty/NavBarLogin";
import Slider from "../../Components/Home/Slider";
import HomeCategore from "../../Components/Home/HomeCategore";
import CardProductContainer from "../../Components/products/CardProductContainer";
import DiscountSection from "../../Components/Home/DiscountSection";
import BrandFeature from "../../Components/Brand/BrandFeature";
import Footer from "../../Components/uitilty/Footer";

import { useDispatch, useSelector } from "react-redux";
import GetAllProducts from "../../Hoock/product/getAllProduct";
const HomePage=()=>{

   const item= GetAllProducts();
  
   
    return(<dev>
      
        <Slider></Slider>
        <HomeCategore></HomeCategore> 
        <CardProductContainer products={item} title="الاكثر مبيعا " btntitle="المزيد" pathText="/products"></CardProductContainer>
        <DiscountSection> </DiscountSection>
        <CardProductContainer title="احدث الازياء " btntitle="المزيد " pathText="/products"></CardProductContainer>
        <BrandFeature title="اشهر الماركات " btntitle="المزيد"></BrandFeature>
       


    </dev>)
}
export default HomePage;