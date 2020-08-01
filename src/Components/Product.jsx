import React from "react";
import "../assets/styles/components/Product.css";
import  {useStateValue } from "./StateProvider.js";

const Product= ({id,title,price,rating,image})=>{
    const [{basket}, dispatch] = useStateValue();
    
    const addToBasket = ()=>{
        dispatch({
            type:"ADD_TO_BASKET",
            payload: {
                id:id,
                title:title,
                price:price,
                rating:rating,
                image:image
                
            }
        })
        console.log(basket)
    }

    return(
        <div className="product">
            <div className="product__info">
                <p className="product__title">{title}</p>
                
                <p className="product__price"> <small>$</small><strong>{price}</strong></p>
            
                <p className="product__rating">
                    {/* fill= llenalo con algo, map _ no me importa el valor solo quiero que iteres "rating" veces*/
                    Array(rating).fill().map((_)=>( <span>&#11088; </span>))
                    }
                </p>
            </div>
           

            <img src={image} alt="product" className="product__img"/>

            <button 
                className="product__button"
                onClick={addToBasket}
            > Add to basket </button>
        </div>
    )
}

export default Product