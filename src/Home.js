import React from "react";
import "./Home.css";
import Category from "./Category";
// import home_img from "./home_img.jpeg";
import acc from "./acc.jpg";
import electronics from "./electronics.jpeg";
import decoration from "./decoration.jpeg";
import essentials from "./essentials.jpeg";
import fashion from "./fashion.jpeg";
import beauty from "./beauty.jpeg";
import bgImg from "./bgMainImg.svg";
// import tools from "./tools.jpeg";
import { Link } from "react-router-dom";
function home() {
  return (
    <div className="home">
      <div className="img-wrapper">
        <img className="home_image" src={bgImg} alt="" />
      </div>

      <div className="home_row">
        <Link to="/accessories" className="link_adjustment">
          <Category
            title="Accessories | Up to 60% off Watches, Wallets And ... Other Accessories"
            image={acc}
            See_more="See more"
            catId="1"
          />
        </Link>

        <Link to="/electronics" className="link_adjustment">
          <Category
            title="Electronic Devices for Home & Office"
            image={electronics}
            See_more="See more"
            catId="2"
          />
        </Link>
      </div>
      <div className="home_row">
        <Link to="/decor_home" className="link_adjustment">
          <Category
            title="Revamp your home in style"
            image={decoration}
            See_more="See more"
            catId="3"
          />
        </Link>
        <Link to="/fitness" className="link_adjustment">
          <Category
            title="Food, fitness and WFH essentials | Launchpad"
            image={essentials}
            See_more="See more"
            catId="4"
          />
        </Link>
      </div>
      <div className="home_row">
        <Link to="/Bestseller" className="link_adjustment">
          <Category
            title="Under ₹499 | Bestsellers In Skincare"
            image={beauty}
            See_more="See more"
            catId="5"
          />
        </Link>
        <Link to="/fashion" className="link_adjustment">
          <Category
            title="Under ₹499 | Pocket-friendly fashion"
            image={fashion}
            See_more="See more"
            catId="6"
          />
        </Link>
      </div>
    </div>
  );
}

export default home;
