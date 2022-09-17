import React from "react";
import Product from "./Product";
import "./Accessories.css";

function Accessories() {
  return (
    <div className="acc">
      <div className="acc_heading">
        <h1>Accessories </h1>
      </div>
      <div className="acc_row">
        <Product
          id="Woodland"
          title="Black Leather Men's Wallet (Wa_WD_02)"
          price={899}
          rating={4}
          image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/812CqK2mUeL._AC_UL480_FMwebp_QL65_.jpg"
        />
        <Product
          id="Noise"
          title="Noise ColorFit Pulse Grand Smart Watch with 1.69 inches (4.2cm) HD Display"
          price={5599}
          rating={3}
          image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61CuS0i+J3L._AC_UL480_FMwebp_QL65_.jpg"
        />
        <Product
          id="URBAN FOREST"
          title="Leather Belt for Men"
          price={350}
          rating={4}
          image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/81jv56HsVOL._AC_UL480_FMwebp_QL65_.jpg"
        />
        <Product
          id="YouBella"
          title="YouBella Jewellery Bracelets for Women Stylish Rose Gold Plated Crystal Bracelet Bangle Jewellery for Girls and Women"
          price={1100}
          rating={3}
          image="https://m.media-amazon.com/images/I/71P8z0DrFRL._AC_UL480_QL65_.jpg"
        />
      </div>
      <div className="acc_row">
        <Product
          id="Generics"
          title="Jil cart Branded Metal Body Square Inspired from Kabir Singh Sunglass for Men and Boys"
          price={4000}
          rating={4}
          image="https://m.media-amazon.com/images/I/51Jg477xc2L._AC_UL480_QL65_.jpg"
        />
        <Product
          id="Nike"
          title="Air Max 97 Premium QS Mens Running Trainers Aj2614 Sneakers Shoes 201"
          price={11999}
          rating={5}
          image="https://m.media-amazon.com/images/I/61FvbXawzYL._AC_UL480_QL65_.jpg"
        />
        <Product
          id="CenWell"
          title="Cenwell Reusable, Washable Designer Fabric Cotton 3D Printed 6 Layer Face Mask with Adjustable Earloop, Ear Saver Strap, Melt Blown Filter "
          price={199}
          rating={4}
          image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/91UD1bIyYAL._AC_UL480_FMwebp_QL65_.jpg"
        />
        <Product
          id="Amazfit"
          title="Amazfit Zepp E Stylish Smart Watch CircleVersion , Health and Fitness Tacker with Heart Rate, SpO2 and REM Sleep Monitoring, Stainless Steel Body with Genuine Leather Band "
          price={3949}
          rating={4}
          image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71DqnLUaJ8L._SX679_.jpg"
        />
      </div>
      <div className="acc_row">
        <Product
          id="YouBella"
          title="YouBella Jewellery Bracelets for Women Stylish Multi-Colour Gold Plated Charm Crystal Bracelet Bangle Jewellery for Girls and Women"
          price={1599}
          rating={4}
          image="https://images-eu.ssl-images-amazon.com/images/I/61NNoSrVOCL._AC_UL160_SR160,160_.jpg"
        />
        <Product
          id="URBAN FOREST"
          title="
          Sherlock Blue Leather Wallet, Keyring & Pen Combo Gift Set for Men"
          price={999}
          rating={3}
          image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/81hjFNtCNyL._AC_UL480_FMwebp_QL65_.jpg"
        />
        <Product
          id="Fargo"
          title="
          Handbag For Women And Girls COMBO SET OF 5 (Light5pc)"
          price={2700}
          rating={4}
          image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51-+SFrhYFL._AC_UL480_FMwebp_QL65_.jpg"
        />
        <Product
          id="flying CLOUDS"
          title="flying CLOUDS Soft Silicone Noise Reduction Ear Plugs"
          price={159}
          rating={3}
          image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71kPCEOZEdL._AC_UL480_FMwebp_QL65_.jpg"
        />
      </div>
      <div className="acc_row">
        <Product
          id="Vintage"
          title="
          G-15 Full Rim | 400% UV Protection & Polarized "
          price={1600}
          rating={4}
          image="https://m.media-amazon.com/images/I/511FONG3AHL._AC_UL480_QL65_.jpg"
        />
        <Product
          id="HIDE & SKIN"
          title="
          Men's Leather Belt"
          price={499}
          rating={3}
          image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/711A2Mua8pL._AC_UL480_FMwebp_QL65_.jpg"
        />
        <Product
          id="Chimes"
          title="Yellow Chimes Bracelets for Men and Boys | Leather Bracelet Set for Men | Multi Layered Strand Leather Wrap Wrist Bracelet Combo | Accessories"
          price={259}
          rating={4}
          image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71gjc0BTxUL._AC_UL480_FMwebp_QL65_.jpg"
        />
        <Product
          id="Supercomfy"
          title="Trajectory Supercomfy Grey Neck Pillow Rest Cushion with Velvet Eyemask and Earphone Case for Travel in Flight car Train Airplane"
          price={449}
          rating={3}
          image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/91sOW3ThNlL._AC_UL480_FMwebp_QL65_.jpg"
        />
      </div>
    </div>
  );
}

export default Accessories;
