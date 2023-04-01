import React from "react";
import s from "./PromotionBanner.module.css";
import womanPNG from "../../../image/woman.png";

const leftArrowSVG: string = require("../../../image/left.svg").default;
const rightArrowSVG: string = require("../../../image/right.svg").default;
const PromotionBanner = () => {
  return (
    <div className={s.promotionBanner}>
      <div className={s.container}>
        <div className={s.row}>
          <div className={s.body}>
            <div className={s.period}>*Акция действует до 04/09/22</div>
            <div className={s.title}>
              <span className={s.strong}>Название</span> Акции
            </div>
            <div className={s.subtitle}>
              Условия акции в пару строк, Условия акции в пару строк,
            </div>
            <div className={s.button}>Принять участие</div>
          </div>
          <div className={s.image}>
            <img className={s.woman__image} src={womanPNG} alt="woman" />
          </div>
          <div className={s.arrows}>
            <div className={s.arrow__wrapper}>
              <img className={s.left_arrow} src={leftArrowSVG} alt="left" />
            </div>
            <div className={s.arrow__wrapper}>
              <img className={s.right_arrow} src={rightArrowSVG} alt="left" />
            </div>
          </div>
          <div className={s.slider}>
            <div className={s.rectangle_active}></div>
            <div className={s.rectangle}></div>
            <div className={s.rectangle}></div>
            <div className={s.rectangle}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionBanner;
