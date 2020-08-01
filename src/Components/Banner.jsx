import React from "react";
import Product from "../Components/Product";

import "../assets/styles/components/Banner.css";

const Banner = ()=>{

    return(
    <>
        <div className="banner">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" className="banner__img"alt="Banner"/>
        </div>

        <div className="row">
            <Product 
                id="11"
                title="The Lean Startup: How Innovation Creates Success"
                price={11.65}
                rating={4}
                image="https://miro.medium.com/max/4452/1*zxtMIuwC0eMGDAQ8gkCtcg.jpeg"
            />

            <Product 
                id="12"
                title="Mac Air - I9/ RAM 16GB"
                price={1094.99}
                rating={5}
                image="https://miro.medium.com/max/4452/1*zxtMIuwC0eMGDAQ8gkCtcg.jpeg"
            />  
        </div>



        <div className="row">
            <Product 
                id="13"
                title="Freezer Gama - 410Lt - Eficiencia A"
                price={201.15}
                rating={3}
                image="https://miro.medium.com/max/4452/1*zxtMIuwC0eMGDAQ8gkCtcg.jpeg"
            />

            <Product 
                id="14"
                title="AirPods - Wireless"
                price={301.15}
                rating={5}
                image="https://miro.medium.com/max/4452/1*zxtMIuwC0eMGDAQ8gkCtcg.jpeg"
            />  

            <Product 
                id="15"
                title="Escuela de negocios: El libro de kiyosaki"
                price={21.65}
                rating={4}
                image="https://miro.medium.com/max/4452/1*zxtMIuwC0eMGDAQ8gkCtcg.jpeg"
            />  
        </div>


        <div className="row">
            <Product 
                id="16"
                title="Samsung Smart Tv 400pg"
                price={231.65}
                rating={1}
                image="https://miro.medium.com/max/4452/1*zxtMIuwC0eMGDAQ8gkCtcg.jpeg"
            />
        </div>

    </>
    )
}

export default Banner;