import React from "react";
import Banner from "../components/Service/Banner";
import Cards from "../components/Service/Cards";
import { AsrsData } from "../data/ServiceData";

const ASRS = () => {
  return (
    <div>
      {AsrsData.map((item, index) => (
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

export default ASRS;
