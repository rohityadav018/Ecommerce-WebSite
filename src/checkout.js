import React from "react";
import "./checkout.css";
import checkout_photo from "./checkout_photo.jpeg";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout({ totalPrice, totalItems }) {
  const [{ basket }, dispatch] = useStateValue();
  // console.log(basket.item.price);
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src={checkout_photo} alt="" />
        <div>
          <h2 className="checkout__title">Your shopping Basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              price={item.price}
              image={item.image}
              title={item.title}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal totalPrice={basket.Price} totalItems={basket?.length} />
      </div>
    </div>
  );
}

export default Checkout;
