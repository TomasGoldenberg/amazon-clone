import React from "react";
import "../assets/styles/components/Header.css";
import {Link} from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import  {useStateValue } from "./StateProvider.js";


function Header(){
    
    const [ {basket}] = useStateValue();
  


    return(
        <nav className="header">

            {/**Logo */}
            <Link to="/">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Logo"/>
            </Link>

            {/**SearchBar */}
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>

            {/**Links */}
            <div className="header__nav">

                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__option--1">Hello</span>
                        <span className="header__option--2">Sign in</span>
                    </div>
                </Link>


                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__option--1">Returns</span>
                        <span className="header__option--2">& Orders</span>
                    </div>
                </Link>

                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__option--1">Your</span>
                        <span className="header__option--2">Prime</span>
                    </div>
                </Link>


                <Link to="/checkout" className="header__link">
                    <div className="header__basket">
                        <ShoppingBasketIcon className="header__ShoppingBasketIcon" />
                        <span className="header__option--1" >{basket?.length}</span>
                    </div>
                </Link>


            </div>
        </nav>
    )
}

export default Header;
