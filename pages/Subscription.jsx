import React from "react";
import "./subscription.css";
import Pricecard from "../component/Pricecard";
function Subscription() {
  const membership = [
    {
      name: "alpha",
      describtion: "you pay less for more time and enjoy all the gym activites",
      price: "100",
    },
    {
      name: "beta",
      describtion: "you pay less for more time and enjoy all the gym activites",
      price: "120",
    },
    {
      name: "gama",
      describtion: "you pay less for more time but cant enter pilatis classes ",
      price: "150",
    },
    {
      name: "delta",
      describtion: "you pay less for more time and enjoy all the gym activites",
      price: "300",
    },
  ];
  return (
    <div className="bodySubscription">
      <div className="containerSubscription">
        <h1>choose the paing method that suit you:</h1>
        <div>
          {membership?.map((item) => (
            <Pricecard
              price={item.price}
              describtion={item.describtion}
              name={item.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Subscription;
