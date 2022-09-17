import React from "react";
import "./Fitness.css";
import Product from "./Product";
function Fitness() {
  return (
    <div className="fitness">
      <div className="fitness_heading">
        <h1>Fitness</h1>
      </div>
      <div className="acc_row">
        <Product
          id="Strauss"
          title="Strauss Adjustable Spring Hand Exerciser | Finger Exerciser| Hand Grip Strengthener for Men & Women"
          price={300}
          rating={4}
          image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61GpGJIhPmL._AC_UL480_FMwebp_QL65_.jpg"
        />
        <Product
          id="Boldfit Skipping Rope"
          title="Boldfit Skipping Rope for Men and Women Jumping Rope With Adjustable Height Speed Skipping"
          price={234}
          rating={3}
          image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71HNPjXWyQL._AC_UL480_FMwebp_QL65_.jpg"
        />
        <Product
          id="Plantigo Protien"
          title="Plantigo Vegan Plant Protein Powder, 24G (Pea Protein & Brown Rice), Men & Women"
          price={495}
          rating={4}
          image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61g3uRoHPQL._AC_UL480_FMwebp_QL65_.jpg"
        />
        <Product
          id="Protien Bar"
          title="MuscleBlaze 20 g Protein Bar, Choco Cranberry, Protein Blend, Fibre, 100% Veg, Gluten-Free"
          price={611}
          rating={4}
          image="https://m.media-amazon.com/images/I/81yAUstchAL._AC_UL480_FMwebp_QL65_.jpg"
        />
      </div>
      <div className="acc_row">
        <Product
          id="DEALBUTH™"
          title="DEALBUTH™ Premium Double Toning Resistance Tube Heavy Quality Exercise Band for Stretching, Full Body Workout"
          price={179}
          rating={3}
          image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/614aNZj4QUL._AC_UL480_FMwebp_QL65_.jpg"
        />
        <Product
          id="Yoga MAt"
          title="Vifitkit Anti-Skid Yoga Mat with Carry Bag For Home Gym & Outdoor Workout, Water-Resistant, Soft, Easy to Fold (4mm)"
          price={334}
          rating={3}
          image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51zC8UjgTwL._AC_UL480_FMwebp_QL65_.jpg"
        />
        <Product
          id="Fitness Watch"
          title="SONATA Gold Series Smart Band Wireless Sweatproof Fitness Band S6-3| Activity Tracker| Blood Pressure| Heart Rate Sensor| Sleep Monitor"
          price={495}
          rating={4}
          image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/41Okul7-NBL._AC_UL480_FMwebp_QL65_.jpg"
        />
        <Product
          id="32 Fitness Tips"
          title="Fitness:Fitness For Winners - 32 Fitness Tips For Your Dream Body And Focused Mind"
          price={611}
          rating={4}
          image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61PaM11-Z3L._AC_UL480_FMwebp_QL65_.jpg"
        />
      </div>
    </div>
  );
}

export default Fitness;
