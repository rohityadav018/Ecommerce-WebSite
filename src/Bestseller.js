import React from "react";
import "./Bestseller.css";
import Product from "./Product";
import "./Accessories.css";

function Bestseller() {
  return (
    <div className="bestseller">
      <div className="bestseller_heading">
        <h1>Fitness</h1>
      </div>
      <div className="acc_row">
        <Product
          id="Lexton"
          title="Lexton 40 Feet LED Decorative String Light |for Indoor & Outdoor Decorations (Warm White, Pack of 1), standard (Lex-String/40Feet)"
          price={179}
          rating={3}
          image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71C-WXHPm4S._AC_UL480_FMwebp_QL65_.jpg"
        />
        <Product
          id="SANFS"
          title="SAF Set of 3 Flower Floral Pot UV Coated Home Decorative Gift Item Framed Painting 13.5 inch X 22 inch SANFSW4951"
          price={334}
          rating={3}
          image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/91xU0f5+BhL._AC_UL480_FMwebp_QL65_.jpg"
        />
        <Product
          id="Candle Holder"
          title="Homesake Tealight Candle Holders for Home Decor, Mosaic Glass, Flower"
          price={495}
          rating={4}
          image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/81VKKLl4lFL._AC_UL480_FMwebp_QL65_.jpg"
        />
        <Product
          id="Dekorly"
          title="Dekorly Set of 4 Mini Artificial Plants Potted Fake Bonsai Ball Plant Faux Green Grass "
          price={611}
          rating={4}
          image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/81Gfz4c9G8S._AC_UL480_FMwebp_QL65_.jpg"
        />
      </div>
      <div className="acc_row">
        <Product
          id="Lexton"
          title="Lexton 40 Feet LED Decorative String Light |for Indoor & Outdoor Decorations (Warm White, Pack of 1), standard (Lex-String/40Feet)"
          price={179}
          rating={3}
          image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71C-WXHPm4S._AC_UL480_FMwebp_QL65_.jpg"
        />
        <Product
          id="SANFS"
          title="SAF Set of 3 Flower Floral Pot UV Coated Home Decorative Gift Item Framed Painting 13.5 inch X 22 inch SANFSW4951"
          price={334}
          rating={3}
          image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/91xU0f5+BhL._AC_UL480_FMwebp_QL65_.jpg"
        />
        <Product
          id="Candle Holder"
          title="Homesake Tealight Candle Holders for Home Decor, Mosaic Glass, Flower"
          price={495}
          rating={4}
          image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/81VKKLl4lFL._AC_UL480_FMwebp_QL65_.jpg"
        />
        <Product
          id="Dekorly"
          title="Dekorly Set of 4 Mini Artificial Plants Potted Fake Bonsai Ball Plant Faux Green Grass "
          price={611}
          rating={4}
          image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/81Gfz4c9G8S._AC_UL480_FMwebp_QL65_.jpg"
        />
      </div>
    </div>
  );
}

export default Bestseller;
