import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import Logo from "./AppLogo";

function Header() {
  const [{ basket }] = useStateValue();

  console.log(basket);

  return (
    <div className="navBar-wrapper">
      <nav className="Header">
        {/* logo in the left */}
        <Link to="/" className="headerLogo-Link">
          <span className="WebsiteHeading2">
            SH
            <Logo logoEdit="Ologo-wrapper2" />
            PEY
          </span>
        </Link>

        {/* searxh box */}
        <div className="header_search">
          <input type="text" className="header_searchInput" />
          <SearchIcon className="header_searchIcon" />
        </div>

        {/* navigations links */}
        <div className="header_nav">
          {/* first link */}
          <Link to="/login" className="header_link">
            <div className="header_option">
              <span className="header_optionLineOne">Hello</span>
              <span className="header_optionLineTwo">Sign In</span>
            </div>
          </Link>

          {/* second link */}
          <Link to="/" className="header_link">
            <div className="header_option">
              <span className="header_optionLineOne">Returns </span>
              <span className="header_optionLineTwo">& Orders</span>
            </div>
          </Link>

          {/* third link */}
          <Link to="/checkout" className="header_link">
            <div className="header_optionBasket">
              <ShoppingBasketIcon />
              <span className="header_optionLineTwo header_basketCount ">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;
