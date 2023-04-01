import React from "react";
import s from "./Main.module.css";
import Banner from "./Banner/Banner";
import Promotion from "./PromotionProducts/PromotionProducts";
import Categories from "./Categories/Categories";
import PromotionBanner from "./PromotionBanner/PromotionBanner";
import Brands from "./Brands/Brands";
import Location from "./Location/Location";
const Main = () => {
  return (
    <div className={s.main}>
      <Banner />
      <Promotion />
      <Categories />
      <PromotionBanner />
      <Brands />
      <Location />
    </div>
  );
};

export default Main;
