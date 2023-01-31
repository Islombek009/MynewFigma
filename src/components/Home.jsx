import React from "react";
import Carousel from "./Carousel";
import FreeDelivery from "./FreeDelivery";
import FreeDelivery2 from "./FreeDelivery2";
import FreeDelivery3 from "./FreeDelivery3";
import FruitsCards from "./FruitsCards";
import NewProducts from "./NewProducts";
import NewProducts2 from "./NewProducts2";
import ThreeCards from "./ThreeCards";

export default function Home(){
    return(
        <>
            <Carousel/>
            <FruitsCards/>
            <NewProducts/><br />
            <FreeDelivery/>
            <NewProducts2/>
            <FreeDelivery2/><br />
            <ThreeCards/><br />
            <FreeDelivery3/>
        </>
    )
}