import React from "react"
import {useStateValue} from "./StateProvider";
import "../assets/styles/components/CheckoutComponent.css";
import CheckoutProduct from "./CheckoutProduct";


const CheckoutComponent= ()=>{
    const [{basket}] = useStateValue();
    return(
<>
        <div className="checkout">
            <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423192668_.jpg"className="checkout__add" alt="advertising"/>
        
        {basket.length === 0 ? (
            <div>
                <h2>Your Shopping Basket is empty</h2>
                <p>
                    Your have no items in your basket. 
                    To buy one click "Add to Basket next to the item." 
                </p>
            </div>
        ) : (
            <div>
                <h2 className="checkout__title">Your Shopping Basket</h2>
            
                { basket.map((item) =>(
                        <CheckoutProduct 
                            id      ={item.id}
                            title   ={item.title}
                            image   ={item.image}
                            price   ={item.price}
                            rating  ={item.rating}
                        />
                )) }
            </div>
        )
        }
        </div>
</>
    )
}

export default CheckoutComponent;