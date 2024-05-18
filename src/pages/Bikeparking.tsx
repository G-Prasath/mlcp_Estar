import React from "react";
import Banner from "../components/Service/Banner";
import Cards from "../components/Service/Cards";
import { BikeData } from "../data/ServiceData";

const Bikeparking = () => {
  return (
    <div>
      {BikeData.map((item, index) => (
        <>
          <Banner
            imgSrc={item.banner}
            mainTitle={item.title}
            cnt1={item.cnt1}
            cnt2={item.cnt2}
          />
          <Cards card1={item.card_1} card2={item.card_2} card3={item.card_3} />
        </>
      ))}
    </div>
  );
};

export default Bikeparking;
