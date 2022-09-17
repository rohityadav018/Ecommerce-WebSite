import React from "react";
import "./Electronics.css";
import Product from "./Product";

function Electronics() {
  return (
    <div className="elec">
      <div className="elec_heading">
        <h1>Electronics</h1>
      </div>
      <div className="acc_row">
        <Product
          id="SEEKER"
          title="USB C Hub Ethernet Adapter, SEEKER 6 in 1 Premium Aluminum Type C Multiport Adapter"
          price={2899}
          rating={4}
          image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/514BcT2Q5pL._AC_UL480_FMwebp_QL65_.jpg"
        />
        <Product
          id="Zodo"
          title="Zodo 8.5 inches LCD E-Writer Electronic Writing Pad/Tablet Drawing Board"
          price={300}
          rating={3}
          image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61Pg1H7U15L._AC_UL480_FMwebp_QL65_.jpg"
        />
        <Product
          id="Imou"
          title="Imou 360° 1080P Full HD Security Camera, Human Detection, Motion Tracking, 2-Way Audio, Night Vision, Dome Camera with WiFi & Ethernet"
          price={2199}
          rating={4}
          image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51HdC2UqaLL._AC_UL480_FMwebp_QL65_.jpg"
        />
        <Product
          id="Tenda"
          title="Tenda F3 300Mbps Wireless Router with 3 External Antennas - White"
          price={1799}
          rating={4}
          image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/41oLuZ8hkTL._AC_UL480_FMwebp_QL65_.jpg"
        />
      </div>
      <div className="acc_row">
        <Product
          id="BeatXP "
          title="beatXP Wave Digital Bathroom Weighing Scale with LCD Panel & Thick Tempered Glass, Electronic Weight Machine for Human Body"
          price={549}
          rating={3}
          image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/6186QrAub6L._AC_UL480_FMwebp_QL65_.jpg"
        />
        <Product
          id="Logitech"
          title="Logitech K230 Compact Wireless Keyboard for Windows, 2.4GHz Wireless with USB Unifying Receiver, Space-Saving Design, 2-Year Battery Life, PC/Laptop- Black"
          price={949}
          rating={4}
          image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71CB9DzOkeL._AC_UY327_FMwebp_QL65_.jpg"
        />
        <Product
          id="Ubon"
          title="UBON Power Champ 2.0 Cordless Extension Board with USB Ports & 3 Universal Sockets with Individual Switch Buttons & LED Indicators"
          price={499}
          rating={3}
          image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71OVmItnA-L._AC_UL480_FMwebp_QL65_.jpg"
        />
        <Product
          id="NUTRICOOK"
          title="NUTRICOOK 1700 Watts, Stainless Steel Digital Control Panel Display, 10 Preset Programs with built-in Preheat function, Brush Air Fryer 2 ( AF205, 5.5 L)"
          price={8290}
          rating={4}
          image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71Wr4gIjNCL._AC_UY327_FMwebp_QL65_.jpg"
        />
      </div>
      <div className="acc_row">
        <Product
          id="Prestige"
          title="Prestige Electric Kettle PKOSS - 1500watts, Steel (1.5Ltr), Black"
          price={799}
          rating={4}
          image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71zlLSHbJ-L._AC_UY327_FMwebp_QL65_.jpg"
        />
        <Product
          id="USHA"
          title="USHA Armor AR1100WB 1100 W Dry Iron with Black Weilburger Soleplate (Purple)"
          price={599}
          rating={3}
          image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71q7meZ82qL._AC_UY327_FMwebp_QL65_.jpg"
        />
        <Product
          id="Kent"
          title="KENT 16025 Sandwich Grill 700W | Non-Toxic Ceramic Coating | Automatic Temperature Cut-off with LED Indicator | Adjustable Height Control, Metallic Silver, Standard"
          price={1598}
          rating={4}
          image="https://m.media-amazon.com/images/I/71C3psw4rzS._AC_UY327_QL65_.jpg"
        />
        <Product
          id="Tesora"
          title="Tesora Large Premium Electric Kettle 1.8L |Stainless Steel Inner Body | Auto Power Cut | Boil Dry Protection & Cool Touch Double Wall | Portable | 1500 Watts |1 Year Warranty | (White)"
          price={1349}
          rating={4}
          image="https://m.media-amazon.com/images/I/618H5Z-8fqL._AC_UY327_QL65_.jpg"
        />
      </div>
      <div className="acc_row">
        <Product
          id="AmazonBasics"
          title="AmazonBasics Induction Cooktop 1900 Watt (Multi)"
          price={1899}
          rating={3}
          image="https://m.media-amazon.com/images/I/81FyDeDJ-qL._AC_UY327_QL65_.jpg"
        />
        <Product
          id="Pigeon"
          title="Pigeon 1.5 litre Hot Kettle and Stainless Steel Water Bottle Combo used for boiling Water, Making Tea and Coffee, Instant Noodles, Soup, 1500 Watt with Auto Shut- off Feature - (Silver)"
          price={819}
          rating={3}
          image="https://m.media-amazon.com/images/I/51VvdjBgB5L._AC_UY327_QL65_.jpg"
        />
        <Product
          id="Orient"
          title="Orient Electric Miracle MGMR75S3 750 Watts High Performance Motor with 3 Jars and 2 Storage Jars (Grey)"
          price={3240}
          rating={4}
          image="https://m.media-amazon.com/images/I/718onWt8zNL._AC_UY327_QL65_.jpg"
        />
        <Product
          id="AGARO Grand"
          title="AGARO Grand 1000 Watts Hand Blender With Chopper, Jar & Whisker, 2 Variable Speed Modes & Speed Regulator, Stainless Steel Blades(Black), 400mmx60mm (33635)"
          price={2327}
          rating={4}
          image="https://m.media-amazon.com/images/I/71a3LXfkYbL._AC_UY327_QL65_.jpg"
        />
      </div>
    </div>
  );
}

export default Electronics;
