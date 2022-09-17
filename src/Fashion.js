import React from "react";
import "./Fashion.css";
import Product from "./Product";

function Fashion() {
  return (
    <div className="fashion">
      <div className="fashion_heading">
        <h1>Fashion</h1>
      </div>
      <div className="acc_row">
        <Product
          id="Lycra"
          title="Men's Lycra Lining Digital Printed Stitched Half Sleeve Shirt Casual"
          price={449}
          rating={3}
          image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/41R+ZAMt64L._AC_UL480_FMwebp_QL65_.jpg"
        />
        <Product
          id="SANFS"
          title="Men's Printed Full Sleeve Slim Fit Cotton T-Shirt"
          price={334}
          rating={4}
          image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61bDoqhvEPL._AC_UL320_.jpg"
        />
        <Product
          id="Denim"
          title="Full Sleeve Blue Solid Women's Denim Jacket"
          price={495}
          rating={4}
          image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71V0TFm3MsL._AC_UL480_FMwebp_QL65_.jpg"
        />
        <Product
          id="Digital Sportsy"
          title="Ultra-Thin Digital Sports Fashion Wrist Watch for Mens Boys "
          price={611}
          rating={4}
          image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61CnZA6XkmL._AC_UL480_FMwebp_QL65_.jpg"
        />
      </div>
      <div className="acc_row">
        <Product
          id="Women Fit"
          title="Women Fit and Flare Printed Dress"
          price={699}
          rating={3}
          image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61eSQ8Rmv5L._AC_UL480_FMwebp_QL65_.jpg"
        />
        <Product
          id="Choker"
          title="Jewellery Stylish Black Lace 7 pc Combo Choker Necklace Set"
          price={354}
          rating={4}
          image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71v41Am4GxL._AC_UL480_FMwebp_QL65_.jpg"
        />
        <Product
          id="Lavie"
          title="Lavie Fabio Backpack for Girls | Women's Fashion Backpack"
          price={799}
          rating={3}
          image="https://m.media-amazon.com/images/I/61dBQK3nd3L._AC_UL480_QL65_.jpg"
        />
        <Product
          id="Fancy Cotton"
          title="Women's Fancy Cotton Blend Batik Printed Saree with Blouse Piece "
          price={599}
          rating={4}
          image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/81JLOAHWxdL._AC_UL480_FMwebp_QL65_.jpg"
        />
      </div>
    </div>
  );
}

export default Fashion;
